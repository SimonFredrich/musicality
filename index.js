const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes.js');
const postapi = require('./postapi.js');


// mongodb atlas.
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://music:<ality>@musicality-v04uq.mongodb.net/test?retryWrites=true&w=majority&ssl=true&replicaSet=<replica setname>&authSource=admin'";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

app.use('/',express.static('./static'));
app.use('/admin',express.static('./cms/build'));
app.use('/post',postapi);
app.use('/api',express.json());
app.use('/api',router);

app.listen(port, ()=>console.log(`server listening on port ${port}`));
