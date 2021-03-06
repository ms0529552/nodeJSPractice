const request = require('request')

const forecast = (long, lag, callback) =>{

    const requesturl = "http://api.weatherstack.com/current?access_key=f60eecaac5b42970aa444942b1936dfe&query=" + long.toString() + "," + lag.toString() + '&units=f';
    console.log("url=", requesturl);
    
    request( {url: requesturl, json:true}, (error, {body}) =>{
        if(error)
        {
            callback('Unable to connect to location services!', undefined);
        }
        else if(body.error)
        {
            callback(body.error.type + "\n" + body.error.info, undefined);

        }
        else
        {
            callback(undefined, body.current);

        }


    })




};

module.exports = forecast;