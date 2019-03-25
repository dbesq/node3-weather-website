
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/73df3d452e0d6938a46716d8827ca1ab/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to conect to weather service', undefined)
        } else if(body.error){
            callback('Unable to find location.', undefined)
        } else{
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                humidity: body.currently.humidity
            })
        }
    })
}

module.exports = forecast