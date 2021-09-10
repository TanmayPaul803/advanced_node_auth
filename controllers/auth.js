exports.register = (request, response, next) => {
  response.send("Register Route");
};

exports.login = (request, response, next) => {
  response.send("Login Route");
};

exports.forgotPassword = (request, response, next) => {
  response.send("Forgot Password Route");
};

exports.resetPassword = (request, response, next) => {
  response.send("Reset Password Route");
};
