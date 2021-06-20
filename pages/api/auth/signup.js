import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

connectDB();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      cf_password,
      phone,
      address,
    } = req.body;
    const errMsg = valid(
      firstname,
      lastname,
      email,
      password,
      cf_password,
      phone,
      address
    );

    const oldUser = await User.findOne({ email });
    if (oldUser)
      return res.status(400).json({ err: "This email already exists." });

    if (errMsg) return res.status(400).json({ err: errMsg });
    const passwordHash = await bcrypt.hash(password, 12);
    const user = new User({
      firstname,
      lastname,
      email,
      password: passwordHash,
      cf_password,
      phone,
      address,
    });

    await user.save();
    res.status(400).json({ err: null });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
