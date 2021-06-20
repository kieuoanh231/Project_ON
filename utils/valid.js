import { defaultConfig } from "next/dist/next-server/server/config-shared";

const valid = (
  firstname,
  lastname,
  email,
  password,
  cf_password,
  phone,
  address
) => {
  if (!firstname || !lastname || !email || !password || !phone || !address) {
    return "Please add all fields ";
  }

  if (!validateEmail(email)) {
    return "Invalid email";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  if (phone.length < 10 || phone.length > 10) {
    return "Phone must 10 characters";
  }

  if (password != cf_password) {
    return "Confirm password did not match";
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
