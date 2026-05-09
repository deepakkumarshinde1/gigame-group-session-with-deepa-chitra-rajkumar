// created server
const express = require("express");
const mongoose = require("mongoose");
const appRouting = require("./routing/appRouting");
const apiRouter = require("./routing/apiRouting");

// create app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

// middleware
app.use("/", appRouting);
app.use("/api", apiRouter);

const URI =
  "mongodb+srv://admin:admin123@gigameapp.vv1mwul.mongodb.net/mydb?appName=GigameApp";
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // add port number
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
