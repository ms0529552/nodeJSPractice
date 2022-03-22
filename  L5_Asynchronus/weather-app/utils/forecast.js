const request = require('request')

const forecast = (long, lag, callback) =>{

    const requesturl = "http://api.weatherstack.com/current?access_key=f60eecaac5b42970aa444942b1936dfe&query=" + long.toString() + "," + lag.toString() + '&units=f';
    console.log("url=", requesturl);
    
    request( {url: requesturl, json:true}, (error, response) =>{
        if(error)
        {
            callback('Unable to connect to location services!', undefined);
        }
        else if(response.body.error)
        {
            callback(response.body.error.type + "\n" + response.body.error.info, undefined);

        }
        else
        {
            callback(undefined, response.body.current);

        }


    })




};

module.exports = forecast;