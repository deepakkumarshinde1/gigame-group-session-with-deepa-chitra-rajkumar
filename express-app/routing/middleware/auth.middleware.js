var jwt = require("jsonwebtoken");
const JWT_KEY = "GFTYUI^&%$#ERDTFYGUHIO(*&^%%$^^#$%#^&^*";
module.exports.checkJwtAuth = (request, response, next) => {
  try {
    let token = request.headers.authorization;
    token = token.split(" ")[1];//['B','Token']
    console.log(token);
    if (!token) {
      throw new Error("Access denied");
    } 
      let user = jwt.verify(token, JWT_KEY);
      response.user = user;
      next();
  } catch (error) {
    response.status(400).json({
      message: error.message,
      status: false,
    });
  }
};
