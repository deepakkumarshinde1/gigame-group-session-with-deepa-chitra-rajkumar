const {
  getUsers,
  welcomeUser,
  addNewUser,
  loginUser,
} = require("../controller/apis/users.controller.api");

const apiRouter = require("express").Router();
// /api/
apiRouter.get("/", welcomeUser);

// /api/users
apiRouter.get("/users", getUsers);

apiRouter.post("/add-user", addNewUser);
apiRouter.post("/login", loginUser);

module.exports = apiRouter;
