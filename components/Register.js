function Register() {
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
          action="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/register"
          method="post"
          enctype="multipart/form-data"
          class="form-horizontal"
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
                  value=""
                  placeholder="First Name"
                  id="input-firstname"
                  class="form-control"
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
                  value=""
                  placeholder="Last Name"
                  id="input-lastname"
                  class="form-control"
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
                  value=""
                  placeholder="E-Mail"
                  id="input-email"
                  class="form-control"
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
                  name="telephone"
                  value=""
                  placeholder="Telephone"
                  id="input-telephone"
                  class="form-control"
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
                  value=""
                  placeholder="Password"
                  id="input-password"
                  class="form-control"
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
                  name="confirm"
                  value=""
                  placeholder="Password Confirm"
                  id="input-confirm"
                  class="form-control"
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
