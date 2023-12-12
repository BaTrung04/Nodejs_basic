const connection = require('../config/database');

const getHomepage = (req, res) => {
    //process data
    //call model
    let users = [];

    connection.query(
        'SELECT  * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>results:", results); // results contains rows returned by server

            console.log('>>>check user:', users)
            res.send(JSON.stringify(users))
        }
    );
}
const getABC = (req, res) => {
    res.send("check abc")
}

const get123 = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    get123
}