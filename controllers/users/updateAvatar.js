const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
const Jimp = require("jimp");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  if (!req.file) {
    throw HttpError(400, "No file");
  }

  const { path: tempUpload, originalname } = req.file;

  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);

  const avatar = await Jimp.read(resultUpload);
  avatar.contain(250, 250);
  avatar.writeAsync(resultUpload);

  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
