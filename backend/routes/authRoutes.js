const express=require('express');
const router=express.Router();
const cors=require('cors');

const {test,register,login}=require('../controllers/authControllers');

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:3000'
    })
);

router.get('/',test);
router.post('/register',register);
router.post('/login',login);

module.exports=router;