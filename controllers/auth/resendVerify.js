const { User } = require("../../models/users");

const { RequestError, sendEmail, createVerifyEmail } = require("../../helpers");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "User not found");
  }
  if (!user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);
  res.json({ message: "Verification email sent" });
};

module.exports = resendVerify;
