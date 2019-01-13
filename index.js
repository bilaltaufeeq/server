const express = require("express")
const app = express()
const port = 8000

app.get("/home" , (req, res)=> res.send("hello world"))
app.get("/aboutus" , (req, res)=> res.send({
    name : "bilal",
    id: 1
}))
app.get("/contactus" , (req, res)=> res.send("03203503006"))
app.get("/dashboard" , (req, res)=> res.send("<h1>Welcome ..... / </h1>"))
app.get("/login" , (req, res)=> res.send("<button>pressme</button>"))
app.listen(port,() => console.log("server is running"))
