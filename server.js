const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Use the expres.static middleware to serve static content for the appf rom the "public" directory in the application directory.
app.use(express.static("public"));
//Set up the epxress app to handle data parsing.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//My database information. 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "#1tWothRee",
  database: "quotes_db"
});

connection.connect(function(err){
    if (err){
        console.error("Error connecting: " + err.stack);
        return;
    }
});