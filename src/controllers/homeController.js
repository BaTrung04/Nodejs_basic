const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');
const { getUserById, updateUserById } = require('../services/CRUDService');

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
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    //console.log(">>>>req.params::", req.params, userId)

    let user = await getUserById(userId);

    res.render('edit.ejs', { userEdit: user }) // x <- y
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

const postUpdateUsers = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    console.log(">>check email:", email, 'name:', name, "city: ", city, "userId: ", userId);
    await updateUserById(email, name, city, userId)
    //res.send('Update user success !')
    res.redirect('/');
}




module.exports = {
    getHomepage, getCreatePage, getUpdatePage,
    getABC, postUpdateUsers,
    get123,
    postCreateUsers
}