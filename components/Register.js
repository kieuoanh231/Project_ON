import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import valid from "../utils/valid";
import { postData } from "../utils/fetchData";

function Register() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cf_password: "",
    phone: "",
    address: "",
  };
  // console.log(initialState);

  const [userData, setUserData] = useState(initialState);
  const { firstname, lastname, email, password, cf_password, phone, address } =
    userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  var message=""

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = valid(
      firstname,
      lastname,
      email,
      password,
      cf_password,
      phone,
      address
    );
    // if (err) {
    //   message=err
    //   console.log(err);
    // }

    const res = await postData("auth/signup", userData);
    message=res.err
    console.log(message);
    
    // console.log("success")
  };
  return (
    <>
      <div id="content" class="col-sm-9">
        <h1 class="page_title">Register Account</h1>
        <p>
          If you already have an account with us, please login at the{" "}
          <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/login">
            login page
          </a>
          .
        </p>
        <form
          action="/register"
          method="post"
          enctype="multipart/form-data"
          class="form-horizontal"
          onSubmit={handleSubmit}
        >
          <fieldset id="account">
            <legend>Your Personal Details</legend>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-firstname">
                First Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  id="input-firstname"
                  class="form-control"
                  value={firstname}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-lastname">
                Last Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  id="input-lastname"
                  class="form-control"
                  value={lastname}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-email">
                E-Mail
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  id="input-email"
                  class="form-control"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-telephone">
                Telephone
              </label>
              <div class="col-sm-10">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numberphone"
                  id="input-telephone"
                  class="form-control"
                  value={phone}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-address">
                Address
              </label>
              <div class="col-sm-10">
                <input
                  type="tel"
                  name="address"
                  placeholder="Address"
                  id="input-address"
                  class="form-control"
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Your Password</legend>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-password">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="input-password"
                  class="form-control"
                  value={password}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-confirm">
                Password Confirm
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  name="cf_password"
                  placeholder="Password Confirm"
                  id="input-confirm"
                  class="form-control"
                  value={cf_password}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Newsletter</legend>
            <div class="form-group">
              <label class="col-sm-2 control-label">Subscribe</label>
              <div class="col-sm-10">
                {" "}
                <label class="radio-inline">
                  <input type="radio" name="newsletter" value="1" />
                  Yes
                </label>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="newsletter"
                    value="0"
                    checked="checked"
                  />
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <div class="buttons">
            <div class="text-right">
              I have read and agree to the{" "}
              <a
                href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=information/information/agree&amp;information_id=3"
                class="agree"
              >
                <b>Privacy Policy</b>
              </a>
              <input type="checkbox" name="agree" value="1" />
              &nbsp;
              <input type="submit" value="Continue" class="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
