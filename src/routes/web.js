const express = require('express');
const { getHomepage, getABC, get123,
    postCreateUsers, getCreatePage, getUpdatePage,
    postUpdateUsers, postDeleteUsers, postHandleDeleteUsers
} = require('../controllers/homeController')
const router = express.Router();



router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/123', get123);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUsers);
router.post('/update-user', postUpdateUsers);

router.post('/delete-user', postHandleDeleteUsers);
router.post('/delete-user/:id', postDeleteUsers);

module.exports = router;