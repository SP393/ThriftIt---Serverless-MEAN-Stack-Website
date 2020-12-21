var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart1Schema = new Schema({

    userId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    productId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    
    
    price: {
        type: Number,
        required:true
    }
    
    
    
});

const Cart1= mongoose.model('cart1' , Cart1Schema);
 module.exports = Cart1;