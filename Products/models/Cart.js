var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({

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
    desc: {
        type: String,
        required:true
    },
    
    
    price: {
        type: Number,
        required:true
    },
    
    
    quantity: {
        type: Number,
        required:true
    }
    
});

const Cart= mongoose.model('cart' , CartSchema);
 module.exports = Cart;