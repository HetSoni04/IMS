//This is the main Backend File


//including Express to accpets and restrict requests coming to our APIs : /users, /players, /teams

const libExpress = require("express")


//creating a server
const server = libExpress()


//making api "/users" accept post method request
//this function accepts two parameters->api or path and a function to execute when the request is acceoted
//that function has two parameters->request and respond 
server.post("/users",(req,res) => {
    console.log("User created")
    res.send("User Created")
})

server.get("/users",(req,res) => {
    console.log("user get")
    res.send("User Get")
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