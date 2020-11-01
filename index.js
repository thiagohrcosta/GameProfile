const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.json({type: 'application/json'}));

app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/public/style'));


app.get("/", function(req, res){
  res.render("Home");
})

app.listen(3000, function(req, res){
  console.log("Server running on port 3000.")
})