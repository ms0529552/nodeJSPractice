const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


// request({url: url, json: true}, (error, response) =>{
//    console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
    
// })  

//Geocoding 
//Address -> Lat/Long -> Weather

//
//Goal:Create a reusable function for getting the forecast
//
//1. Setups the "forecast" function in utils/forecast.js
//2. Require the function in appp.js and cal it as shown below
//3. The forecst function should have three potential calls to callback:
//  - Low level error, pass string for error
//  - Coordinate error, pass string for error
//  - Success, pass forecast string for data (same foramt as from before)


 
// geocode('Philadelphia New york', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);

// })


forecast(37.8267, -122.4233, (error, data) =>{
    console.log('Error', error);
    console.log('Data', data);
})