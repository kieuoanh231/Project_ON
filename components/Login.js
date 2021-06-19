function Login() {
  return (
    <>
      <div class="well">
        <h2>Returning Customer</h2>
        <p>
          <strong>I am a returning customer</strong>
        </p>
        <form
          action="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/login"
          method="post"
          enctype="multipart/form-data"
        >
          <div class="form-group">
            <label class="control-label" for="input-email">
              E-Mail Address
            </label>
            <input
              type="text"
              name="email"
              value=""
              placeholder="E-Mail Address"
              id="input-email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="control-label" for="input-password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
              id="input-password"
              class="form-control"
            />
            <a href="/">
              Forgotten Password
            </a>
          </div>
          <input type="submit" value="Login" class="btn btn-primary" />
        </form>
      </div>
    
    </>
  
  );
}

export default Login;
