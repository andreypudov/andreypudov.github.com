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

import java.io.File

/**
 * Compiles webite content and photo albums.
 *
 * @author    Andrey Pudov        <mail@andreypudov.com>
 * @version   0.00.00
 * %name      Compile.scala
 * %date      12:10:00 PM, Nov 28, 2014
 */
object Compile {
  val ALBUMS_SOURCE_LOCATION  = "/Users/andrey/Pictures/Albums"

  val ALBUMS_LOCATION         = "albums"
  val LIBRARIES_LOCATION      = "libraries"
  val SOURCE_LOCATION         = "source"

  val BOOTSTRAP_LOCATION      = LIBRARIES_LOCATION + "/bootstrap"
  val BOOTSTRAP_LESS_LOCATION = BOOTSTRAP_LOCATION + "/less/bootstrap.less"
  val BOOTSTRAP_CSS_LOCATION  = BOOTSTRAP_LOCATION + "/css/bootstrap.css"

  def compileStylesheet() {
    print("Compile style sheets...\t\t")

    val status = (("lessc " + BOOTSTRAP_LESS_LOCATION) #> new File(BOOTSTRAP_CSS_LOCATION)).!
    if (status != 0) {
      println("[FAILED]")
      sys.exit(status)
    }

    println("[SUCCES]")
  }

  def compileImages() {
    print("Compile photo albums...\t\t")

    (new File(ALBUMS_SOURCE_LOCATION)).listFiles().foreach(album =>
      album match {
        case album if (album.isDirectory()) => {
          println(album)
        }
      }
    )

    println("[SUCCESS]")
  }

  def main(args: Array[String]) {
    compileStylesheet()
    //compileImages()
  }
}
