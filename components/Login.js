import { useState, useContext, useEffect } from "react";
import { postData } from "../utils/fetchData";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const display = { display: "none", msg: null };

  const [state, dispatch] = useContext(DataContext);
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [message, setMes] = useState(display);
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/signin", userData);
    console.log(res.err);

    if (res.err != null) {
      setMes({ display: "block", msg: res.err });
      dispatch({ type: "NOTIFY", payload: { loading: false } });
    } else {
      // Cookie.set('token')
      router.push("/");
      dispatch({ type: "NOTIFY", payload: { loading: false } });
    }
  };
  return (
    <>
      <div class="well">
        <h2>Returning Customer</h2>
        <p>
          <strong>I am a returning customer</strong>
        </p>
        <div
          class="alert alert-info"
          role="alert"
          style={{ display: message.display }}
        >
          {message.msg}
        </div>

        <form
          method="post"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div class="form-group">
            <label class="control-label" for="input-email">
              E-Mail Address
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChangeInput}
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
              value={password}
              onChange={handleChangeInput}
              placeholder="Password"
              id="input-password"
              class="form-control"
            />
            {/* <a href="/">Forgotten Password</a> */}
          </div>
          <input type="submit" value="Login" class="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default Login;
