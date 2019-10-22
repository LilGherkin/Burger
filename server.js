//Dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

//Setting up express

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware mumbo jumbo.

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Verify we're live. 

app.listen(PORT, () => {
    console.log("App listening on port:" + PORT);
});