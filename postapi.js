const express = require('express');
const router = express.Router();

router.get('/:id',(req,res)=>{
    res.sendFile(__dirname + '/static/post.html');
});



module.exports = router;