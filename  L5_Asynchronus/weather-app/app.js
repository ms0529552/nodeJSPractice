const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f60eecaac5b42970aa444942b1936dfe&query=37.8267,-122.4233&units=f';

var apiKey = "f60eecaac5b42970aa444942b1936dfe";
var weatherUrl = "http://api.weatherstack.com/";


// request({url: url, json: true}, (error, response) =>{
//    console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
    
// })  


//Geocoding 
//Address -> Lat/Long -> Weather

//
//Goal:Print the lat/long for Los Angeles
//
//1. Fire off a new request to the URL explored in browser
//2. Have the request module parse it as JSON
//3. Print both the latitude and longtitude to the terminal
//4. Test your work!


const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXMwNTI5NTUyIiwiYSI6ImNsMHVmM3ZseTAxY3czZnA1cmUycnQ0azIifQ.AzbWY5vjU6uzz8t2RhtXuw&limit=1"

request({url: mapUrl, json: true}, (error, response) => {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];

    console.log("The geocoded address is " + lat + ", " + long + "." );
})