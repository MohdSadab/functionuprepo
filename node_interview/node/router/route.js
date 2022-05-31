
const express = require('express')
const router= express.Router()


router.use(express.json());

router.get("/:userName",(req,res)=>{
   res.send('data received '+ req.params.userName)
})


router.post("/:userName",(req,res)=>{
   res.send('data received '+ req.params.userName)
})


router.route('/:username/:id')
   .get((req,res)=>{
   res.send(' welcome to page, ' + req.params.username)
})
   .post((req,res)=>{
   processData(req.params.username);
   res.send('data received ')
})
 
module.exports = router;

