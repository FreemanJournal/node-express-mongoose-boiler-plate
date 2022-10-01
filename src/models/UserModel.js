const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
   name:{type:String,require:true}

},{timestamps:true})


const UserModel = mongoose.model('users', dataSchema);
module.exports = UserModel;
