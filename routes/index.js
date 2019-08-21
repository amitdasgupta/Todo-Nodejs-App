const express=require('express'); 
const router=express.Router();

const homeController=require('../controller/home_controller');

console.log('router loaded');

router.get('/',homeController.home);

router.post('/add',homeController.add);
router.post('/delete',homeController.delete);

module.exports=router;