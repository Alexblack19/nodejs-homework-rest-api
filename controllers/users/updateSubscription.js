const User = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  // Треба додати перевірку
  //
  //
  const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true });
  res.json(result);
};

module.exports = updateSubscription;
