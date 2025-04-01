const express= require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv")
const app = express();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/posts")
const commentRoute = require("./routes/comment")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");

//database
const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}



//middlewares
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments", commentRoute)

app.listen(3000,()=>{
    connectDB()
    console.log("app is running on port 3000")
})