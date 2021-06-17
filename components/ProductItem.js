import Link from "next/link";
const Product = () => {
  return (
    <div className="product-tab-block mt-80 box">
      <div className="container">
        <div className="main-tab">
          <div className="product-tabs box-content clearfix">
            <div className="page-title toggled">
              <h3>Our Products</h3>
              <div className="single-column">
                <div className="product-layout col-xs-4">
                  <div className="product-thumb transition">
                    <div className="image">
                      <Link href="#">
                        <>
                          <img
                            src="/images/8-415x415.jpg"
                            alt="Zip-Front Jacket"
                            title="Zip-Front Jacket"
                            className="img-responsive"
                          />
                          <img
                            className="img-responsive hover-img"
                            src="/images/1-415x415.jpg"
                            title="Zip-Front Jacket"
                            alt="Zip-Front Jacket"
                          />
                        </>
                      </Link>
                      <div className="sale-text">
                        <span className="section-sale">-20%</span>
                      </div>
                      <button
                        type="button"
                        className="addcart"
                        title="Add to Cart"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="thumb-description clearfix">
                      <div className="caption">
                        <h4 className="product-title">
                          <Link href="#">Zip-Front Jacket</Link>
                        </h4>
                        <p className="price">$1,202.00</p>
                        <div className="rating">
                          <span className="fa fa-stack">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Product;
