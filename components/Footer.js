function Footer() {
    return (
        <footer class="mt-80">
        <div class="container">
            <div class="footer-top">
                <div class="col-sm-3">
                    <div class="position-footer-left">
                        <h5 class="toggled title">contact info</h5>
                        <ul class="list-unstyled">
                            <li>
                                <div class="site">
                                    <div class="contact_title">address:</div>
                                    <div class="contact_site">71 Pennington Lane Vernon Rockville, CT 06066</div>
                                </div>
                            </li>
                            <li>
                                <div class="phone">
                                    <div class="contact_title">phone:</div>
                                    <div class="contact_site">+91 123 456 789</div>
                                </div>
                            </li>
                            <li>
                                <div class="fax">
                                    <div class="contact_title">fax:</div>
                                    <div class="contact_site">0123-456-789</div>
                                </div>
                            </li>
                            <li>
                                <div class="email">
                                    <div class="contact_title">email:</div>
                                    <div class="contact_site"> <a href="mailto:info@Yourstore.com">demo@Yourstore.com</a> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-content">
                        <h5>Information</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-content">
                        <h5>My Account</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Wish List</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="position-footer-right">
                        <div class="news">
                            <div class="newsletterblock">
                                <div class="newsletter-form block-content">
                                    <div class="news-info">
                                        <div class="news-dec">
                                            <div class="title-text">Subscribe Newsletter</div>
                                            <div class="news-description">Subscribe to our newsletters now and stay up to date with new collections and exclusive offers.</div>
                                        </div>
                                    </div>
                                    {/* <!-- newsletter box --> */}
                                    <form name="frmnewsletter" id="frmnewsletter" onsubmit="subscribe();return false" method="post">
                                        <div class="subscribe-form">
                                            <input type="email" name="newsletter_usr_email" id="newsletter_usr_email" placeholder="Enter e-mail here..." class="form-control input-lg inputNew txtemail" required/>
                                            <button type="submit" class="subscribe-btn">Subscribe</button>
                                        </div>
                                        {/* <!-- newsletter notofication --> */}
                                        <div class="newsletter-message"></div>
                                        {/* <!-- newsletter notofication --> */}
                                    </form>
                                     {/* newsletter box  */}
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <p class="powered">Powered By <a href="#">OpenCart</a> Your Store &copy; 2021</p>
        </div>
    </footer>
    )
}

export default Footer