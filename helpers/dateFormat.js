function getDateTomorrow(date) {
    let someDate = new Date(date);
    someDate.setDate(someDate.getDate() + 1);
    return someDate
}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return `${[year, month, day].join('-')}T00:00:00Z`;
}

module.exports = { getDateTomorrow, formatDate };