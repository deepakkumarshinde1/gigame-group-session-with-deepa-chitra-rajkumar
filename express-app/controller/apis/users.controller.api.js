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

module.exports.addNewUser = (request, response) => {
  let data = request.body;
  testUser.push({
    id: Date.now(),
    user: data.user,
    email: data.email,
  });
  response.json({
    message: "User Added successfully",
    status: true,
    totalUsers: testUser.length,
  });
};
