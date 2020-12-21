const express=require('express');
const router=express.Router();
const Order=require('../models/orders');
const mongoose= require('mongoose');
const axios=require ('axios');
var nodemailer = require ('nodemailer');
//Create a new order

router.post('/orders' , function(req,res){

    let order= req.body

    sendMail(order, info => {
        console.log(`The mail has beed send `);
        res.send(info);
      });
    Order.create(req.body).then(function(list){

    res.send(list);
    
    
    });
    
});

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'sruthipandiath@gmail.com',
        pass: 'fujisyuske'
      }
    });
  
    let mailOptions = {
      from: 'sruthipandiath@gmail.com', // sender address
      to: 'sruthipandiath@gmail.com', // list of receivers
      subject: "Order Confirmation -ThriftIt!!", // Subject line
      html: `<h1 style="font - family: verdana; max-width:500px; margin-left;background-color: rgb(25, 54, 92)">ThriftIt</h1><br>
      <h4 >Hey Sherry,</h4><br>
      <h4>Thanks you for your order! A record of your purchase information appears below. Please keep this email as the confirmation of your order.</h4><br>
      <h2>ORDER INFORMATION</h2><br>
      <h4>Order Date: 17-12-2020</h4>
      <h4>Order ID:5fd2278d6020b04268a62de5</h4>
      
      <h4>ThriftIt Team</h4>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }
router.get('/orders',function(req,res)
{
   
   Order.find({})
   .exec(function(err,list)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(list);
           res.json(list);
       }
   })
});



module.exports = router ;