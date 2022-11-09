const express = require('express');
const session = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');

session.get('/new', (req, res)=>{
    res.render('sessions/new.ejs');
})

session.post('/', (req, res)=>{
    User.findOne({email: req.body.email}, (error, userFound)=>{
        if (error){
            res.send('User not found');
        }else{
            if (userFound){
                if (bcrypt.compareSync(req.body.password, userFound.password)){
                    req.session.currentUser = userFound;
                    res.redirect('/game');
                }else{
                    res.send('Wrong password');
                }
            }else{
                res.send('Invalid User ID');
            }
        }
    })
})

session.delete('/', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/game');
    })
})

module.exports = session;