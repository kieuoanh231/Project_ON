import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import valid from "../utils/valid";
import { postData } from "../utils/fetchData";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
    phone: "",
    address: "",
  };
  // console.log(initialState);

  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password, phone, address } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = valid(name, email, password, cf_password);
    if (err) {
      console.log(err);
    }

    const res = await postData("auth/signup", userData);
    console.log(res.err);
    // console.log("success")
  };

  return (
    <div>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <form
        className="formlogin mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputCfPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="examplePhone">Number Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={phone}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleAddress">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={address}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          <Link href="/login">
          Sign up
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
