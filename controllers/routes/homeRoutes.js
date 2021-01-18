const router = require('express').Router();
const checkAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    try {
        const login = req.session.logged_in;
        const home = true;
        const dashboard = false;
        res.render('homepage', { login, home, dashboard });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', checkAuth, (req, res) => {
    try {
        const login = req.session.logged_in;
        const home = false;
        const dashboard = true;
        res.render('dashboard', { login, home, dashboard });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        const login = req.session.logged_in;
        const home = false;
        const dashboard = true;
        res.render('login', { login, home, dashboard });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    try {
        const login = req.session.logged_in;
        const home = false;
        const dashboard = false;
        res.render('signup', { login, home, dashboard });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.redirect('/');
        });
    } else {
        res.redirect('/login');
    }
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;