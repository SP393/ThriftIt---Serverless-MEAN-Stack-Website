var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
var router = require('./routes/api');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
      info: {
   
        title: "Products API",
        version: "1.0.0",
        description: "Products API Information",
        contact: {
          name: "Shopping Cart"
        },
        servers: ["http://localhost:5000"]
      }
    },
    // ['.routes/*.js']
    apis: ["index.js"]
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


mongoose.connect('mongodb+srv://cart:shopping@shopping.mcys0.mongodb.net/Shopping?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connected');
});
mongoose.Promise= global.Promise;
app.use(allowCrossDomain);


    
app.use(bodyParser.json());
app.use( '/', router);

/**
 * @swagger
 * definitions:
 *  Types:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: title of Category
 *     example: 'Women'
 *    
 *  Category:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: title of the Subcategory
 *     example: 'Skirt'
 *    type:
 *     type: string
 *     description:  title of Category
 *     example: 'Women'
 *    
 *  products:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: name of the product
 *     example: 'jacket'
 *    
 *    desc:
 *     type: string
 *     description: desc of the product
 *     example: 'Bomber'
 *    category:
 *     type: string
 *     description: category of the product
 *     example: 'jackets'
 *    price:
 *     type: number
 *     description: cost of the product
 *     example: 500
 *   image:
 *     type: string
 *     description: img of the product
 *     example: 'images'
 *     
 */

 /**
 * @swagger
 * /Types:
 *  post:
 *   summary: create Types
 *   description: create Types
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Types'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : failing in creating Category
 */
app.post("/Types");

 /**
 * @swagger
 * /Category:
 *  post:
 *   summary: create Sub-category
 *   description: create Sub-category
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Category'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : failing in creating Sub-Category
 */
app.post("/Category");
 /**
 * @swagger
 * /products:
 *  post:
 *   summary: create products
 *   description: create products
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/products'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : failing in creating product
 */
app.post("/products");

/**
 * @swagger
 * /Types:
 *  get:
 *   summary: get All Types
 *   description: get All Types
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description:error
 */
 app.get("/Types", cors());

 /**
 * @swagger
 * /Category:
 *  get:
 *   summary: get All Category
 *   description: get All Category
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description:error
 */
app.get("/Category", cors());

/**
 * @swagger
 * /products:
 *  get:
 *   summary: get All Products
 *   description: get All Products
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description:error
 */
app.get("/products", cors());

/**
 * @swagger
 * /Types/{type_id}:
 *  delete:
 *   summary: delete Type
 *   description: delete Type
 *   parameters:
 *    - in: path
 *      name: type_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of Type
 *      example: 5fdb825821179e42bc44e8d4
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/Types/:id")


/**
 * @swagger
 * /Category/{category_id}:
 *  delete:
 *   summary: delete Category
 *   description: delete Category
 *   parameters:
 *    - in: path
 *      name: category_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of Category
 *      example: 5fdb831b6747e0af4db76835
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/Category/:id")

/**
 * @swagger
 * /products/{product_id}:
 *  delete:
 *   summary: delete product
 *   description: delete product
 *   parameters:
 *    - in: path
 *      name: product_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of Product
 *      example: 5fdb83e3b9dc66de0d397c40
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/products/:id")
app.listen(5000);
