const {Schema,model,mongoose}=require('mongoose')
const { required } = require('nodemon/lib/config')
const ContactmeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide your name"]
    },
    email:{
        type:String,
        required:[true,"please provide your Valid Email"]
    },
    messages:{
        type:String,
        required:[true,"please add messages for us"]
    }
})

module.exports =model("contactme",ContactmeSchema)