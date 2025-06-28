const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Project1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ DB Error:", err));

// Define Schema
const userSchema = new mongoose.Schema({
  Username : String,
  email : String,
  password : String
});

const UserModel = mongoose.model("User", userSchema);

app.get("/api/users", async (req, res) => {
    const users = await UserModel.find();
    res.json(users);    
})

// POST Route
app.post("/api/users/add", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields in request body" });
    }

    const newUser = new UserModel({
      Username: name,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: "User added", user: newUser });
  } catch (err) {
    console.error("❌ Error in POST /add:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
