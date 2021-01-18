const router = require('express').Router();
const bcrypt = require('bcrypt');
const checkAuth = require('../../../utils/auth');
const {

} = require('../../../models');

router.post('/login', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})