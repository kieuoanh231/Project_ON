import { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

const Profile = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const initialState = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  };

  const [editState, setEditState] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEditState({ ...editState, [name]: value });
  };

  useEffect(() => {
    if (auth.user) {
      setEditState({
        _id: auth.user._id,
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        email: auth.user.email,
        phone: auth.user.phone,
        address: auth.user.address,
      });
    }
  }, [auth.user]);

  const { _id, firstname, lastname, email, phone, address } = editState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    await postData("auth/editProfile", {
      _id: _id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address,
    });
    dispatch({ type: "NOTIFY", payload: { loading: false } });
  };

  return (
    <>
      <div id="account-login" className="container">
        <div className="row">
          <aside id="column-left" className="col-sm-3 hidden-xs">
            <div className="account-content">
              <div className="box-content">
                <div className="list-group">
                  <h3 className="toggled">Account</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/login"
                        className="list-group-item"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/register"
                        className="list-group-item"
                      >
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/forgotten"
                        className="list-group-item"
                      >
                        Forgotten Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/account"
                        className="list-group-item"
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/address"
                        className="list-group-item"
                      >
                        Address Book
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/wishlist"
                        className="list-group-item"
                      >
                        Wish List
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/order"
                        className="list-group-item"
                      >
                        Order History
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/download"
                        className="list-group-item"
                      >
                        Downloads
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div id="content" className="col-sm-9">
            <h1 className="page_title">My Account Information</h1>
            <form
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={handleSubmit}
            >
              <fieldset>
                <legend id="my-legend">Your Personal Details</legend>
                <div className="form-group required">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-firstname"
                  >
                    First Name{" "}
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="firstname"
                      value={firstname}
                      placeholder="First Name"
                      id="input-firstname"
                      className="form-control"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-lastname"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="lastname"
                      value={lastname}
                      placeholder="Last Name"
                      id="input-lastname"
                      className="form-control"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-email"
                  >
                    E-Mail
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="E-Mail"
                      id="input-email"
                      className="form-control"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-telephone"
                  >
                    Telephone
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      placeholder="Telephone"
                      id="input-telephone"
                      className="form-control"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label className="col-sm-2 control-label" for="input-address">
                    Address
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="tel"
                      name="address"
                      placeholder="Address"
                      id="input-address"
                      className="form-control"
                      value={address}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </fieldset>
              <div className="buttons clearfix">
                <div className="pull-left">
                  <a href="/login" className="btn btn-primary">
                    Back
                  </a>
                </div>
                <div className="pull-right">
                  <input
                    type="submit"
                    value="Continue"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
