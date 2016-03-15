var apiKey = require('./../.env').apiKey;
var convertTempToC = require('./../js/temp.js').convertTempToC;
var convertTempToF = require('./../js/temp.js').convertTempToF;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var zip = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + zip + ',us&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + response.name + " is " + response.main.temp + " Kelvin and " + convertTempToC(response.main.temp) + " in Celsius and " + convertTempToF(response.main.temp) + " in Fahrenheit" );
      console.log(response);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
