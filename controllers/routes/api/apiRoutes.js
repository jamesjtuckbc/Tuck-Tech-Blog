const router = require('express').Router();
const bcrypt = require('bcrypt');
const checkAuth = require('../../../utils/auth');

router.post('/login', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
})