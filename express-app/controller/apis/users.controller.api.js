const UserModel = require("../../model/users.model");
const bcrypt = require("bcrypt");
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

    let newPassword = await bcrypt.hash(data.password, 10);

    let newUser = new UserModel({
      user: data.user,
      email: data.email,
      password: newPassword,
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

module.exports.loginUser = async (request, response) => {
  try {
    let data = request.body;
    if (data.username && data.password) {
      let user = await UserModel.findOne({ email: data.username });
      if (!user) {
        throw new Error("User not found");
      }

      const isValid = await bcrypt.compare(data.password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      response.json({
        message: "Login successful",
        status: true,
        user: {
          user: user.user,
          email: user.email,
          id: user._id,
        },
      });
    }
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
    });
  }
};
