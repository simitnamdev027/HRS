 const express = require("express");
 const path = require("path");

 const bodyParser = require('body-parser');
 
 const app = express( );

 require("./db/conn");
 const Patient =require("./models/usersignup")
 const port = process.env.PORT || 5000;

 const static_path = path.join(__dirname, "../public");

 app.use(express.static(static_path));
 app.get("/home" , (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
 }) ;

 app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/Alogout', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/ADlogout', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

app.listen(port, ()  => {
    console.log(`server is running at port no. ${port}`);
})