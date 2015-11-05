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
 * Weather forecast.
 *
 * @author    Andrey Pudov        <mail@andreypudov.com>
 * @version   0.00.00
 * %name      weather.js
 * %date      10:00:00 PM, Nov 03, 2015
 */

function reverseCompassDirection(value) {
    return (((value >= 0) && (value <= 180)) ? value + 180 : value - 180).toFixed(2);
}

function formatWindDegree(value) {
    /* https://en.wikipedia.org/wiki/Points_of_the_compass */
    var points = [
        ['North',                'N',    'N',   'Tramontana',                         354.38,   0.00,   5.62],
        ['North by east',        'NbE',  'N',   'Quarto di Tramontana verso Greco',   5.63,    11.25,  16.87],
        ['North-northeast',      'NNE',  'NNE', 'Greco-Tramontana',                   16.88,   22.50,  28.12],
        ['Northeast by north',   'NEbN', 'NNE', 'Quarto di Greco verso Tramontana',   28.13,   33.75,  39.37],
        ['Northeast',            'NE',   'NE',  'Greco',                              39.38,   45.00,  50.62],
        ['Northeast by east',    'NEbE', 'NE',  'Quarto di Greco verso Levante',      50.63,   56.25,  61.87],
        ['East-northeast',       'ENE',  'ENE', 'Greco-Levante',                      61.88,   67.50,  73.12],
        ['East by northv',       'EbN',  'ENE', 'Quarto di Levante verso Greco',      73.13,   78.75,  84.37],
        ['East',                 'E',    'E',   'Levante',                            84.38,   90.00,  95.62],
        ['East by south',        'EbS',  'E',   'Quarto di Levante verso Scirocco',   95.63,  101.25, 106.87],
        ['East-southeast',       'ESE',  'ESE', 'Levante-Scirocco',                   106.88, 112.50, 118.12],
        ['Southeast by east',    'SEbE', 'ESE', 'Quarto di Scirocco verso Levante',   118.13, 123.75, 129.37],
        ['Southeast',            'SE',   'SE',  'Scirocco',                           129.38, 135.00, 140.62],
        ['Southeast by south',   'SEbS', 'SE',  'Quarto di Scirocco verso Ostro',     140.63, 146.25, 151.87],
        ['South-southeast',      'SSE',  'SSE', 'Ostro-Scirocco',                     151.88, 157.50, 163.12],
        ['South by east',        'SbE',  'SSE', 'Quarto di Ostro verso Scirocco',     163.13, 168.75, 174.37],
        ['South',                'S',    'S' ,  'Ostro',                              174.38, 180.00, 185.62],
        ['South by west',        'SbW',  'S',   'Quarto di Ostro verso Libeccio',     185.63, 191.25, 196.87],
        ['South-southwest',      'SSW',  'SSW', 'Ostro-Libeccio',                     196.88, 202.50, 208.12],
        ['Southwest by south',   'SWbS', 'SSW', 'Quarto di Libeccio verso Ostro',     208.13, 213.75, 219.37],
        ['Southwest',            'SW',   'SW',  'Libeccio',                           219.38, 225.00, 230.62],
        ['Southwest by west',    'SWbW', 'SW',  'Quarto di Libeccio verso Ponente',   230.63, 236.25, 241.87],
        ['West-southwest',       'WSW',  'WSW', 'Ponente-Libeccio',                   241.88, 247.50, 253.12],
        ['West by south',        'WbS',  'WSW', 'Quarto di Ponente verso Libeccio',   253.13, 258.75, 264.37],
        ['West',                 'W',    'W',   'Ponente',                            264.38, 270.00, 275.62],
        ['West by north',        'WbN',  'W',   'Quarto di Ponente verso Maestro',    275.63, 281.25, 286.87],
        ['West-northwest',       'WNW',  'WNW', 'Maestro-Ponente',                    286.88, 292.50, 298.12],
        ['Northwest by west',    'NWbW', 'WNW', 'Quarto di Maestro verso Ponente',    298.13, 303.75, 309.37],
        ['Northwest',            'NW',   'NW',  'Maestro',                            309.38, 315.00, 320.62],
        ['Northwest by north',   'NWbN', 'NW',  'Quarto di Maestro verso Tramontana', 320.63, 326.25, 331.87],
        ['North-northwest',      'NNW',  'NNW', 'Maestro-Tramontana',                 331.88, 337.50, 343.12],
        ['North by west',        'NbW',  'NNW', 'Quarto di Tramontana verso Maestro', 343.13, 348.75, 354.37]];

    for (var index = 0; index < points.length; ++index) {
        var point = points[index];

        if ((value >= point[4]) && (value <= point[6])) {
            return '<span class=\'wi wi-wind wi-wind-table wi-towards-' + point[2].toLowerCase() + '\' />' + '&nbsp;'
                + '<strong title=\'' + point[0] + '\'>' + point[1] + '</strong> '; 
        }
    }

    return value;
}

function getWeatherIconById(id) {
    /* http://openweathermap.org/weather-conditions */
    var relations = [
        /* clear sky */
        ['01d', 'wi-day-sunny'],
        ['01n', 'wi-night-clear'],
        /* few clouds */
        ['02d', 'wi-day-cloudy'],
        ['02n', 'wi-night-alt-cloudy'],
        /* scattered clouds */
        ['03d', 'wi-cloud'],
        ['03n', 'wi-cloud'],
        /* broken clouds */
        ['04d', 'wi-cloudy'],
        ['04n', 'wi-cloudy'],
        /* shower rain */
        ['09d', 'wi-day-rain'],
        ['09n', 'wi-night-alt-rain'],
        /* rain */
        ['10d', 'wi-day-rain'],
        ['10n', 'wi-night-rain'],
        /* thunderstorm */
        ['11d', 'wi-day-thunderstorm'],
        ['11n', 'wi-night-thunderstorm'],
        /* snow */
        ['13d', 'wi-day-snow'],
        ['13n', 'wi-night-snow'],
        /* mist */
        ['50d', 'wi-day-fog'],
        ['50n', 'wi-night-fog']];

    for (var index = 0; index < relations.length; ++index) {
        if (id === relations[index][0]) {
            return relations[index][1];
        }
    }

    return 'wi-na';
}

function getCurrentWeatherByCityId(id) {
    var $header      = $('.page-header > h1');
    var $temperature = $('#temperature');
    var $description = $('#description');

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=metric&appid=1d334b0f0f23fccba1cee7d3f4934ea7', function(result) {
        $header.html('Weather in ' + result.name /* + ', ' + result.sys.country */
            + '<small><em>' + moment().format('dddd, MMMM DD, YYYY') + '</em></small>');
        $temperature.html('<span class=\'wi ' + getWeatherIconById(result.weather[0].icon) + '\' />' + '&nbsp;'
            + result.main.temp + '&nbsp;'
            + '<span class=\'wi wi-celsius\' />');
        $description.html(result.weather[0].description);
        // result.weather[0].description);
    })
    .fail(function() {
        /* incorrect response */
    });
}

function getForecastWeatherByCityId(id) {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=metric&appid=1d334b0f0f23fccba1cee7d3f4934ea7', function(result) {
        var html      = '';
        var previous  = -1;
        var $tbody = $('#panel-forecast tbody');

        for (var index = 0; index < result.list.length; ++index) {
            var entry = result.list[index];
            var date  = new Date(entry.dt * 1000);

            /* next day forecast */
            if (date.getDay() !== previous) {
                previous = date.getDay();

                html += '<tr class=\'active\'>'
                    + '<td colspan=\'9\'>' + '<strong>' + moment(date).format('dddd, MMMM DD') + '</strong>' + '</td>'
                    + '</tr>';
            }      

            html += '<tr>'
                + '<th>' + ('0' + date.getHours()).slice(-2) + '</th>'
                + '<td>' + entry.main.temp + '</td>'
                /* + '<td>' + entry.main.temp_min + ' - ' + entry.main.temp_max + '</th>' */

                + '<td>' + entry.wind.speed + '</td>'
                + '<td>' + formatWindDegree(reverseCompassDirection(entry.wind.deg)) + '</td>'
                + '<td>' + reverseCompassDirection(entry.wind.deg) + '</td>'

                + '<td>' + entry.main.pressure + '</td>'
                + '<td>' + entry.main.sea_level + '</td>'
                + '<td>' + entry.main.grnd_level + '</td>'
                + '<td>' + entry.main.humidity + '</td>'
                + '</tr>';
        }

        $tbody.html(html);
    })
    .fail(function() {
        /* incorrect response */
    });
}

function initialize() {
    var cityId = 520555;

    getCurrentWeatherByCityId(cityId);
    getForecastWeatherByCityId(cityId);
}

initialize();