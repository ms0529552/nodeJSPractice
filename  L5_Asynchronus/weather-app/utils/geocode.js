const request = require('request')
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibXMwNTI5NTUyIiwiYSI6ImNsMHVmM3ZseTAxY3czZnA1cmUycnQ0azIifQ.AzbWY5vjU6uzz8t2RhtXuw&limit=1";
    console.log(url)
    request( {url: url, json: true }, (error, response) => {
        if(error)
        {
            callback('Unable to connect to location services!', undefined);
        }
        else if(response.body.message)
        {
            callback('Unable to find the location. Please try another search', undefined)
        }
        else
        {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;