import Link from "next/link";
function Footer() {
  return (
    <footer className="mt-80">
      <div className="container">
        <div className="footer-top">
          <div className="col-sm-3">
            <div className="position-footer-left">
              <h5 className="toggled title">contact info</h5>
              <ul className="list-unstyled">
                <li>
                  <div className="site">
                    <div className="contact_title">address:</div>
                    <div className="contact_site">
                      71 Pennington Lane Vernon Rockville, CT 06066
                    </div>
                  </div>
                </li>
                <li>
                  <div className="phone">
                    <div className="contact_title">phone:</div>
                    <div className="contact_site">+91 123 456 789</div>
                  </div>
                </li>
                <li>
                  <div className="fax">
                    <div className="contact_title">fax:</div>
                    <div className="contact_site">0123-456-789</div>
                  </div>
                </li>
                <li>
                  <div className="email">
                    <div className="contact_title">email:</div>
                    <div className="contact_site">
                      <Link href="mailto:info@Yourstore.com">
                        demo@Yourstore.com
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-content">
              <h5>Information</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Delivery Information</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-content">
              <h5>My Account</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="#">My Account</Link>
                </li>
                <li>
                  <Link href="#">Order History</Link>
                </li>
                <li>
                  <Link href="#">Wish List</Link>
                </li>
                <li>
                  <Link href="#">Newsletter</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="position-footer-right">
              <div className="news">
                <div className="newsletterblock">
                  <div className="newsletter-form block-content">
                    <div className="news-info">
                      <div className="news-dec">
                        <div className="title-text">Subscribe Newsletter</div>
                        <div className="news-description">
                          Subscribe to our newsletters now and stay up to date
                          with new collections and exclusive offers.
                        </div>
                      </div>
                    </div>
                    {/* <!-- newsletter box --> */}
                    <form name="frmnewsletter" id="frmnewsletter" method="post">
                      <div className="subscribe-form">
                        <input
                          type="email"
                          name="newsletter_usr_email"
                          id="newsletter_usr_email"
                          placeholder="Enter e-mail here..."
                          className="form-control input-lg inputNew txtemail"
                          required
                        />
                        <button type="submit" className="subscribe-btn">
                          Subscribe
                        </button>
                      </div>
                      {/* <!-- newsletter notofication --> */}
                      <div className="newsletter-message"></div>
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
      <div className="footer_bottom">
        <p className="powered">
          Powered By <Link href="#">OpenCart</Link> Your Store &copy; 2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
