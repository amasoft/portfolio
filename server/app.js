const express =require('express')
const app=express()
const mongoose=require('mongoose')
const contactMe=require('./models/ContactmeModel')
const router=require('./routers/contactmeRouter')
const cors=require('cors')
app.use(express.json())
app.use(cors())
const PORT=5000
//middlewares
// app.use(express.json())
const CONNECTIONURL="mongodb+srv://amatech:4yftXEyhOq8hioRE@cluster0.8y0zs.mongodb.net/blog"
mongoose.connect(CONNECTIONURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then((result)=>{
    console.log("Database connection successfull");
    app.listen(PORT)
}
)
.catch((err)=>console.log(err))

app.use(router);
