// routing
const appRouting = require("express").Router();

// request => client to server
// response => server to client

let menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact us",
    link: "/contact",
  },
  {
    name: "Team",
    link: "/my-team",
  },
  {
    name: "Projects",
    link: "/our-projects",
  },
];

appRouting.get("/", (request, response) => {
  // response.send("Welcome to express js");
  response.render("index", {
    text: "Deepakkumar",
    type: "Admin",
    title: "Welcome page | Our new Site",
    menu,
  });
});

appRouting.get("/about", (request, response) => {
  // response.send("This is about page");
  response.render("about", {
    title: "About us | Our new Site",
  });
});

appRouting.get("/contact", (request, response) => {
  // response.send("This is contact page");
  response.render("contact-us");
});

module.exports = appRouting;
