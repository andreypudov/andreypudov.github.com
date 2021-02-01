/* 
 * IntelliJustice Intelligent Referee Assistant System
 *
 * The MIT License
 *
 * Copyright 2011-2015 Andrey Pudov.
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

/**
 * Langton's Ant simulation.
 *
 * @author    Andrey Pudov        <mail@andreypudov.com>
 * @version   0.00.00
 * %name      langtons-ant.js
 * %date      11:20:00 PM, Sep 23, 2015
 */

/* world matrix */
var world = [];

/* grid size constraints */
var gridWidth  = 96;
var gridHeight = 64;

var cellWidth  = 10;
var cellHeight = 10;

/* canvas size constraints */
var canvasWidth  = (gridWidth  * cellWidth)  + 1;
var canvasHeight = (gridHeight * cellHeight) + 1;

var canvas  = $('#canvas').attr({width: canvasWidth, height: canvasHeight});
var context = canvas.get(0).getContext('2d');

function simulate(generate) {
    initialize();

    if (generate === true) {
        randomizeGrid();
    }

    var x = Math.floor(gridWidth / 2);
    var y = Math.floor(gridHeight / 2);
    var p = 1; /* North = 1, East = 2, South = 3, West = 4 */

    /* simulation process */
    while (true) {
        /* finich ant travel on a grid border */
        if ((x < 0) || (x >= gridWidth) || (y < 0) || (y >= gridHeight)) {
            break;
        }

        if (world[x][y] == 0) {
            /* at white square, turn right, flip the color of the square */
            world[x][y] = 1;
            fillCell(x, y, 'grey');

            switch (p) {
                case 1:
                x = x + 1;
                p = 2;
                break;
            case 2:
                y = y + 1;
                p = 3;
                break;
            case 3:
                x = x - 1;
                p = 4;
                break;
            case 4:
                y = y - 1;
                p = 1;
                break;
            }
        } else {
            /* at black square, turn left, flip the color of the square */
            world[x][y] = 0;
            fillCell(x, y, 'white');

            switch (p) {
                case 1:
                    x = x - 1;
                    p = 4;
                    break;
                case 2:
                    y = y - 1;
                    p = 1;
                    break;
                case 3:
                    x = x + 1;
                    p = 2;
                    break;
                case 4:
                    y = y + 1;
                    p = 3;
                    break;
            }
        }
    }
}

function drawGrid() {
    for (var x = 0; x <= canvasWidth; x += cellWidth) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, canvasHeight);
    }

    for (var y = 0; y <= canvasHeight; y += cellHeight) {
        context.moveTo(0, 0.5 + y);
        context.lineTo(canvasWidth, 0.5 + y);
    }

    context.strokeStyle = (gridWidth < 128 || gridHeight < 128) ? 'grey' : 'white';
    context.stroke();
}

function randomizeGrid() {
    for (var x = 0; x < gridWidth; ++x) {
        for (var y = 0; y < gridHeight; ++y) {
            world[x][y] = Boolean(Math.floor(Math.random() * 2)) ? 1 : 0;
            fillCell(x, y, world[x][y] === 0 ? 'white' : 'grey');
        }
    }
}

function fillCell(x, y, color) {
    context.fillStyle = color;
    context.fillRect((x * cellWidth) + 1, (y * cellHeight) + 1, 
        cellWidth - 1, cellHeight - 1);
}

function initialize() {
    gridWidth  = parseInt($('#gridWidth').val());
    gridHeight = parseInt($('#gridHeight').val());

    canvasWidth  = (gridWidth  * cellWidth)  + 1;
    canvasHeight = (gridHeight * cellHeight) + 1;

    world = new Array(gridWidth);
    for (var x = 0; x < gridWidth; ++x) {
        world[x] = new Array(gridHeight);

        for (var y = 0; y < gridHeight; ++y) {
            world[x][y] = 0;
        }
    }

    $('#canvas').attr({width: canvasWidth, height: canvasHeight});

    $(window).resize(function() {drawGrid();});

    drawGrid();
}

simulate();