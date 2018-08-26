/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// App doesn't fully wpork as Free API Keys were removed, so instead I used 2 Mock JSON files. So lookup by Zip code functionality doens't work.
function loadWeather() {
    var zip= document.getElementById('zip').value;
    if(zip === ''){
        zip="84653";
    }
    var conditionsPath="http://api.wunderground.com/api/Your_Key/conditions/q/CA/"+zip+".json";
    var forecastPath="http://api.wunderground.com/api/Your_Key/forecast/q/CA/"+zip+".json";


    // GET THE CONDITIONS
    // weatherConditions.open('GET', conditionsPath, true);
    weatherConditions.open('GET', 'mock_san_francisco_conditions.json', true);
    weatherConditions.responseType = 'text';
    weatherConditions.onload = loadWeatherConditions;
    weatherConditions.send();

    // GET THE FORECARST
    // weatherForecast.open('GET', forecastPath, true);
    weatherForecast.open('GET', 'mock_san_francisco_forecast.json', true);
    weatherForecast.responseType = 'text';
    weatherForecast.onload = loadWeatherForecast;
    weatherForecast.send();
}



  function loadWeatherConditions() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);

        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_f;

    } //end if
}; //end function



  function loadWeatherForecast() {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday[0].fcttext;

        for (let i = 1; i < 4; i++) {
            document.getElementById('r' + i + 'c1').innerHTML = fObj.forecast.simpleforecast.forecastday[i].date.weekday;
            document.getElementById('r' + i + 'c3').innerHTML = fObj.forecast.simpleforecast.forecastday[i].high.fahrenheit + "°";
            document.getElementById('r' + i + 'c4').innerHTML = fObj.forecast.simpleforecast.forecastday[i].low.fahrenheit + "°";
            var imagePath = fObj.forecast.simpleforecast.forecastday[i].icon_url;
            document.getElementById('r' + i + 'c2').src = imagePath;
        }

    } //end if
}; //end function


loadWeather(); //calls function to display something initially, in this case the mock data