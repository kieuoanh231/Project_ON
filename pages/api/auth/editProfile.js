import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import { validEditProfile } from "../../../utils/valid";

connectDB();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await editProfile(req, res);
      break;
  }
};

const editProfile = async (req, res) => {
  try {
    const { _id, firstname, lastname, email, phone, address } = req.body;

    const errMes = validEditProfile(firstname, lastname, email, phone, address);

    if (errMes) {
      res.status(400).json({ err: errMes });
    }

    await User.findByIdAndUpdate(
      { _id: _id },
      {
        email: email,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
      }
    );
    res.status(200).json({ err: null });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
