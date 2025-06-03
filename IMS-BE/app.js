//This is the main Backend File


//including Express to accpets and restrict requests coming to our APIs : /users, /players, /teams

const libExpress = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const uri = "mongodb://hetsoni:1234@127.0.0.1:27017/IMS?authSource=admin"

//creating a server
const server = libExpress()

server.use(cors()) //We do this to allow Cross Origin Resource Sharing, to keep BE open to requests from any platform

mongoose.connect(uri)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));



//making api "/users" accept post method request
//this function accepts two parameters->api or path and a function to execute when the request is acceoted
//that function has two parameters->request and respond 
server.post("/users",(req,res) => {
    console.log("User created")
    res.send("User Created")
})

//we need to send a response to FE when it request
//there are two ways we can send whole webpage or just the data
//if we send webpage from BE then is SSR (Server Side Rendering)
//If we send only data then on client the webpage will be created then it is called CSR (Client Side Rendering)
server.get("/users",(req,res) => {
    console.log("user get")
   // res.send("User Get")  We use .send to respond with entire webpage SSR 
   //But we are using CSR so we'll only send the data

   //Our FE will use fetch() command in js, To send data from BE to FE we'll use 'json'
   
   res.json([
    {"name" : "u1"},
    {"name" : "u2"},
    {"name" : "u3"},
    {"name" : "u4"},
    {"name" : "u5"},
    {"name" : "u6"}
   ])
})

// '/players' API
server.post("/players",(req,res) => {
    console.log("Player created")
    res.send("Player Created")
})


// '/teams' API
server.post("/teams",(req,res) => {
    console.log("Team created")
    res.send("Team Created")
})

//Making server listen on port 8000  => write APIs before this

server.listen(8000,() => {
    console.log("Server is up and running And listening on port 8000")
})