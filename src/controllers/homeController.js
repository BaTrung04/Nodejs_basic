const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getABC = (req, res) => {
    res.send("check abc")
}

const get123 = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUsers = (req, res) => {
    // let {email, name, city} = req.body;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(">>check email:", email, 'name:', name, "city: ", city);

    connection.query(
        `INSERT INTO Users  (email, name, city)
        VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {

            console.log(results);
            res.send('create user success !')
        }
    );
}


module.exports = {
    getHomepage,
    getABC,
    get123,
    postCreateUsers
}