import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

function NavBar() {
    const router = useRouter()
    const isActive = (r) => {
        if (r === router.pathname) {
            return " active"
        } else {
            return ""
        }
    }
    return (
        <header>
            <div className="container">
                <div className="header-top">
                    <div className="header-left hidden-sm hidden-xs">
                        <div className="contact">
                            <a>
                                <i className="fas fa-phone-alt"></i>
                                <span>
                                    <span>Customer Support</span>
                                    <span>123-456-7890</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="header-center">
                        <div id="logo">
                            <a href="/"><img src="/images/logo.png" title="Your Store" alt="Your Store" className="img-responsive" /></a>
                        </div>
                    </div>

                    <div className="header-right header-links">
                        <div className="btn_search">
                            <a className="search-btn">
                                <i className="fas fa-search"></i>
                            </a>
                        </div>

                        <div id="header_ac" className="dropdown">
                            <a href="#" title="My Account" data-toggle="dropdown">
                                <span className="hidden">My Account</span><i className="fas fa-user"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li><a href="/signup">Register</a></li>
                                <li><a href="/signin">Login</a></li>

                                {/* <li> <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/wishlist" id="wishlist-total" title="WishList (0)">WishList (0)</a></li> */}
                            </ul>
                        </div>
                        <div id="header_cart">
                            <a href="/" title="Cart" data-toggle="dropdown">
                                <span className="hidden">Cart</span><i className="fas fa-shopping-cart"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li>
                                    <p className="text-center product-cart-empty">Your shopping cart is empty!</p>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="header_cart">
                            <div id="cart" className="btn-group btn-block">
                                <button type="button" data-toggle="dropdown" data-loading-text="Loading..." className="btn btn-inverse btn-block btn-lg dropdown-toggle">
                                    <span id="cart-totalx"></span>
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                                <ul className="dropdown-menu header-cart-toggle pull-right ">
                                    <li>
                                        <p className="text-center product-cart-empty">Your shopping cart is empty!</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
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
                    <input type="text" name="search" defaultValue="" placeholder="Search here..." className="form-control input-lg ui-autocomplete-input" />
                    <span className="btn-search input-group-btn">
                        <button type="button" className="btn btn-default btn-lg"><i className="fas fa-search"></i></button>
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
                <i className="fas fa-times icon-close"></i>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light flex-sm-nowrap flex-wrap">
                        <div className="mx-auto container-fluid">
                            <a className="navbar-brand flex-grow-1" href="#"></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse flex-grow-1 justify-content-center" id="navbarNavDropdown">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item mx-1">
                                        <a className="nav-link" href="#">Jacket</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Unisex Jacket</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blogs</a>
                                    </li>
                                    {/* <li className="nav-item dropdown mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default NavBar
