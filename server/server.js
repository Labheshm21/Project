const express=require("express")

const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const cors=require("cors")
//create a db connectionn\
// create a separate file and import a file here

mongoose.connect("mongodb+srv://labheshmahajan01:NiutxBCB7cHTrwfX@cluster0.fs5bk.mongodb.net/")
.then(()=>console.log("MongoDb Connected")).catch(error=>console.log(error))



const app=express()
const PORT=process.env.PORT || 5000;


app.use(
    cors({
        origin:"http://localhost:5173/",
        methods:["GET","POST","DELETE","PUT"],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials:true
    })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>console.log(`Server is  Running on port ${PORT})`))
