import SignIn from "../components/Login";
const Login = () => {
  return (
    <>
      <div id="account-login" className="container">
        <ul className="breadcrumb">
          <li>
            <a href="/">
              Home / 
            </a>
          </li>
          <li>
            <a href="/"> Account / 
            </a>
          </li>
          <li>
            <a href="/signin"> Login
            </a>
          </li>
        </ul>
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
                    href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/register"
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
