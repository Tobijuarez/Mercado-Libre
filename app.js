const { aplication } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.get ("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get ("/login", (req, res)=> {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
app.get ("/register", (req, res)=> {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});


app.listen (port, ()=> console.log("esta corriendo en el puerto " + port));