const express= require("express");
const app = express();
const port=8000;
app.get("/",(req,res) => res.send("You are at home page"));
app.listen(port, () => console.log("App listening on port 8000"));