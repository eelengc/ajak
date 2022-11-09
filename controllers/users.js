const express = require('express');
const user = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');

user.get('/new', (req, res)=>{
    res.render('users/new.ejs');
})

user.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, currentUser)=>{
        if (error){
            console.log('Username is unavailable' + error.message);
        }else{
            res.redirect('/session/new');
        };
    });
});

module.exports = user;