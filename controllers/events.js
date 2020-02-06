const axios = require('axios');
const { getDateTomorrow, formatDate } = require('../helpers/dateFormat')

class EventsController {
    static getEvents(req, res, next) {
        let api_key = 'VMHAKkD0UcBDEaQHx6T1DEbpPVZ5HpUq';
        let startDate = formatDate(req.body.date)
        let endDate = formatDate(getDateTomorrow(req.body.date))
        axios({
            method: 'get',
            url: `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${api_key}&startDateTime=${startDate}&endDateTime=${endDate}`,
            async: true,
            dataType: "json",
        })
            .then(response => {
                res.status(200).json(response.data._embedded)
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }
}

module.exports = EventsController;