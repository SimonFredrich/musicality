const mongoose = require('mongoose');
const schema = {
    title:String,
    content:String
}
const mongoosemodel = new mongoose.model('musicpost',schema);
module.exports = mongoosemodel;