const axios = require('axios');

class HolidaysController {
    static getHolidays(req, res, next) {
        let api_key = 'f2d6479f42bc1300246b4a3a707c4cf72edfd393';
        let month = req.body.month;
        let year = req.body.year;
        axios({
            method: 'get',
            url: month ? `https://calendarific.com/api/v2/holidays?api_key=${api_key}&country=id&year=${year}&month=${month}` : `https://calendarific.com/api/v2/holidays?api_key=${api_key}&country=id&year=${year}`
        })
            .then(holidays => {
                res.status(200).json(holidays.data.response)
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }
}

module.exports = HolidaysController;