const axios = require('axios');

module.exports = {
    convertToGeocoding: function(address, callback) {
        const credential = process.env.CREDENTIAL_GOOGLE_GEOCODING;
    
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${credential}`)
            .then( response => {
                if(response.data.results.length) {
                    const lat = response.data.results[0].geometry.location.lat;
                    const lng = response.data.results[0].geometry.location.lng;
                    const coordinate = {lat, lng}
                    callback(coordinate);
                } else {
                    callback('Not found');
                }
                
            })
            .catch( err => {
                console.log(err);
            })
    }
}

