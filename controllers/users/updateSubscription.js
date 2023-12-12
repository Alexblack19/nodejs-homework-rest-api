const { HttpError } = require("../../helpers");
const User = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  if (!subscription) {
    throw HttpError(400, "Empty subscription field");
  }
  if (subscription !== "starter" && subscription !== "pro" && subscription !== "business") {
    throw HttpError(400, "Invalid subscription");
  }

  const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true });
  if (!result) {
    throw HttpError(404, `User with id=${_id} not found`);
  }

  res.json(result);
};

module.exports = updateSubscription;
