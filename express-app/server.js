// created server
const express = require("express");
const appRouting = require("./routing/appRouting");

// create app
const app = express();

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

// middleware
app.use(appRouting);

// add port number
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
