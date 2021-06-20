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

    const oldUser = await User.findOne({ email });
    if (!oldUser) return res.status(400).json({ err: "This user does not exists." });

      const isMatch=await bcrypt.compare(password,oldUser.password)
      if(!isMatch) return res.status(400).json({ err: "Incorrect password." });
    
    res.json({ msg: "Register Success" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
