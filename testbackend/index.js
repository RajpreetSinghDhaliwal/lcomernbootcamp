const express= require("express");
const app = express();
const port=8000;
const admin = (req,res)=>{
    return res.send("Admin dashboard");
}
const isAdmin = (req,res,next)=>{
    console.log("Is Admin is running");
    next();
}
const isLoggedIn = (req,res,next)=>{
    console.log("isLoggedIn is running");
    next();
}
app.get("/",(req,res) => {return res.send("You are at home page")});
app.get("/admin",isLoggedIn, isAdmin,admin);
app.listen(port, () => console.log("App listening on port 8000"));