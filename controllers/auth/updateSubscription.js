const { User } = require("../../models/users");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  await User.findByIdAndUpdate(_id, { subscription: subscription });
  res.json({
    message: `Subscription update on ${subscription}`,
  });
};

module.exports = updateSubscription;
