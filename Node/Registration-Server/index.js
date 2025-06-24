const http = require("http");
const port = 3001;
const url = require("url");
const fs = require("fs");
const querystring = require('querystring');

const app = http.createServer((req, res) => {
    const myurl = req.url;
    const parsed = url.parse(myurl, true);

    if (parsed.pathname === "/") {
        // Serve the HTML form
        fs.readFile("form.html", "utf-8", (err, data) => {
            if (err) {
                res.end("<h1>Server Error</h1>");
            } else {
                res.end(data);
            }
        });
    }
    else if (parsed.pathname === "/Submit" && req.method == "GET") {
        const dataToAdd = parsed.query;
        console.log("Form Data Received:", dataToAdd);

        fs.readFile("users.json", "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading users.json:", err);
                res.end("Internal Server Error");
            } else {
                let jsonData = [];
                try {
                    jsonData = JSON.parse(data);
                } catch (e) {
                    console.error("Invalid JSON, resetting file.");
                }

                jsonData.push(dataToAdd);

                fs.writeFile("users.json", JSON.stringify(jsonData, null, 2), (err) => {
                    if (err) {
                        console.error("Error writing to users.json:", err);
                        res.end("Error saving data");
                    } else {
                        res.end("Form Submitted Successfully using GET method");
                    }
                });
            }
        });
    }
    else if (parsed.pathname === "/Submit" && req.method == "POST") {
        // Data coming in chunks we need to collect and concat
        let data1 = ""
        req.on("data", (chunks) => {
            data1 = data1 + chunks;
        });
        req.on("end", () => {

            const parsedData = querystring.parse(data1);
            console.log("Form data received:", parsedData);

            let users = [];
            try {
                const fileData = fs.readFileSync("users.json", "utf-8");
                users = JSON.parse(fileData);  // assuming it's an array
            } catch (err) {
                console.log("No existing users file or invalid JSON, creating a new one.");
            }

            users.push(parsedData);

            fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
            console.log("Data saved to users.json");
        })
        res.end("Form submitted using POST method")
    }
    else {
        res.end("404 - Page Not Found");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
