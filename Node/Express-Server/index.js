const express = require("express");
const port = 3001;
let data = require("./data.json")
const app = express();
const path = require("path");
const fs = require("fs");

const regfile = path.join(__dirname, "registration/index.html");

// middleWare
app.use(express.static(path.join(__dirname, "registration")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.get("/" , (req, res) => {b  
//     res.send("<h1 style='color:red;'>Welcome to the Homepage</h1>");
// } )


app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
    const uid = parseInt(req.params.id);
    console.log(typeof (uid));
    const showData = data.find((user) => {
        return user.id == uid;
    });
    if (!showData) {
        res.send("404 not found")
    }
    res.json(showData);
})


app.put("/api/users/:id", (req, res) => {
    const uid = Number(req.params.id);
    const body = req.body;

    // Find index of the user
    const index = data.findIndex(user => user.id === uid);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update the user
    data[index] = { ...data[index], ...body };

    // Write updated data to the file
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Failed to update user" });
        }
        return res.json({ success: true, updatedUser: data[index] });
    });
});



app.post("/api/users", (req, res) => {
    const body = req.body;
    const newData = { id: data.length + 1, ...body };
    data.push(newData);
    fs.writeFile("data.json", JSON.stringify(data), (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("appended");
        }
    })
    res.json({ success: "true" })

})

app.put("/api/users", (req, res) => {
    res.json({ success: "true" })
})

app.delete("/api/users/:id", (req, res) => {
    const uid = Number(req.params.id);
    const newData = data.filter(user => user.id !== uid);
    data = newData;
    fs.writeFile("data.json", JSON.stringify(newData), (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "Failed to delete user." });
        } else {
            console.log("User deleted");
            return res.json({ success: true, message: "User deleted successfully." });
        }
    });
});



app.patch("/api/users", (req, res) => {
    res.json({ success: "true" })
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

