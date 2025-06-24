const express = require("express");
const port = 3001;
const fs = require("fs");
const app = express();

// middlewares   
app.use((req,res,next) => {
    // console.log(req.url) 
    next()
});

app.use((req,res,next) => {
    let url = req.url;
    fs.appendFile("log.txt", `${url}\n`, (err, data) => {
        if(err) console.log(err);
    })    
    next();
})

// routes
app.get("/", (req,res) => {
    res.send({success : true, route : "/"})
})

app.get("/api/users" , (req,res) => {
    res.json({success : true , route : "/api/user"});
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})