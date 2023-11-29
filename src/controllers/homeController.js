
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send("hello world vs ba trung & nodemon")
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