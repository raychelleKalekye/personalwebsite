const express=require('express')
const db=require('../database')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})
module.exports=router;