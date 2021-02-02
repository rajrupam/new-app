const router=require('express').Router();




const { json } = require('body-parser');
const User=require('../models/user');
const controller=require('../controllers/user');


router.get('/',controller.getUser);

router.post('/',controller.postUser);

router.put('/:userId',controller.updateUser)

router.delete('/:userId',controller.deleteUser);


router.post('/search');






module.exports=router