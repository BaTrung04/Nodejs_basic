const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}
const getABC = (req, res) => {
    res.send("check abc")
}

const get123 = (req, res) => {
    res.render('sample.ejs')
}
const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    console.log(">>>>req.params::", req.params, userId)
    return res.render('edit.ejs')
}

const postCreateUsers = async (req, res) => {
    // let {email, name, city} = req.body;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(">>check email:", email, 'name:', name, "city: ", city);

    // connection.query(
    //     `INSERT INTO Users  (email, name, city)
    //     VALUES (?, ?, ?);`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('create user success !')
    //     }
    // );
    //----------------
    let [results, fields] = await connection.query(
        `INSERT INTO Users  (email, name, city) VALUES (?, ?, ?);`, [email, name, city],
    );

    console.log(">>>check results: ", results)
    res.send('create user success !')

}


module.exports = {
    getHomepage, getCreatePage, getUpdatePage,
    getABC,
    get123,
    postCreateUsers
}