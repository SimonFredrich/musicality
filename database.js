//mongodbatlas
const mongoose = require('mongoose');
mongoose.connect('mongodb://test:case@musicality-shard-00-00-v04uq.mongodb.net:27017,musicality-shard-00-01-v04uq.mongodb.net:27017,musicality-shard-00-02-v04uq.mongodb.net:27017/test?ssl=true&replicaSet=Musicality-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true},()=>console.log('database is connected'));
module.exports = mongoose;

//localhost
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/musicality', {useNewUrlParser: true},()=>console.log('database is connected'));
module.exports = mongoose;*/
