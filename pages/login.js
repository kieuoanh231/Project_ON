import Head from "next/head";
import Breadcrumb from "../components/Breadcrumb";
import SignIn from "../components/Login";
const Login = () => {
  return (
    <>
    <Head><title>Login</title></Head>
      <div id="account-login" className="container">
        <Breadcrumb></Breadcrumb>
        <div className="row">
          <aside id="column-left" className="col-sm-3 hidden-xs">
            <div className="account-content">
              <div className="box-content">
                <div className="list-group">
                  <h3 className="toggled">Account</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Forgotten Password
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Address Book
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Wish List
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="list-group-item"
                      >
                        Order History
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
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
            <div className="row">
              <div className="col-sm-6">
                <div className="well">
                  <h2>New Customer</h2>
                  <p>
                    <strong>Register Account</strong>
                  </p>
                  <p>
                    By creating an account you will be able to shop faster, be
                    up to date on an order's status, and keep track of the
                    orders you have previously made.
                  </p>
                  <a
                    href=""
                    className="btn btn-primary"
                  >
                    Continue
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <SignIn></SignIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
