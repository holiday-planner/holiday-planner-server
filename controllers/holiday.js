const axios = require('axios');
const unixTime = require('../helpers/unixtime');
const geocoding = require('../helpers/geocoding');


class Controller {
    static getWeather(req, res, next) {
        const date = unixTime.convertToUnixTime(req.body.date);
        
        geocoding.convertToGeocoding(req.body.address, (coordinate) => {
            if(coordinate === 'Not found') {
                next('Not found');
            } else {
                axios.get(`https://api.darksky.net/forecast/1a39dde7473f0ada56cd3fcef07cd1c2/${coordinate.lat},${coordinate.lng},${date}/`)
                    .then( response => {
                        res.status(response.status).json(response.data.daily.data[0].summary)
                    })
                    .catch( err => {
                        next(err);
                    })
            }
        })
    }
}

module.exports = Controller;