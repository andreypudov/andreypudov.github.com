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

import scala.collection.mutable.MutableList
import sys.process._
import scala.language.postfixOps
import scala.io.Source
import scala.util.control.Breaks._

import java.awt.geom.AffineTransform
import java.awt.image.{AffineTransformOp, BufferedImage}
import java.io.{File, FileInputStream, FileNotFoundException}
import javax.imageio.ImageIO
import java.nio.file.{Paths, Files}
import java.nio.charset.StandardCharsets
import java.text.{SimpleDateFormat, ParseException}
import java.util.Properties
import java.util.regex.{Pattern, Matcher}

/**
 * Compiles website content and photo albums.
 *
 * @author    Andrey Pudov        <mail@andreypudov.com>
 * @version   0.00.00
 * %name      compile.scala
 * %date      12:10:00 PM, Nov 28, 2014
 */
object Compile {
  val ALBUMS_SOURCE_LOCATION  = "/Users/andrey/Pictures/Albums"
  val PAGES_SOURCE_LOCATION   = "source/pages"

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
  val IGNORE_NAMES      = Array("2012-03-24", "2012-03-30_31", "2012-04-14",
    "2012-04-28", "2012-07-29", "2012-10-06_07", "2012-10-13_14", "2013-04-20_21",
    "2013-06-20_21", "2013-06-28_29", "2013-09-10", "2012-09-22",
    "iPod Photo Cache", ".DS_Store")

  val REFERENCE_MAP = Map(
    "2012/12/russian-emirates.html" -> "p/russian-emirates.html",
    "2012/07/scarlet-sails.html"    -> "p/2012-07-07.html",
    "2012/09/the-golden-age.html"   -> "p/the-golden-age.html",
    "2012/05/imperial-town.html"    -> "p/the-imperial-town.html",
    "2013/07/blog-post.html"        -> "p/russian-athletics-championships.html",

    "2012/12/121212.html"                     -> "p/2012-12-12.html",
    "2012/08/cheboksary-city-day.html"        -> "p/2012-08-19.html",
    "2012/04/dreamflash-cheboksary-2012.html" -> "p/2012-04-29.html",
    "2012/04/dreamflash-nizhny-2012.html"     -> "p/2012-04-21.html",
    "2012/05/international-workers-day.html"  -> "p/2012-05-01.html",
    "2013/01/new-year-memoirs.html"           -> "p/2013-01-01_05.html",
    "2012/07/edge-of-heaven.html"             -> "p/2012-06-24.html",
    "2013/12/the-summer-memories.html"        -> "p/2013-08-18.html",
    "2013/05/the-victory-day-2013.html"       -> "p/2013-05-09.html",
    "2014/05/blog-post.html"                  -> "p/2014-05-10.html",
    "2013/10/blog-post.html"                  -> "p/2013-09-14_27.html",

    "2012/01/coding-standards-in-software.html"           -> "p/coding-standards-in-software-development.html",
    "2011/09/hard-drive-and-ram-disk-comparison.html"     -> "p/hard-drive-and-ram-disk-comparison-report.html",
    "2011/04/hopfield-neural-network.html"                -> "p/hopfield-neural-network.html",
    "2011/09/image-recognition-using-neural-network.html" -> "p/image-recognition-using-neural-network.html",
    "2011/05/objective-c-programming-in-linux.html"       -> "p/objective-c-programming-in-linux.html",
    "2011/04/stock-market-data-in-java-apps-part-i.html"  -> "p/stock-market-data-in-java-applications.html",
    "2011/10/future-of-installation.html"                 -> "p/the-future-of-installation.html",
    "2011/10/packages-build-system.html"                  -> "p/the-packages-build-system.html",
    "2013/02/user-authorization-in-linux.html"            -> "p/user-authorization-in-linux.html",
    "2012/07/xml-parser-in-c.html"                        -> "p/xml-parser-in-c.html",
    "2012/07/xml-parser-in-c-usage-and-examples.html"     -> "p/xml-parser-in-c-usage-and-examples.html")

  class Album {
    var name: String = ""
    var date: String = ""
    var page: String = ""
    var ptyp: String = ""
    var alt:  String = ""

    def getName(): String = {
      return name
    }

    def getDate(): String = {
      return date
    }

    def getPage(): String = {
      return page
    }

    def getType(): String = {
      return ptyp;
    }

    def getAlt(): String = {
      return alt
    }

    def setName(name: String) {
      this.name = name
    }

    def setDate(date: String) {
      this.date = date
    }

    def setPage(page: String) {
      this.page = page
    }

    def setType(ptyp: String) {
      this.ptyp = ptyp
    }

    def setAlt(alt: String) {
      this.alt = alt
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
                def convert(photography: File, _width: Int, _height: Int, prefix: String, index: Int) {
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

                  /* keep original version of large files including meta information */
                  if (scale == 1.0) {
                    //val status = Process(Seq("cp", photography.getAbsolutePath(), directory.getAbsolutePath() +
                    //  File.separator + f"$photographyIndex%03d" +  "_" + album.getName() + "_" + prefix + ".jpg")).!

                    /* keep original file name */
                    val status = Process(Seq("cp", photography.getAbsolutePath(), directory.getAbsolutePath() +
                      File.separator + photography.getName().replaceFirst("[.][^.]+$", "") + "_" + prefix + ".jpg")).!
                    if (status != 0) {
                      println("[FAILED]")
                      sys.exit(status)
                    }

                    return;
                  }

                  val scaleTransform  = AffineTransform.getScaleInstance(scale, scale)
                  val bilinearScaleOp = new AffineTransformOp(scaleTransform, AffineTransformOp.TYPE_BILINEAR)
                  val newImage        = bilinearScaleOp.filter(image,
                    new BufferedImage(width, height, image.getType()))

                  //ImageIO.write(newImage, "jpg",
                  //  new File(directory.getAbsolutePath()
                  //    + File.separator + f"$photographyIndex%03d" +  "_" + album.getName() + "_" + prefix + ".jpg"))

                  /* keep original file name */
                  ImageIO.write(newImage, "jpg",
                    new File(directory.getAbsolutePath() +
                      File.separator + photography.getName().replaceFirst("[.][^.]+$", "") + "_" + prefix + ".jpg"))
                }

                photographyIndex = photographyIndex + 1

                /* save each image with different sizes */
                convert(photography, 640,  424,  "small",  photographyIndex)
                convert(photography, 2048, 1356, "large",  photographyIndex)
              }
            }
          )
        }
      }
    )

    println("[SUCCESS]")
  }

  def compilePages() {
    print("Compiling pages...\t\t")

    println("[SUCCESS]")
  }

  def compileSchemas() {
    print("Compile schemas...\t\t")

    val layout  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "layout.html").mkString
    val header  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "header.html").mkString
    val content = Source.fromFile(SCHEMAS_LOCATION + File.separator + "content.html").mkString
    val footer  = Source.fromFile(SCHEMAS_LOCATION + File.separator + "footer.html").mkString

    val sources = new File(SOURCE_LOCATION).listFiles() ++ new File(PAGES_SOURCE_LOCATION).listFiles()

    sources.foreach(source =>
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

        /* insert images to content block */
        val pattern = Pattern.compile("<insert name=\"image\" value=\".*\" \\/>", Pattern.CASE_INSENSITIVE)
        val matcher = pattern.matcher(_content)
        val buffer  = new StringBuffer()
        while (matcher.find()) {
          val image = _content.substring(matcher.start() + "<insert name=\"image\" value=\"".length(),
            matcher.end() - "\\/>".length() - 1)
          val album = image.substring(0, image.lastIndexOf('_'))
          val alt   = _title.replace("<title>", "").replace("</title>", "")

          matcher.appendReplacement(buffer, image.startsWith("PAGE_") match {
            case true  => getImageTag("images/pages/"  + image, "", false, alt)
            case false => getImageTag("albums/" + album + "/" + image, "", true, alt)
          })
        }
        matcher.appendTail(buffer)
        _content = buffer.toString()

        _footer = _footer.replace("<insert name='scripts' />", _scripts)

        _layout = _layout.replace("<insert name='title' />",   _title)
        _layout = _layout.replace("<insert name='styles' />",  _styles)
        _layout = _layout.replace("<insert name='header' />",  _header)
        _layout = _layout.replace("<insert name='content' />", _content)
        _layout = _layout.replace("<insert name='footer' />",  _footer)

        if (source.getPath().startsWith("source/pages/")) {
          _layout = _layout.replace("href='", "href='../")
          _layout = _layout.replace("src='",  "src='../")

          /* do not change external links */
          _layout = _layout.replace("href='../http", "href='http")
          _layout = _layout.replace("src='../http",  "src='http")

          Files.write(Paths.get("p" + File.separator + source.getName()), _layout.getBytes(StandardCharsets.UTF_8))
        } else {
          /* relative locationf for 404 page */
          if (source.getPath().startsWith("source/404.html")) {
            _layout = _layout.replace("href='", "href='/")
            _layout = _layout.replace("src='",  "src='/")
          }

          Files.write(Paths.get(source.getName()), _layout.getBytes(StandardCharsets.UTF_8))
        }
    })

    println("[SUCCESS]")
  }

  def createAlbumsContents() {
    print("Creating albums content...\t")

    val albums  = new File("albums.html")
    var content = Source.fromFile(albums).mkString

    val controlList: MutableList[String] = MutableList()
    val scriptList:  MutableList[String] = MutableList()
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

        script = script                                                                  +
          "  ],\n"                                                                       +
          "  {\n"                                                                        +
          "    container:      '#blueimp-gallery-carousel-" + photographyIndex + "',\n"  +
          "    carousel:       true,\n"                                                  +
          "    startSlideshow: false\n"                                                  +
          "  }\n"                                                                        +
          ");\n"

        /* open page instead of album when specified */
        val link = metadata.getPage() match {
          case "" => album.getName()
          case x  => metadata.getPage()
        }
        script = script +
          "$('#blueimp-gallery-carousel-" + photographyIndex + "').click(function(e) {\n"                       +
          "\tif ((e.target.tagName.toLowerCase() === 'img') || $(e.target).hasClass('slide')) {\n"              +
          "\t\twindow.open('p/" + link + ".html', '_self')\n"                                        +
          "\t\t$('#blueimp-gallery-carousel-" + photographyIndex + "').addClass('blueimp-gallery-controls');\n" +
          "\t}\n"                                                                                               +
          "})\n"

        controlList += control
        scriptList  += script
      }
    )

    var ALBUMS_PER_PAGE = 5
    var index = 0
    var jndex = 0
    for (index <- 0 until controlList.length by ALBUMS_PER_PAGE) {
      var _content = content
      var _control = ""
      var _script  = ""

      for (jndex <- 0 until (ALBUMS_PER_PAGE + (index % ALBUMS_PER_PAGE))) {
        val kndex = index + jndex
        if (kndex < controlList.length) {
          _control += controlList(kndex)
          _script  += scriptList(kndex)
        }
      }

      /* generate pagination */
      val pagesNumber = (Math.ceil(controlList.length.toDouble / ALBUMS_PER_PAGE)).toInt
      val currentPage = (index / ALBUMS_PER_PAGE)
      val pagination_begin = ""                             +
        "<nav class='text-center'>\n"                       +
        "\t<ul class='pagination'>\n"                       +
        "\t\t<li" + (index match {
          case 0 => " class='disabled'"
          case x => ""}) + ">\n"                            +
        "\t\t\t<a href='" + (currentPage match {
          case 0 => "#"
          case x => (x match {
              case 1 => "albums.html"
              case x => "albums" + ((currentPage - 1) * ALBUMS_PER_PAGE) + ".html"
            })}) + "' aria-label='Previous'>\n"        +
        "\t\t\t\t<span aria-hidden='true'>&laquo;</span>\n" +
        "\t\t\t</a>\n"                                      +
        "\t\t</li>\n"
      val pagination_end = ""                               +
        "\t\t<li" + ((currentPage + 1) match {
          case `pagesNumber` => " class='disabled'"
          case x             => ""}) + ">\n"                +
        "\t\t\t<a href='" + ((currentPage + 1) match {
          case `pagesNumber` => "#"
          case x             => "albums" + ((currentPage + 1) * ALBUMS_PER_PAGE) + ".html"
        }) + "' aria-label='Next'>\n"            +
        "\t\t\t\t<span aria-hidden='true'>&raquo;</span>\n" +
        "\t\t\t</a>\n"                                      +
        "\t\t</li>\n"                                       +
        "\t</ul>\n"                                         +
        "</nav>\n"

      var pagination_middle = ""
      var lndex = 0
      for (lndex <- 0 until pagesNumber) {
        /* <li class="active"><a href="albums.html">1</a></li> */
        pagination_middle = pagination_middle + "\t\t<li" +
          (currentPage match {
            case `lndex` => " class='active'"
            case x       => ""}) + "><a href='"           +
          ((lndex * ALBUMS_PER_PAGE) match {
            case 0 => "albums.html"
            case x => "albums" + x + ".html"})            +
          "'>" + (lndex + 1) + "</a></li>\n"
      }

      _content = _content.replace("<insert name='gallery-control' />", _control +
        pagination_begin + pagination_middle + pagination_end)
      _content = _content.replace("<insert name='gallery-script' />",  _script)

      Files.write(
        Paths.get(index match {
          case 0 => "albums.html"
          case x => "albums" + x + ".html"
        }), _content.getBytes(StandardCharsets.UTF_8))
    }

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
          _photos = _photos + getImageTag(photograph, "../", true, metadata.getAlt())
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

    /* used to sort albums */
    def getDate(album: String): Long = {
      val format  = new SimpleDateFormat("EEEE, MMMM dd, yyyy")
      return format.parse(getAlbumMetadata(album).getDate()).getTime()
    }

    val sources =  (new File(PAGES_SOURCE_LOCATION).listFiles().map(file =>
      file.getName().substring(0, file.getName().lastIndexOf(".html") match {
        case -1 => file.getName().length
        case x  => x
      })
    ) ++ new File(ALBUMS_LOCATION).listFiles().map(file => file.getName())
    ).filter(IGNORE_NAMES.contains(_) == false
    ).sortWith(getDate(_) > getDate(_))

    def construct(entry: String, name: String, date: String): String = {
      return ("\t<li>"    +
             "\t\t<a href='p/" + entry + ".html'>" + name +
             "\t\t\t<small>" + date + "</small>" +
             "\t\t</a>"  +
             "\t</li>\n")
    }

    Map("Album"     -> "Photograph Albums ",
        "Technical" -> "Articles").foreach((postType) => {
      _item = _item + "<li><h2>" + postType._2 + "</h2></li>"

      sources.foreach(entry => {
        val metadata = getAlbumMetadata(entry)
        if ((metadata.getType() == postType._1) && (metadata.getPage().length() == 0)) {
          _item = _item + construct(entry, metadata.getName(), metadata.getDate())
        }
    })})

    val _contents = "<insert name='contents' />"
    content = content.replace(_contents,  "<ol class='table-of-contents'>\n" + _item + "</ol>")

    Files.write(Paths.get("contents.html"), content.getBytes(StandardCharsets.UTF_8))

    println("[SUCCESS]")
  }

  def createReferences() {
    print("Creating references...\t\t")

    REFERENCE_MAP.foreach((reference) => {
      val file = new File(reference._1)
      file.getParentFile().mkdirs()

      var content = Source.fromFile("redirect.html").mkString

      content = content.replace("%DESTINATION_URL%", "//andreypudov.com/" + reference._2)

      content = content.replace("href='", "href='../../")
      content = content.replace("src='",  "src='../../")

      /* do not change external links */
      content = content.replace("href='../../http", "href='http")
      content = content.replace("src='../../http",  "src='http")

      Files.write(Paths.get(reference._1), content.getBytes(StandardCharsets.UTF_8))
    })

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
        album.setPage(properties.getProperty("page", ""))
        album.setType(properties.getProperty("type", "Album"))
        album.setAlt(properties.getProperty("alt", ""))
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

  def getImageTag(photograph: String, prefix: String, postfix: Boolean, alt: String) : String = {
    def isVertical(name: String): Boolean = {
      val image  = ImageIO.read(new File(name + (postfix match {case true => "_small" case false => ""}) + ".jpg"))
      val width  = image.getWidth()
      val height = image.getHeight()

      return (height > width)
    }

    if (isVertical(photograph) == false) {
      return "<img src='" + prefix + photograph +
        (postfix match {case true => "_large" case false => ""}) + ".jpg' " +
        "alt='" + alt + "' class='img-responsive gallery-image'>"
    } else {
      return "<div class='gallery-container'>" +
        "\t<img src='" + prefix + photograph +
          (postfix match {case true => "_large" case false => ""}) + ".jpg' " +
          "alt='" + alt + "' class='img-responsive gallery-image gallery-image-vertical'>" +
        "</div>"
    }
  }

  def main(args: Array[String]) {
    //clean()

    compileStylesheet()
    compileAlbums()
    compilePages()
    compileSchemas()

    createAlbumsContents()
    createAlbumsPages()

    createContents()
    createReferences()

    //publish()
  }
}
