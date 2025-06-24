const express = require("express")
const mongoose = require("mongoose")
const MONGO_URI = "mongodb://127.0.0.1:27017/sampleDatabaseFS2"
const PORT = 8080;

const app = express()
// Middleware
app.use(express.json());


// DB Connection -->
mongoose.connect(MONGO_URI)
.then(() => {
    console.log("DB connection est...")
})
.catch((error) => {
    console.log("error encountered : ", error)
})
// Schema -->
const userSchema = new mongoose.Schema({
    id: {type : Number, unique : true, required : true},
    userName : String,
    age: Number
})

// Model -->
const userModel = mongoose.model("user", userSchema)

app.get("/", (req, res) => {
    res.send("<h1>HOME PAGE</h1>")
})
app.get("/api/users", async (req, res) => {
    const allData = await userModel.find();
    res.json(allData);
})
app.get("/api/users/:id", async(req, res) => {
    const userId = parseInt(req.params.id)
    const singleData = await userModel.findOne({id : userId})
    if(!singleData) {
        res.json({status : false, message : "No user found"})
    }else {
        res.json(singleData)
    }
})
app.post("/api/users", async(req, res) => {
    const userData = req.body
    const newUserData = await new userModel(userData)
    newUserData.save();
    res.json(newUserData);
})
app.put("/api/users/:id", async(req, res) => {
    const userId = parseInt(req.params.id)
    const userBody = req.body
    const replacedUser = await userModel.findOneAndReplace(
        {id : userId},
        userBody,
        {new : true}
    )
    res.json({success : true, replacedUser})
})
app.patch("/api/users/:id", async (req, res) => {
    const userId = parseInt(req.params.id)
    const userData = req.body;
    const updatedUser = await userModel.findOneAndUpdate(
        {id : userId},
        {$set : userData},
        {new : true, runValidators : true}
    )
    res.json(updatedUser)
})
app.delete("/api/users/:id", async(req, res) => {
    const userId = parseInt(req.params.id)
    const deletedUser = await userModel.findOneAndDelete({id : userId})

    res.json({status : true, response : "user deleted", user : deletedUser})
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


// connect your BE and FE (Homepage, login,signup)
// sign up -> send data to mdb -> redirect to sign in 
// sign in -> fetch from mdb -> redirect to home page
// if email exist -> throw error "email already exist"


// db.col.updateOne({}, {$set : {id : 5}}, {new: true, runValidator}) 