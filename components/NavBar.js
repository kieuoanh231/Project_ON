import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="header-left hidden-sm hidden-xs">
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
              <Link href="/">
                <img
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
            <div id="header_ac" className="dropdown">
              <span>
                <Link href="#" title="My Account" data-toggle="dropdown">
                  <i className="fas fa-user" aria-hidden="true"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                  <li>
                    <Link href="/signup">Register</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </span>
            </div>

            <div id="header_cart">
              <span>
                <Link href="/" title="Cart" data-toggle="dropdown">
                  <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                  <li className="text-center product-cart-empty">
                      Your shopping cart is empty!
                  </li>
                </ul>
              </span>
            </div>
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

        {/* <script type="text/javascript">
                $('#mahardhiSearch .btn-search button').bind('click', function() {
                    url = 'index.php?route=product/search';

                    var search = $('#mahardhiSearch input[name=\'search\']').prop('defaultValue');
                    if (search) {
                        url += '&search=' + encodeURIComponent(search);
                    }

                    var category_id = $('#mahardhiSearch select[name=\'category_id\']').prop('defaultValue');
                    if (category_id > 0) {
                        url += '&category_id=' + encodeURIComponent(category_id);
                        // url += '&sub_category=true';
                        // url += '&description=true';
                    }

                    location = url;
                });

                $('#mahardhiSearch input[name=\'search\']').bind('keydown', function(e) {
                    if (e.keyCode == 13) {
                        $('#mahardhiSearch .btn-search button').trigger('click');
                    }
                });
            </script> */}
        <i className="fas fa-times icon-close" aria-hidden="true"></i>
      </div>
      <hr />
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <div className="mx-auto container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
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
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a className="nav-link" href="#">
                      Jacket
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Unisex Jacket
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
