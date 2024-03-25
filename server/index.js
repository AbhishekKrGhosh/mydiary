import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express()



app.use(bodyParser.json({limit: "30mb", extended: "true"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}))
app.use(cors())
app.use('/posts', postRoutes)

const pword = process.env.psword
const uname = process.env.usname

const CONNECTION_URL = `mongodb+srv://${uname}:${pword}@cluster0.m5cl0cf.mongodb.net/`
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT, ()=>console.log(`server running on PORT: ${PORT}`)))
.catch((error)=>console.log(error.message))

