const mongoose = require('mongoose');
const { Schema } = mongoose;

const movies = new Schema({
    name : String ,
    realease_Year : String ,
    rating : String ,
    stars_in_movie : String ,
    description : String ,
})

const model = mongoose.model('Movies',movies);
module.exports = model ;