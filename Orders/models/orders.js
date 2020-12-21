var mongoose = require('mongoose');

var OrderSchema=mongoose.Schema({
       address:{
        type: String,
        required:true 
    },
    city:{
        type: String,
        required:true
    },
    state:
    {
        type:String,
        required:true
    },
    country:
    {
         type:String,
         required:true
    },
    pincode:{
        type:Number,
        required:true
    }
});
 
var Order  = mongoose.model('Order', OrderSchema);
module.exports= Order;