const {
  getUsers,
  welcomeUser,
  addNewUser,
  loginUser,
  updateUser,
} = require("../controller/apis/users.controller.api");
const { checkJwtAuth } = require("./middleware/auth.middleware");

const apiRouter = require("express").Router();
// /api/
apiRouter.get("/", welcomeUser);

// /api/users
apiRouter.get("/users", getUsers);

apiRouter.post("/add-user", addNewUser);
apiRouter.post("/login", loginUser);
apiRouter.post("/change-user-details",checkJwtAuth,updateUser);

module.exports = apiRouter;
