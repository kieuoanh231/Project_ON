import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import SignUp from "../components/Register";
const Register = () => {
  return (
    <>
    <Head><title>Regiser</title></Head>
      <div id="account-register" class="container">
      <Breadcrumb></Breadcrumb>
        <div class="row">
          <aside id="column-left" class="col-sm-3 hidden-xs">
            <div class="account-content">
              <div class="box-content">
                <div class="list-group">
                  <h3 class="toggled">Account</h3>
                  <ul class="list-unstyled">
                    <li>
                      <Link
                        href="/login"
                        class="list-group-item"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/register"
                        class="list-group-item"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        Forgotten Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        Address Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        Wish List
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="list-group-item"
                      >
                        Downloads
                      </Link>
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
