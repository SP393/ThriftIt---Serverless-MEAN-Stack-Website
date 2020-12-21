var express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const User= require('../models/users');
const Admin = require('../models/admin');
var nodemailer = require ('nodemailer');
 
router.post('/Register' , function(req,res){
    let userdata = req.body
    sendMail(userdata, info => {
        console.log(`The mail has beed send `);
        res.send(info);
      });
    let user = new User(userdata)
    user.save((error, register) =>{
        if(error){
            console.log(error)
        }else{
            let payload = {subject: register._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
    
  
    
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
      subject: "Registration Successfull -ThriftIt!!", // Subject line
      html: `<h1 style="font - family: verdana; max-width:500px; margin-left;background-color: rgb(25, 54, 92)">ThriftIt</h1><br>
      <h3 >Welcome, ${user.firstname} ${user.lastname}.  </h3><br>
      <h4>Thanks you for creating an account on ThriftIt.We are so glad you joined us.</h4><br>
      <h4>We look forward to providing you with and amaizing experience at ThriftIt.</h4><br>
      <h4>Sincerely,</h4><br>
      <h4>ThriftIt Team</h4>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }

router.get('/Register',function(req,res)
{
   
   User.find({})
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
router.get('/Register/:id', (req,res)=>{
    User.findOne({ _id:req.params.id})
    .then((list) =>
        
            res.send(list))
        
    .catch((err) =>console.log(err));
        
});

router.post('/login',function(req,res){
 let userdata= req.body
 User.findOne({email: userdata.email}, (error,user)=>{
     if(error){
         console.log(error);
     }else{
         if(!user){
             res.status(401).send('Invalid email')
         }else
             if(user.password !== userdata.password){
             res.status(401).send('Invalid password')
         }else{
            
            let payload = {subject: user._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token});
            
            
             
         }
        }
     })
 })




router.post('/Admin/Register' , function(req,res){
    let admindata = req.body
    let admin = new Admin(admindata)
    admin.save((error, register) =>{
        if(error){
            console.log(error)
        }else{
           let payload = {subject: register._id}
            let pin = jwt.sign(payload, 'secretKey')
            res.status(200).send({pin})
        }
    })
    
  
    
});
router.get('/Admin/Register',function(req,res)
{
   
   Admin.find({})
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

router.post('/Admin/login',function(req,res){
 let admindata= req.body
 Admin.findOne({email: admindata.email}, (error,admin)=>{
     if(error){
         console.log(error);
     }else{
         if(!admin){
             res.status(401).send('Invalid email')
         }else
             if(admin.password !== admindata.password){
             res.status(401).send('Invalid password')
         }else{
           let payload = {subject: admin._id}
            let pin = jwt.sign(payload, 'secretKey')
             res.status(200).send({pin})
         }
     }
 })
})




module.exports = router