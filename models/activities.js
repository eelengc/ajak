const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
    game: {type: String, required: true},
    numberOfPlayers: {type: Number, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    organizer: {type: String},
    organizerEmail: {type: String}
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;