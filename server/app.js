const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const port = 5000;
const userModel = require("./UserSchema")

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//connection to database
mongoose.connect("mongodb://127.0.0.1:27017/merncrud1")
.then(res => {console.log("succesfull connection")})
.catch(err => console.log("no connection"))



//reading the user or adding the user
app.get('/', (req,res) => {
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//creating the user
app.post('/createUser', (req,res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//updating the users
app.get('/getUser/:id',(req,res) => {
    const id = req.params.id;
    console.log(id);
    userModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req,res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

//deleting the user
app.delete('/deleteUser/:id', (req,res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})





//liostening the server
app.listen(port, () => {
    console.log(`server is listening at prot no ${5000}`);
})