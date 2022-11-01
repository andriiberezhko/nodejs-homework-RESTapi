const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/users");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tmpUpload, originalname } = req.file;
    const image = await Jimp.read(tmpUpload);
    await image.resize(250, 250).write(tmpUpload);
    const extantion = originalname.split(".").pop();
    const fileName = `${_id}.${extantion}`;
    const resultUpload = path.join(avatarsDir, fileName);
    await fs.rename(tmpUpload, resultUpload);
    const avatarURL = path.join("avatars", fileName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
