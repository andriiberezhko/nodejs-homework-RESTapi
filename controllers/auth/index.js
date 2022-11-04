const register = require("./register");
const login = require("./login");
const getCurent = require("./getCurent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  getCurent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerify,
};
