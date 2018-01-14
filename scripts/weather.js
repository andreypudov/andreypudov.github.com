/*
 * IntelliJustice Intelligent Referee Assistant System
 *
 * The MIT License
 *
 * Copyright 2011-2016 Andrey Pudov.
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

/*function reverseCompassDirection(value) {
    return (((value >= 0) && (value <= 180)) ? value + 180 : value - 180).toFixed(2);
}*/

var spinner = null;

function formatWindDegree(value, short) {
    /* https://en.wikipedia.org/wiki/Points_of_the_compass */
    var points = [
        ['North',                'N',    'N',   'Tramontana',                         0.00,     0.00,   5.62],
        ['North',                'N',    'N',   'Tramontana',                         354.38,   0.00, 360.00],

        ['North',                'N',    'N',   'Tramontana',                         354.38,   0.00,   5.62],
        ['North by east',        'NbE',  'N',   'Quarto di Tramontana verso Greco',   5.63,    11.25,  16.87],
        ['North-northeast',      'NNE',  'NNE', 'Greco-Tramontana',                   16.88,   22.50,  28.12],
        ['Northeast by north',   'NEbN', 'NNE', 'Quarto di Greco verso Tramontana',   28.13,   33.75,  39.37],
        ['Northeast',            'NE',   'NE',  'Greco',                              39.38,   45.00,  50.62],
        ['Northeast by east',    'NEbE', 'NE',  'Quarto di Greco verso Levante',      50.63,   56.25,  61.87],
        ['East-northeast',       'ENE',  'ENE', 'Greco-Levante',                      61.88,   67.50,  73.12],
        ['East by north',        'EbN',  'ENE', 'Quarto di Levante verso Greco',      73.13,   78.75,  84.37],
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
            return '<span class=\'wi wi-wind wi-wind-table wi-from-' + point[2].toLowerCase() + '\' />' + '&nbsp;'
                + '<strong title=\'' + point[0] + '\'>' + ((short) ? point[1] : point[0]) + '</strong> ';
        }
    }
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

function getLocationByWindDegree(value) {
    var locations = [
        ['N',   'Minina, Habary',                 0.00,       0.00,   11.25],
        ['N',   'Minina, Afonino, Gorbatov',    348.75,       0.00,  360.00],

        ['N',   'Minina,',                      348.75,       0.00,    11.25],
        ['NNE', 'Minina',                        11.26,      22.50,    33.75],
        ['NE',  'Afonino',                       33.76,      45.00,    56.25],
        ['ENE', 'Afonino',                       56.26,      67.50,    78.75],
        ['E',   'Afonino',                       78.76,      90.00,   101.25],
        ['ESE', 'Afonino',                      101.26,     112.50,   123.75],
        ['SE',  'Vetchak',                      123.76,     135.00,   146.25],
        ['SSE', 'Vetchak, Okulovo',             146.26,     157.50,   168.75],
        ['S',   'Kuzhnechiha, Okulovo',         168.76,     180.00,   191.25],
        ['SSW', 'Kuzhnechiha, Okulovo',         191.26,     202.50,   213.75],
        ['SW',  'Surikova, Elektron, Gorbatov', 213.76,     225.00,   236.25],
        ['WSW', 'Surikova, Elektron',           236.26,     247.50,   258.75],
        ['W',   'Oksky, Elektron',              258.76,     270.00,   281.25],
        ['WNW', 'Oksky, Habary, Surikova',      281.26,     292.50,   303.75],
        ['NW',  'Habary, Lyskovo',              303.76,     315.00,   326.25],
        ['NNW', 'Habary, Lyskovo',              326.26,     337.50,   348.75]];

    for (var index = 0; index < locations.length; ++index) {
        var location = locations[index];

        if ((value >= location[2]) && (value <= location[4])) {
            return '<strong>' + location[1] + '</strong>';
        }
    }
}

function getWindDegreeByDay(report, index) {
    var previous = new Date(report[index].getTime() * 1000).getDay();
    var value    = 0;
    var count    = 0;

    for (var jndex = index; jndex < report.length; ++jndex) {
        var entry = report[jndex];
        var date  = new Date(entry.getTime() * 1000);

        if (date.getDay() !== previous) {
            break;
        }

        value = value + ((entry.getWindDirection() < 180)
            ? entry.getWindDirection()
            : (360 - entry.getWindDirection()) * -1);
        count = count + 1;
    }

    value = value / count;

    return (value > 0) ? value : 360 + value;
}

function getCurrentWeatherByCityId(id) {
    var location = OpenWeatherJS.Location.getById(id);

    OpenWeatherJS.CurrentWeather.getWeather(location,
        function(entry, request) {
            var $header      = $('.page-header > h1');
            var $temperature = $('#temperature');

            var $cloudiness  = $('#cloudiness > span');
            var $wind        = $('#wind > span');
            var $pressure    = $('#pressure > span');
            var $humidity    = $('#humidity > span');
            var $sunrise     = $('#sunrise > span');
            var $sunset      = $('#sunset > span');

            var $rain        = $('#rain > span');
            var $snow        = $('#snow > span');
            var $longitude   = $('#longitude > span');
            var $latitude    = $('#latitude > span');

            $header.html('Weather in ' + entry.getLocation().getName() /* + ', ' + result.sys.country */
                + '<small><em>' + moment.unix(entry.getTime()).format('dddd, MMMM DD, YYYY') + '</em></small>');
            $temperature.html('<span class=\'wi ' + getWeatherIconById(entry.getWeatherIconId()) + '\' />' + '&nbsp;'
                + entry.getTemperature() + '<span class=\'wi wi-celsius\' />');

            $cloudiness.text(entry.getWeatherDescription() + ' (' + entry.getCloudiness() + '%)');
            $wind.html(formatWindDegree(entry.getWindDirection(), false)
                + entry.getWindDirection() + '&deg;, '
                + entry.getWindSpeed() + 'm/s');
            $pressure.html(entry.getPressure() + 'hpa');
            $humidity.text(entry.getHumidity() + '%');
            $sunrise.text(moment.unix(entry.getSunrise()).format('HH:mm'));
            $sunset.text(moment.unix(entry.getSunset()).format('HH:mm'));

            $longitude.text(entry.getLocation().getLongitude());
            $latitude.text(entry.getLocation().getLatitude());

            if (entry.getRainVolume() !== 0) {
                $('#rain').css('display', 'block');
                $rain.text(entry.getRainVolume());
            }

            if (entry.getSnowVolume() !== 0) {
                $('#snow').css('display', 'block');
                $snow.text(entry.getSnowVolume());
            }
        }.bind(this),
        function(request, message) {
            initialize();
        }.bind(this));
}

function getForecastWeatherByCityId(id) {
    var location = OpenWeatherJS.Location.getById(id);

    OpenWeatherJS.Forecast.getHourlyForecast(location,
        function(forecast, request) {
            var html      = '';
            var previous  = -1;
            var $tbody = $('#panel-forecast tbody');

            var report = forecast.getReport();

            for (var index = 0; index < report.length; ++index) {
                var entry = report[index];
                var date  = new Date(entry.getTime() * 1000);
                var wind = getWindDegreeByDay(report, index);

                /* next day forecast */
                if (date.getDay() !== previous) {
                    previous = date.getDay();

                    html += '<tr class=\'active\'>'
                        + '<td colspan=\'9\'>'
                        + '<strong>' + moment(date).format('dddd, MMMM DD') + '</strong>'
                        + '<strong> - </strong>'
                        + getLocationByWindDegree(wind) + ' <small>(~' + parseInt(wind) + '&deg;)</small>'
                        + '</td>'
                        + '</tr>';
                }

                var windClass = (entry.getWindSpeed() < 3.0)
                    ? ''
                    : (entry.getWindSpeed() > 4.5)
                        ? 'danger'
                        : 'success';

                html += '<tr class=\'' + windClass  + '\'>'
                    + '<th>' + ('0' + date.getHours()).slice(-2) + '</th>'
                    + '<td>' + '<span class=\'hidden-xs wi ' + getWeatherIconById(entry.getWeatherIconId())
                        + '\' title=\'' + entry.getWeatherDescription() + '\' />' + '&nbsp;' + entry.getTemperature() + '&deg;</td>'

                    + '<td>' + entry.getWindSpeed() + '<span class=\'text-muted\'>m/s</span></td>'
                    + '<td>' + formatWindDegree(entry.getWindDirection(), true) + '</td>'
                    + '<td class=\'hidden-xs\'>' + parseInt(entry.getWindDirection()) + '&deg;</td>'

                    + '<td class=\'hidden-xs\'>' + entry.getPressure() + '<span class=\'text-muted\'>hPa</span></td>'
                    + '<td class=\'hidden-xs\'>' + entry.getHumidity() + '<span class=\'text-muted\'>%</span></td>'
                    + '</tr>';
            }

            $tbody.html(html);

            toggleSpinner();
            drawWeatherMap(0);
        }.bind(this),
        function(request, message) {
            initialize();
        }.bind(this));
}

function drawWeatherMap(degree) {
    var $canvas = $('#canvas');
    var $rose   = $('#rose');

    var context = $canvas[0].getContext('2d');

    $("<img/>")
        .attr("src", $rose.attr("src"))
        .load(function() {
            $canvas.attr({width: this.width, height: this.height});
            context.drawImage($rose[0], 0, 0, this.width, this.height);
        });
}

function toggleSpinner() {
    var options = {
      lines:     13         // The number of lines to draw
    , length:    28         // The length of each line
    , width:     14         // The line thickness
    , radius:    42         // The radius of the inner circle
    , scale:     1          // Scales overall size of the spinner
    , corners:   1          // Corner roundness (0..1)
    , color:     '#000'     // #rgb or #rrggbb or array of colors
    , opacity:   0.25       // Opacity of the lines
    , rotate:    0          // The rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed:     1          // Rounds per second
    , trail:     60         // Afterglow percentage
    , fps:       20         // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex:    2e9        // The z-index (defaults to 2000000000)
    , className: 'spinner'  // The CSS class to assign to the spinner
    , top:       '30%'      // Top position relative to parent
    , left:      '50%'      // Left position relative to parent
    , shadow:    false      // Whether to render a shadow
    , hwaccel:   false      // Whether to use hardware acceleration
    , position:  'absolute' // Element positioning
    };

    var $loading  = $('#panel-loading');
    var $current  = $('#panel-current');
    var $forecast = $('#panel-forecast');
    var target    = document.getElementById($loading.attr('id'));
    var visible   = $loading.css('display') === 'block';

    spinner = new Spinner(options).spin(target);
    if (visible) {
        $loading.css('display', 'none');
        $current.css('display', 'block');
        $forecast.css('display', 'block');
    } else {
        $loading.css('display', 'block');
        $current.css('display', 'none');
        $forecast.css('display', 'none');
    }
}

function initialize() {
    var options = OpenWeatherJS.Options.getInstance();
    options.setKey('1d334b0f0f23fccba1cee7d3f4934ea7');
    options.setUnits(OpenWeatherJS.Units.METRIC);

    var $loading  = $('#panel-loading');
    var $current  = $('#panel-current');
    var $forecast = $('#panel-forecast');
    $forecast.css('display', 'block');

    $loading.css('display', 'none');
    $current.css('display', 'block');
    $forecast.css('display', 'block');

    toggleSpinner();
    getCurrentWeatherByCityId(520555);
    getForecastWeatherByCityId(520555);
}

initialize();
