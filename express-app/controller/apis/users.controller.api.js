const UserModel = require("../../model/users.model");

let testUser = [];

module.exports.welcomeUser = (request, response) => {
  response.json({
    message: "Welcome to our api",
    status: true,
  });
};

module.exports.getUsers = (request, response) => {
  response.json({
    message: "List of users",
    status: true,
    data: testUser,
  });
};

module.exports.addNewUser = async (request, response) => {
  try {
    let data = request.body;

    let newUser = new UserModel({
      user: data.user,
      email: data.email,
    });

    let user = await newUser.save();

    response.json({
      message: "User Added successfully",
      status: true,
      user,
    });
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
    });
  }
};
