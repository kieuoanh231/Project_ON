import SignUp from "../components/Register";
const Register = () => {
  return (
    <>
      <div id="account-register" className="container">
        <ul className="breadcrumb">
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
          <SignUp></SignUp>
        </div>
      </div>
    </>
  );
};
export default Register;
