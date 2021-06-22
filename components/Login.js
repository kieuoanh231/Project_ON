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
  const { state, dispatch } = useContext(DataContext);
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [message, setMes] = useState();
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/signin", userData);

    if (res.err != null) {
      setMes(res.err);
      dispatch({ type: "NOTIFY", payload: { loading: false } });
    } else {
      setMes("Login success!");
      dispatch({
        type: "AUTH",
        payload: { toke: res.accessToken, user: res.user },
      });
      Cookie.set("refreshtoken", res.refreshToken, {
        path: "api/auth/accessToken",
        expires: 7,
      });
      localStorage.setItem("firstLogin", true);
      router.push("/");
      dispatch({ type: "NOTIFY", payload: { loading: false } });
    }
  };
  return (
    <>
      <div className="well">
        <h2>Returning Customer</h2>
        <p>
          <strong>I am a returning customer</strong>
        </p>
        {message && (
          <div className="alert alert-info" role="alert">
            {message}
          </div>
        )}

        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="control-label" htmlFor="input-email">
              E-Mail Address
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChangeInput}
              placeholder="E-Mail Address"
              id="input-email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="input-password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
              placeholder="Password"
              id="input-password"
              className="form-control"
            />
            {/* <a href="/">Forgotten Password</a> */}
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default Login;
