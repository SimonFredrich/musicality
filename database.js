const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/musicality', {useNewUrlParser: true},()=>console.log('database is connected'));
module.exports = mongoose;