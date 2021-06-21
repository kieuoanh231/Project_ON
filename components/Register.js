import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { postData } from "../utils/fetchData";
import { DataContext } from "../store/GlobalState";
// import { useRouter } from "next/router";

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

  const display={display:"none"}

  const {state, dispatch} = useContext(DataContext);
  const [userData, setUserData] = useState(initialState);
  const [show, setShow] = useState(display);
  const { firstname, lastname, email, password, cf_password, phone, address } =
    userData;
  const [message, setMes] = useState();
  // const router=useRouter()

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/signup", userData);
    setShow({display:"block"})
    setMes(res.err);
    dispatch({ type: "NOTIFY", payload: { stop: true } });
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cf_password: "",
      phone: "",
      address: "",
    });
  };

  return (
    <>
      <div id="content" class="col-sm-9">
        <h1 class="page_title">Register Account</h1>
        <p>
          If you already have an account with us, please login at the{" "}
          <a href="/login">
            Login page
          </a>
          .
        </p>
        <form
          method="post"
          enctype="multipart/form-data"
          class="form-horizontal"
          onSubmit={handleSubmit}
        >
          <fieldset id="account">
            <legend>Your Personal Details</legend>
            <div class="alert alert-info" role="alert" style={{display:show.display}}>
              {message}
            </div>

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
          <div class="buttons">
            <div class="text-right">
              I have read and agree to the{" "}
              <a
                href=""
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
