import SignIn from "../components/Login";
const Login = () => {
  return (
    <>
      <div id="account-login" class="container">
        <ul class="breadcrumb">
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
        <div class="row">
          <aside id="column-left" class="col-sm-3 hidden-xs">
            <div class="account-content">
              <div class="box-content">
                <div class="list-group">
                  <h3 class="toggled">Account</h3>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/login"
                        class="list-group-item"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/register"
                        class="list-group-item"
                      >
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/forgotten"
                        class="list-group-item"
                      >
                        Forgotten Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/account"
                        class="list-group-item"
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/address"
                        class="list-group-item"
                      >
                        Address Book
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/wishlist"
                        class="list-group-item"
                      >
                        Wish List
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/order"
                        class="list-group-item"
                      >
                        Order History
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/download"
                        class="list-group-item"
                      >
                        Downloads
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div id="content" class="col-sm-9">
            <div class="row">
              <div class="col-sm-6">
                <div class="well">
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
                    class="btn btn-primary"
                  >
                    Continue
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
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
