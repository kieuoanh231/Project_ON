import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import bcrypt from "bcrypt";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";

connectDB();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ err: "This user does not exists." })

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Incorrect password." });

    const accessToken = createAccessToken({ id: user._id })
    const refreshToken = createRefreshToken({ id: user._id })

    res.json({
      err:null,
      refreshToken,
      accessToken,
      user:user
    })
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
