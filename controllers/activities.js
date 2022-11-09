const express = require('express');
const game = express.Router();
const Activity = require('../models/activities.js');

game.get('/', (req, res)=>{
    Activity.find({}, (error, activity)=>{
        res.render('index', {activity: activity, currentUser: req.session.currentUser});
    })
}); 

game.get('/new', (req, res)=>{
    res.render('new', {currentUser: req.session.currentUser});
});

game.post('/', (req, res)=>{
    Activity.create(req.body, (error, activity)=>{
        res.redirect('/game');
    })
})

game.get('/:id', (req, res)=>{
    Activity.findById(req.params.id, (error, activity)=>{
        res.render('show', {activity: activity, currentUser: req.session.currentUser})
    });
});

game.get('/:id/edit', (req, res)=>{
    Activity.findById(req.params.id, (error, activity)=>{
        res.render('edit', {activity: activity, currentUser: req.session.currentUser});
    });
});

game.delete('/:id', (req, res)=>{
    Activity.findByIdAndDelete(req.params.id, (error, activity)=>{
        res.redirect('/game');
    })
})

game.put('/:id', (req, res)=>{
    Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, activity) => {
        res.redirect('/game/'+activity.id);
    });
});

game.get('/:id/joingame', (req, res) =>{
    Activity.findById(req.params.id, (err, activity)=>{
        res.render('joingame', {activity: activity, currentUser: req.session.currentUser});
    })
});


module.exports = game;