var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TypesSchema = new Schema({
   
    title: String
    
});

const Types= mongoose.model('types' , TypesSchema);
 module.exports = Types;