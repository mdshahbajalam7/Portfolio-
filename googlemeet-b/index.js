const express = require("express")
const cors = require('cors')
const {Server} = require("socket.io")
const http = require("http")
const mettingRouter = require("./Router/index")
require("dotenv").config()
const bodyparser = require("body-parser") 
// const { connection } = require("mongoose")
const socketManger = require("./controllers/socketManger")
// const mongoose = require("mongoose")
const port = process.env.PORT
// const connect = mongoose.connect("mongodb://localhost:27017/googlemeet")
const app = express()

const httpServer = http.createServer(app)
app.use([
    cors(),
    bodyparser.json(),
    bodyparser.urlencoded({extended:false}),
    mettingRouter()
])
const io = require("socket.io")(Server)
io.on("connection",socketManger)

app.use("/",(req,res)=>{
    res.send("hello metting")
})
// app.use("/meet",mettingRouter)

httpServer.listen(port,()=>{
    // await connect
    // console.log("connect server start on ")
    console.log(`server is running on port ${port} `);
})