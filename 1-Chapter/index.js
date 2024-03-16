/* --  This approch is old one we can also do it using import -- */
require("dotenv").config();
const express = require("express");

const app = express(); // storing express all functionality in app

const port = 3000; // this is port where server runs

//this is the get request

app.get("/", (req, res) => {
  res.send("Hello Swaraj");
});

app.get("/instagram", (req, res) => {
  res.send("Hi Swaraj This is Insta");
});

app.get("/contact", (req, res) => {
  res.send("Hi This is Contact");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login Here</h1>");
});

//this is the listen of server port

app.listen(process.env.PORT, () => {
  console.log(`App Listen In Port Number ${process.env.PORT}`);
});
