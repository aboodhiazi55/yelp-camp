const express = require('express');
const router = express.Router();
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')
// for render login
router.get('/register', users.renderRegister);
// for regester
router.post('/register', catchAsync(users.register))
// for renderLogin
router.get('/login', users.renderLogin)
// for any error on login and redirect
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)
// for logout
router.get('/logout', users.logout)

// router.post('/logout', function (req, res, next) {
//     req.logout(function (err) {
//         if (err) { return next(err); }
//         req.flash('success', "Goodbye!");
//         res.redirect('/campgrounds');
//     });
// });
module.exports = router;




