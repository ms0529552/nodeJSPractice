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
//Goal:Handle errors for geocoding request
//
//1. Setups an error handler for low-level errors
//2. Test by disabling network request and running app
//3. Setup error handling for no matching results
//4. Test by altering the search term and running the app



const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/12?access_token=pk.eyJ1IjoibXMwNTI5NTUyIiwiYSI6ImNsMHVmM3ZseTAxY3czZnA1cmUycnQ0azIifQ.AzbWY5vjU6uzz8t2RhtXuw&limit=1"

request({url: mapUrl, json: true}, (error, response) => {
    
    if (error)
    {
        console.log("Unable to connect to mapbox server!");
    }
    else if(response.body.message)
    {
        console.log("The search area doesn't exist!")
    }
    else
    {
        const lat = response.body.features[0].center[1];
        const long = response.body.features[0].center[0];
        console.log("The geocoded address is " + lat + ", " + long + "." );
    }
})