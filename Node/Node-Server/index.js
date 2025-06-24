// Making server using http modules

const http = require("http");
const fs = require("fs");
const timeString = new Date().toLocaleTimeString();

const port = 3001;

const home = fs.readFileSync("homepage.html", "utf-8");

const app = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write(home);
        // fs.appendFileSync("log.txt", `\n ${timeString}  : Homepage`)
        res.end();

    } else if (req.url == "/`contanctus`") {
        res.write("Prashant Sarviaya - 9316163578");
        fs.appendFileSync("log.txt", `\n ${timeString}  : Contact Us`)
        res.end();

    }else if(req.url == "/favicon.ico") {

    }
    else {
        res.write("404");
        fs.appendFileSync("log.txt", `\n ${timeString}  : ${req.url}`)
        res.end();

    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});   //to give the port number and continue the server untill i stop;
