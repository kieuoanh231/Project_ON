import SignUp from "../components/Register";
const Register = () => {
  return (
    <>
      <div id="account-register" class="container">
        <ul class="breadcrumb">
          <li>
            <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=common/home">
              Home /
            </a>
          </li>
          <li>
            <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/account"> Account /
            </a>
          </li>
          <li>
            <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/register"> Register
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
          <SignUp></SignUp>
        </div>
      </div>
    </>
  );
};
export default Register;
