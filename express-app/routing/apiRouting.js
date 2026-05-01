const {
  getUsers,
  welcomeUser,
  addNewUser,
} = require("../controller/apis/users.controller.api");

const apiRouter = require("express").Router();
// /api/
apiRouter.get("/", welcomeUser);

// /api/users
apiRouter.get("/users", getUsers);

apiRouter.post("/add-user", addNewUser);

module.exports = apiRouter;
