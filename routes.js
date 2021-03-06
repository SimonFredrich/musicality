const express = require('express');
const router = express.Router();
const musicpostmodel = require('./models/musicpost.js');

router.get('/', async (req,res)=>{
   await musicpostmodel.find({}).then((response)=>res.send(response));
})
router.get('/test', async (req,res)=>{
   await res.send('this is a response');
})
router.get('/:id', async (req,res)=>{
   await musicpostmodel.findById(req.params.id).then((response)=>res.send(response));
})
router.post('/', async (req,res)=>{
    const musictodb = new musicpostmodel({title:req.body.title,content:req.body.content});
    await musictodb.save().then(res.send({response:'success!'})).catch({response:'db failure'});
})
router.delete("/:id", async (req, res)=>{
    await musicpostmodel.deleteMany({ _id: req.params.id },(err)=>{
        res.send(err);
    });
  });
router.put("/:id", async (req,res)=>{
    await musicpostmodel.findOneAndUpdate({_id:req.params.id}, req.body, (err, place)=> {
        res.send(place);
      });
})
module.exports = router;