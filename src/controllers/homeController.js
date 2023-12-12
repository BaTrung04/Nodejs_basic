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
    console.log(">>check res boy:", req.body)
    res.send('create a new user')
}


module.exports = {
    getHomepage,
    getABC,
    get123,
    postCreateUsers
}