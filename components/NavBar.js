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
            <div class="container">
                <div class="header-top">
                    <div class="header-left hidden-sm hidden-xs">
                        <div class="contact">
                            <a>
                                <i class="fas fa-phone-alt"></i>
                                <span>
                                    <span>Customer Support</span>
                                    <span>123-456-7890</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="header-center">
                        <div id="logo">
                            <a href="/"><img src="/images/logo.png" title="Your Store" alt="Your Store" class="img-responsive" /></a>
                        </div>
                    </div>

                    <div class="header-right header-links">
                        <div class="btn_search">
                            <a class="search-btn">
                                <i class="fas fa-search"></i>
                            </a>
                        </div>

                        <div id="header_ac" class="dropdown">
                            <a href="#" title="My Account" data-toggle="dropdown">
                                <span class="hidden">My Account</span><i class="fas fa-user"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li><a href="/signup">Register</a></li>
                                <li><a href="/signin">Login</a></li>

                                {/* <li> <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=account/wishlist" id="wishlist-total" title="WishList (0)">WishList (0)</a></li> */}
                            </ul>
                        </div>
                        <div id="header_cart">
                            <a href="/" title="Cart" data-toggle="dropdown">
                                <span class="hidden">Cart</span><i class="fas fa-shopping-cart"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li>
                                    <p class="text-center product-cart-empty">Your shopping cart is empty!</p>
                                </li>
                            </ul>
                        </div>

                        {/* <div class="header_cart">
                            <div id="cart" class="btn-group btn-block">
                                <button type="button" data-toggle="dropdown" data-loading-text="Loading..." class="btn btn-inverse btn-block btn-lg dropdown-toggle">
                                    <span id="cart-totalx"></span>
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                                <ul class="dropdown-menu header-cart-toggle pull-right ">
                                    <li>
                                        <p class="text-center product-cart-empty">Your shopping cart is empty!</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div class="header-search">
                <div id="mahardhiSearch" class="input-group mahardhi-search">
                    <div class="category-search">
                        <select name="category_id" class="form-control input-lg">
                            <option value="0">All Categories</option>
                            <option value="18">Jackets</option>
                        </select>
                    </div>
                    <input type="text" name="search" value="" placeholder="Search here..." class="form-control input-lg ui-autocomplete-input" />
                    <span class="btn-search input-group-btn">
                        <button type="button" class="btn btn-default btn-lg"><i class="fas fa-search"></i></button>
                    </span>
                </div>

                {/* <script type="text/javascript">
                $('#mahardhiSearch .btn-search button').bind('click', function() {
                    url = 'index.php?route=product/search';

                    var search = $('#mahardhiSearch input[name=\'search\']').prop('value');
                    if (search) {
                        url += '&search=' + encodeURIComponent(search);
                    }

                    var category_id = $('#mahardhiSearch select[name=\'category_id\']').prop('value');
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
                <i class="fas fa-times icon-close"></i>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <nav class="navbar navbar-expand-sm navbar-light bg-light flex-sm-nowrap flex-wrap">
                        <div class="mx-auto container-fluid">
                            <a class="navbar-brand flex-grow-1" href="#"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse flex-grow-1 justify-content-center" id="navbarNavDropdown">
                                <ul class="navbar-nav mx-auto">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item mx-1">
                                        <a class="nav-link" href="#">Jacket</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Unisex Jacket</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Blogs</a>
                                    </li>
                                    {/* <li class="nav-item dropdown mx-1">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
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
