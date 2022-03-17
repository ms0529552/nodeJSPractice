const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f60eecaac5b42970aa444942b1936dfe&query=37.8267,-122.4233';

var apiKey = "f60eecaac5b42970aa444942b1936dfe";
var weatherUrl = "http://api.weatherstack.com/";


request({url: url, json: true}, (error, response) =>{
   console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
    
})  


//Goal Print a small forecase to the user 

//1. Print: "It is currently 58.55 degrees out. It feels like 5 degress out.""
//2. Test your work.