var express = require('express');
var app = express();
const router = express.Router();
var multer = require('multer');
const Product= require('../models/products');
const Category= require('../models/category');
const Types= require('../models/Types');
const Cart=require('../models/Cart');
const {logger} = require('../logger')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');



  


router.post('/products' , function(req,res){
    Product.create(req.body).then(function(list){

    res.send(list);
    logger.info(`Post Products: `, list);
    
    });
    
});

/**
 * @swagger
 * /products:
 * get:
 * description: Get all products
 * response:
 * 200:
 * description: Success
 */

router.get('/products',function(req,res)
{
   
   Product.find({})
   .exec(function(err,list)
   {
       if(err)
       {
           res.send('error has occured');
           logger.error("Error in getting all products")
       }else{
           logger.info(`All Products: `,list);
           res.json(list);
       }
   })
});

router.get('/products/:id',(req,res) =>{
    Product.findById(req.params.id).then((list) =>{
        if(list){
            res.json(list)
            logger.info(`Single Product: `,list);
        }else{
            res.send("Inavlid Category")
            logger.error("Inavlid Category")
        }
    }).catch((err) =>{
        if(err){
            throw err
        }
    })
});
router.delete('/products/:id' , function(req,res){
    Product.findByIdAndRemove(req.params.id).then(function(list){
        

    res.send(list);
    logger.info(`This product was deleted `,list);
    
    })
});


router.post('/Types' , function(req,res){
    Types.create(req.body).then(function(list){

    res.status(201).send(list);
    logger.info(`Post Categories: `,list);
    
    });
    
});



router.get('/Types',function(req,res)
{
   
   Types.find({})
   .exec(function(err,list)
   {
       if(err)
       {
           res.send('error has occured');
           logger.error(`Error in getting all categories`)
       }else{
        logger.info(`All Categories: `,list);
           res.json(list);
       }
   })
});

router.get('/Types/:title',(req,res) =>{
    Types.find({title:req.params.category}).then((list) =>{
        if(list){
            res.json(list)
            logger.info(`One Category: `,list);
        }else{
            res.status(404).send("Inavlid Category")
            logger.error(`Invalid category to get a single category`)
        }
    }).catch((err) =>{
        if(err){
            throw err
        }
    })
});

router.delete('/Types/:id' , function(req,res){
    Types.findByIdAndRemove(req.params.id).then(function(list){
        

    res.send(list);
    logger.info(`One category deleted `, list);
    
    });
    


});
router.post('/Category' , function(req,res){
    Category.create(req.body).then(function(list){

    res.send(list);
    logger.info(`Post Sub-Category: `);
    
    });
    
});
router.get('/Category',function(req,res)
{
   
   Category.find({})
   .exec(function(err,list)
   {
       if(err)
       {
           res.send('error has occured');
           logger.error(`Error in getting All Categories `);
       }else{
           console.log(list);
           logger.info(`All Categories: `, list);
           res.json(list);
       }
   })
});

router.put('/Category', (req, res) =>{
    Category.findById(req.body._id, (err, list)=>{
        if(err)
        res.status(500).json({errmsg:err});
        list.title = req.body.title;
        list.type = req.body.type;
        list.save((err,list)=>{
            res.status(500).json({errmsg:err});
            res.status(200).json({msg: list})
        })
    })
})

router.get('/Category/:type/category',(req,res) =>{
    Category.find({type:req.params.type}).then((list) =>{
        if(list){
            res.json(list)
            logger.info(`One Category: `,list);
        }else{
            res.send("Inavlid Category")
            logger.error(`Invalid Category to find One Sub-Category`);
        }
    }).catch((err) =>{
        if(err){
            throw err
        }
    })
});



router.delete('/Category/:id' , function(req,res){
    Category.findByIdAndRemove(req.params.id).then(function(list){
        

    res.send(list);
    logger.error(`One Sub-Category deleted`,list);
    
    });
});
    
    



router.get('/Category/:category/products', (req,res)=>{
    Product.find({category: req.params.category}).then((list) =>{
        if(list){
            res.json(list)
            logger.info(`Products Of Same Sub-Category: `,list);
        }else{
            res.send("Inavlid Category")
            logger.error(`Invalid Category for All Products Of Same Category `);
        }
    }).catch((err) =>{
        if(err){
            throw err
        }
    })
});

router.get('/products/:id', (req,res)=>{
    Product.findOne({ _id:req.params.id})
    .then((list) =>
        
            res.send(list))
        
    .catch((err) =>console.log(err));
        
});

router.post('/Cart/:userId/:productId/:title/:desc/:price' , (req,res)=>{
    (new Cart({'userId': req.params.userId,'productId': req.params.productId,'title': req.params.title,'desc': req.params.desc,'price': req.params.price, 'quantity': req.body.quantity}))
 .save()
 .then((cart)=> res.send(cart))
 .catch((error)=>console.log(error));
});


router.get('/Cart/:userId',(req,res) =>{
    Cart.find({'userId':req.params.userId}).then((list) =>{
        if(list){
            res.json(list)
            logger.info(`Get Products In Cart `,list);
        }else{
            res.send("Inavlid user")
            logger.error(`Invalid UserId To Get Products In Cart`);
        }
    }).catch((err) =>{
        if(err){
            throw err
        }
    })
});

router.get('/Cart',function(req,res)
{
   
   Cart.find({})
   .exec(function(err,list)
   {
       if(err)
       {
           res.send('error has occured');
           logger.error(`Error To Get Products In Cart `);
       }else{
           console.log(list);
           logger.info(`Get Products In Cart: `,list);
           res.json(list);
       }
   })
});

router.delete('/Cart/:id' , function(req,res){
    Cart.findByIdAndRemove(req.params.id).then(function(list){
        

    res.send(list);
    logger.info(`One Product Removed From Cart`,list);
    
    });
});






   
module.exports = router;