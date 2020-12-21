var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    }
    
});

const Users= mongoose.model('user' , UsersSchema);
 module.exports = Users;