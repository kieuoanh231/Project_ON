import React, { useContext,useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DataContext } from "../store/GlobalState";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
function NavBar() {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;
  const router = useRouter();
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0); // get bounding of element
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  
  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    console.log("Logged out!");
    router.push("/login");
  };

  const loggedRouter = () => {
    return (
      <div id="header_ac" className="dropdown">
        <span>
          <Link href="/" title="My Account" data-toggle="dropdown">
            <i className="fas fa-user" aria-hidden="true"></i>
          </Link>
          <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <div className="logout" onClick={handleLogout}>Logout</div>
            </li>
          </ul>
        </span>
      </div>
    );
  };

  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="header-left d-none d-sm-block">
            <div className="contact">
              <a>
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>
                  <span>Customer Support</span>
                  <span>123-456-7890</span>
                </span>
              </a>
            </div>
          </div>

          <div className="header-center">
            <div id="logo">
              <Link href="/" passHref={true}>
                <img
                style={{cursor:"pointer"}}
                  src="/images/logo.png"
                  title="Your Store"
                  alt="Your Store"
                  className="img-responsive"
                />
              </Link>
            </div>
          </div>

          <div className="header-right header-links">
            <div className="btn_search">
              <span className="search-btn">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </div>

            {Object.keys(auth).length === 0 ? (
              <div id="header_ac" className="dropdown">
                <span>
                  <Link href="/" title="My Account" data-toggle="dropdown">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  </ul>
                </span>
              </div>
            ) : (
              loggedRouter()
            )}
            <Link href="/cart" passHref={true}>
              <div id="header_cart">
                <span>
                  <>
                    <i
                      className="cart-icon fas fa-shopping-cart"
                      aria-hidden="true"
                    ></i>
                    <span className="cart-length">{cart.length}</span>

                  </>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-search">
        <div id="mahardhiSearch" className="input-group mahardhi-search">
          <div className="category-search">
            <select name="category_id" className="form-control input-lg">
              <option defaultValue="0">All Categories</option>
              <option defaultValue="18">Jackets</option>
            </select>
          </div>
          <input
            type="text"
            name="search"
            defaultValue=""
            placeholder="Search here..."
            className="form-control input-lg ui-autocomplete-input"
          />
          <span className="btn-search input-group-btn">
            <button type="button" className="btn btn-default btn-lg">
              <i className="fas fa-search" aria-hidden="true"></i>
            </button>
          </span>
        </div>

        <i className="fas fa-times icon-close" aria-hidden="true"></i>
      </div>
      <hr />
      <div className={`header-bottom d-none d-sm-block sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
      <div className={`sticky-inner`} >
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <div className="mx-auto container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a className="nav-link" href="/">
                      Jacket
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Unisex Jacket
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      </div>
   </header>
  );
}

export default NavBar;
