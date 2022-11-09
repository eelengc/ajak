const express = require('express');
const session = require('express-session')
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 3000;
mongoURI = process.env.MONGODB_URI || 'mongodb+srv://eeleng1:eeleng1@cluster0.g2edfxy.mongodb.net/gameActivity'

mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=>{
    console.log("Mongo DB is connected")
});

mongoose.connection.on('error', (error) => {
    console.log('Error connecting with MongoDB: '+error.message);
});

mongoose.connection.on('disconnected', ()=>{
    console.log('Disconnected from Mongo DB');
});

const gameController = require('./controllers/activities.js');
const userController = require('./controllers/users.js');
const sessionController = require('./controllers/sessions.js');
const Activity = require('./models/activities.js');

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'randomstringvalues',
    resave: false,
    saveUninitialized: false
}))
app.use('/game', gameController);
app.use('/user', userController);
app.use('/session', sessionController);

app.get('/', (req, res)=>{
    res.redirect('/game');
})

app.listen(PORT, ()=>{
    console.log('listening on port');
});