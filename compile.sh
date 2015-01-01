#!/bin/sh
exec scala "$0" "$@"
!#

/*
 * Andrey Pudov Official Website 
 *
 * The MIT License
 *
 * Copyright 2011-2014 Andrey Pudov.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import sys.process._
import scala.language.postfixOps
import scala.io.Source

import java.awt.geom.AffineTransform
import java.awt.image.AffineTransformOp
import java.awt.image.BufferedImage
import java.io.{File, FileInputStream, FileNotFoundException}
import javax.imageio.ImageIO
import java.nio.file.{Paths, Files}
import java.nio.charset.StandardCharsets
import java.text.{SimpleDateFormat, ParseException}
import java.util.Properties

/**
 * Compiles webite content and photo albums.
 *
 * @author    Andrey Pudov        <mail@andreypudov.com>
 * @version   0.00.00
 * %name      compile.scala
 * %date      12:10:00 PM, Nov 28, 2014
 */
object Compile {
  val ALBUMS_SOURCE_LOCATION  = "/Users/andrey/Pictures/Albums"

  val ALBUMS_LOCATION         = "albums"
  val LIBRARIES_LOCATION      = "libraries"
  val PAGES_LOCATION          = "p"
  val SCHEMAS_LOCATION        = "schemas"
  val SOURCE_LOCATION         = "source"
  val METADATA_LOCATION       = "source/metadata"

  val BOOTSTRAP_LOCATION      = LIBRARIES_LOCATION + "/bootstrap"
  val BOOTSTRAP_LESS_LOCATION = BOOTSTRAP_LOCATION + "/less/bootstrap.less"
  val BOOTSTRAP_CSS_LOCATION  = BOOTSTRAP_LOCATION + "/css/bootstrap.css"

  val PHOTOGRAPHY_NAMES = Array("jpg", "jpeg")
  val IGNORE_NAMES      = Array("iPod Photo Cache", ".DS_Store")

  class Album {
    var name: String = ""
    var date: String = ""

    def getName(): String = {
      return name;
    }

    def getDate(): String = {
      return date;
    }

    def setName(name: String) {
      this.name = name
    }

    def setDate(date: String) {
      this.date = date
    }
  }

  def compileStylesheet() {
    print("Compile style sheets...\t\t")

    val status = (("lessc " + BOOTSTRAP_LESS_LOCATION) #> new File(BOOTSTRAP_CSS_LOCATION)).!
    if (status != 0) {
      println("[FAILED]")
      sys.exit(status)
    }

    println("[SUCCESS]")
  }

  def compileAlbums() {
    print("Compile photo albums...\t\t")

    (new File(ALBUMS_SOURCE_LOCATION)).listFiles().foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        var directory = new File(ALBUMS_LOCATION + File.separator + album.getName())
        if ((directory.exists() == false) || (directory.isDirectory() == false)) {
          directory.delete()
          directory.mkdir()

          var photographyIndex = 0

          album.listFiles().foreach(photography =>
            {
              var extension = ""
              var index     = photography.getName().lastIndexOf('.')
              if (index > 0) {
                extension = photography.getName().substring(index + 1).toLowerCase()
              }

              if (photography.isFile() && PHOTOGRAPHY_NAMES.contains(extension)) {
                def convert(image: File, _width: Int, _height: Int, prefix: String, index: Int) {
                  val image = ImageIO.read(photography)

                  /* calculate image width */
                  var width  = 0
                  var height = 0
                  var scale  = 0.0
                  if (image.getWidth() > image.getHeight()) {
                    scale  = _width.toDouble / image.getWidth()
                    width  = _width
                    height = (image.getHeight() * scale).toInt
                  } else {
                    scale  = _width.toDouble / image.getHeight()
                    width  = (image.getWidth() * scale).toInt
                    height = _width
                  }

                  val scaleTransform  = AffineTransform.getScaleInstance(scale, scale)
                  val bilinearScaleOp = new AffineTransformOp(scaleTransform, AffineTransformOp.TYPE_BILINEAR)
                  val newImage        = bilinearScaleOp.filter(image, 
                    new BufferedImage(width, height, image.getType()))

                  ImageIO.write(newImage, "jpg", 
                    new File(directory.getAbsolutePath() 
                      + File.separator + f"$photographyIndex%03d" +  "_" + album.getName() + "_" + prefix + ".jpg"))
                }

                photographyIndex = photographyIndex + 1

                /* save each image with different sizes */
                convert(photography, 800,  600,  "small",  photographyIndex)
                convert(photography, 1024, 768,  "medium", photographyIndex)
                convert(photography, 2048, 1356, "large",  photographyIndex)
              }
            }
          )
        } 
      }
    )

    println("[SUCCESS]")
  }

  def compileSchemas() {
    print("Compile schemas...\t\t")

    val layout  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "layout.html").mkString
    val header  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "header.html").mkString
    val content = Source.fromFile(SCHEMAS_LOCATION + File.separator + "content.html").mkString
    val footer  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "footer.html").mkString

    (new File(SOURCE_LOCATION)).listFiles().foreach(source =>
      if (source.isFile() && (IGNORE_NAMES.contains(source.getName()) == false)) {
        val text = Source.fromFile(source).mkString

        var _index   = 0
        var _layout  = layout
        var _title   = "<title>Andrey Pudov</title>"
        var _styles  = ""
        var _header  = header
        var _content = content
        var _footer  = footer
        var _scripts = ""
        var _block   = ""

        _block = "<define name='title'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _title = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _block = "<define name='styles'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _styles = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _block = "<define name='header'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _header = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _block = "<define name='content'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _content = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _block = "<define name='footer'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _footer = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _block = "<define name='scripts'>"
        _index = text.indexOf(_block)
        if (_index >= 0) {
          _scripts = text.substring(_index + _block.length, text.indexOf("</define>", _index)).trim()
        }

        _footer = _footer.replace("<insert name='scripts' />", _scripts)

        _layout = _layout.replace("<insert name='title' />",   _title)
        _layout = _layout.replace("<insert name='styles' />",  _styles)
        _layout = _layout.replace("<insert name='header' />",  _header)
        _layout = _layout.replace("<insert name='content' />", _content)
        _layout = _layout.replace("<insert name='footer' />",  _footer)

        Files.write(Paths.get(source.getName()), _layout.getBytes(StandardCharsets.UTF_8))
    })

    println("[SUCCESS]")
  }

  def createAlbumsContents() {
    print("Creating albums content...\t")

    val albums  = new File("albums.html")
    var content = Source.fromFile(albums).mkString

    var photographyIndex = 0

    (new File(ALBUMS_LOCATION)).listFiles().reverse.foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        photographyIndex = photographyIndex + 1
        val control = "<div id='blueimp-gallery-carousel-" + photographyIndex + "' class='blueimp-gallery blueimp-gallery-controls blueimp-gallery-carousel'>\n" +
          "\t<div class='slides'></div>\n"  +
          "\t<h3 class='title'></h3>\n"     +
          "\t<a class='prev'>‹</a>\n"       +
          "\t<a class='next'>›</a>\n"       +
          "\t<a class='play-pause'></a>\n"  +
          "\t<ol class='indicator'></ol>\n" +
        "</div>\n"
        val metadata = getAlbumMetadata(album.getName())

        var script = ""  +
          "var name_"    + photographyIndex + " = '" + metadata.getName() + "';\n"  +
          "var gallery_" + photographyIndex + " = blueimp.Gallery(\n" +
          "  [\n"

        if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
          val photographs = album.listFiles.filter(_.getName.endsWith(".jpg")).map(file =>
            file.getPath().substring(0, file.getPath().lastIndexOf('_'))).distinct

          photographs.foreach(photograph => {
            script = script                                         +
              "    {\n"                                             +
              "       title:     name_" + photographyIndex + ",\n"  +
              "       href:      '" + photograph + "_large.jpg',\n" +
              "       type:      'image/jpeg',\n"                   +
              "       thumbnail: '" + photograph + "_small.jpg'\n"  +
              "    },\n"
          })          
        }

        script = script                                                            +
          "  ],\n"                                                                 +
          "  {\n"                                                                  +
          "    container: '#blueimp-gallery-carousel-" + photographyIndex + "',\n" +
          "    carousel:  true\n"                                                  +
          "  }\n"                                                                  +
          ");\n"

        script = script +
          "$('#blueimp-gallery-carousel-" + photographyIndex + "').click(function(e) {window.open('p/" + album.getName() + ".html');});"

        val _control = "<insert name='gallery-control' />"
        val _script  = "<insert name='gallery-script' />"
        content = content.replace(_control,  control + "\n" + _control)
        content = content.replace(_script,   script  + "\n" + _script)
      }
    )

    content = content.replace("<insert name='gallery-control' />", "")
    content = content.replace("<insert name='gallery-script' />",  "")

    Files.write(Paths.get("albums.html"), content.getBytes(StandardCharsets.UTF_8))

    println("[SUCCESS]")
  }

  def createAlbumsPages() {
    print("Creating albums pages...\t")

    val content = Source.fromFile("album.html").mkString

    (new File(ALBUMS_LOCATION)).listFiles().reverse.foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        val metadata = getAlbumMetadata(album.getName())

        var _content = content
        var _photos  = ""

        _content = _content.replace("<title></title>", "<title>Andrey Pudov - " + metadata.getName() + "</title>")
        _content = _content.replace("<h1>Album</h1>", "<h1>" + metadata.getName() +
          "<small><em>" + metadata.getDate() + "</em></small></h1>")

        _content = _content.replace("href='", "href='../")
        _content = _content.replace("src='",  "src='../")

        _content = _content.replace("<insert name='gallery-control' />", "")
        _content = _content.replace("<insert name='gallery-script' />",  "")

        val photographs = album.listFiles.filter(_.getName.endsWith(".jpg")).map(file =>
          file.getPath().substring(0, file.getPath().lastIndexOf('_'))).distinct

        photographs.foreach(photograph => {
          def isVertical(name: String): Boolean = {
            val image  = ImageIO.read(new File(name + "_small.jpg"))
            val width  = image.getWidth()
            val height = image.getHeight()

            return (height > width)
          }

          if (isVertical(photograph) == false) {
            _photos = _photos +
              "<img src='../" + photograph + "_large.jpg' class='img-responsive gallery-image'>"
          } else {
            _photos = _photos +
              "<div class='gallery-container'>" +
              "\t<img src='../" + photograph + "_small.jpg' class='img-responsive gallery-image gallery-image-vertical'>" +
              "</div>"
          }
        })

        val _item = "<insert name='gallery-item' />"
        _content = _content.replace(_item,  _photos + "\n" + _item)

        Files.write(Paths.get(PAGES_LOCATION + File.separator + album.getName() + ".html"),
          _content.getBytes(StandardCharsets.UTF_8))
      }
    )

    println("[SUCCESS]")
  }

  def createContents() {
    print("Creating contents...\t\t")

    var content = Source.fromFile("contents.html").mkString
    var _item   = ""

    (new File(ALBUMS_LOCATION)).listFiles().reverse.foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        val metadata = getAlbumMetadata(album.getName())

        _item = _item + "\t<li><a href='p/" + album.getName() + ".html'>" + metadata.getName() + "</a></li>\n"
      }
    )

    val _contents = "<insert name='contents' />"
    content = content.replace(_contents,  "<ol>\n" + _item + "</ol>")

    Files.write(Paths.get("contents.html"), content.getBytes(StandardCharsets.UTF_8))

    println("[SUCCESS]")
  }

  def publish() {
    print("Publishing website...\t\t")

    var status = ("git add --all .").!
    if (status != 0) {
      println("[FAILED]")
      sys.exit(status)
    }

    status = Process(Seq("git", "commit", "-m", "Automatic webite publishing.")).!
    if (status != 0) {
      println("[FAILED]")
      sys.exit(status)
    }

    status = ("git push").!
    if (status != 0) {
      println("[FAILED]")
      sys.exit(status)
    }

    println("[SUCCESS]")
  }

  def clean() {
    print("Cleaning content...\t\t")

    def deleteRecursively(file: File): Array[(String, Boolean)] = {
      Option(file.listFiles).map(_.flatMap(f => deleteRecursively(f))).getOrElse(Array()) :+ (file.getPath -> file.delete)
    }

    /* clean schemas */
    (new File(SOURCE_LOCATION)).listFiles().foreach(source =>
      if ((IGNORE_NAMES.contains(source.getName()) == false)) {
        var compiled = new File(source.getName())
        if (compiled.exists()) {
          compiled.delete()
        }
      }
    )

    /* clean albums */
    (new File(ALBUMS_LOCATION)).listFiles().foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        deleteRecursively(new File(album.getAbsolutePath()))
      }
    )

    /* clean albums */
    (new File(PAGES_LOCATION)).listFiles().foreach(album =>
      if (album.isDirectory() && (IGNORE_NAMES.contains(album.getName()) == false)) {
        deleteRecursively(new File(album.getAbsolutePath()))
      }
    )

    println("[SUCCESS]")
  }

  def getAlbumMetadata(name: String): Album = {
    val album = new Album()
    val meta  = new File(METADATA_LOCATION + File.separator + name)

    if (meta.exists()) {
      val properties = new Properties()
      val format1    = new SimpleDateFormat("yyyy-MM-dd")
      val format2    = new SimpleDateFormat("EEEE, MMMM dd, yyyy")

      try {
        properties.loadFromXML(new FileInputStream(meta))

        album.setName(properties.getProperty("name", ""))
        album.setDate(format2.format(
          format1.parse(
            properties.getProperty("date", "1970-01-01"))))
      } catch {
        case e: FileNotFoundException => {
          println("[FAILURE]")
          sys.exit()
        }
        case e: ParseException => {
          println("[FAILURE]")
          sys.exit()
        }
      }
    }

    return album
  }

  def main(args: Array[String]) {
    //clean()

    compileStylesheet()
    compileAlbums()
    compileSchemas()

    createAlbumsContents()
    createAlbumsPages()

    createContents()

    //publish()
  }
}
