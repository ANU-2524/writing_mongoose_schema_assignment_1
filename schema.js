const mongoose = require("mongoose") ;

const ProfileSchema = new mongoose.Schema({
        firstName : {type :  String , required : true , trim : true } , 
        lastName : {type :  String , required : true  , trim : true }  , 
        age : { type : Number , min : 0 , default : 0   } 
}) ; 

const CreateSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true , 
        unique : true, trim : true  
    }
    ,
    email : {
        type : String , 
        required : true , 
        unique : true , trim : true 
    }
    ,
    password : {
        type : String , 
        required : true , trim : true 
    }
    ,
    roles : {
        type : [String] ,
        default : ['user']

    }
    , 
    profile :   ProfileSchema , 
    lastLogin : {
        type : Date , 
        default : Date.now
    }

})

const model = mongoose.model("usermodel" , CreateSchema) ;
module.exports = model ;