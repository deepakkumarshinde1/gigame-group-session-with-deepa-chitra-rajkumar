const UserModel = require("../../model/users.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const JWT_KEY = "GFTYUI^&%$#ERDTFYGUHIO(*&^%%$^^#$%#^&^*";
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

      let _user = {
          user: user.user,
          email: user.email,
          id: user._id,
        };

      let token = jwt.sign(_user, JWT_KEY,
      { expiresIn: '1d' }
      );
      response.json({
        message: "Login successful",
        status: true,
        user:_user,
        token,
      });
    }else{
        throw new Error("Invalid details passed");
    }
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
    });
  }
};

module.exports.updateUser = async (request,response)=>{
  try {
    let user = response.user;
    let updateData = request.body;
    let update = await UserModel.findByIdAndUpdate(user.id, {
      user: updateData.user,
      email: updateData.email,
    });
    if (!update){
      throw new Error("Unable to update, try again")
    }
      response.json({
        message: "User Updated Successfully",
        status: true,
        
      });
  } catch (error) {
     response.json({
       message: error.message,
       status: false,
     });
  }
}
