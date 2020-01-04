const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<passwordflor>@musicality-v04uq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
module.exports = client;
