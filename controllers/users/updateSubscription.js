const User = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  //   const {subscription} = req.body;
  // console.log(req.body)

  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  res.json(result);
};

module.exports = updateSubscription;
