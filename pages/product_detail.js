import Carousel from "../components/SliderVertical"
import Product from "../components/ProductItem";
const Detail = () => {
  return (
    <div id="product-page" class="container">
      <ul class="breadcrumb">
        <li>
          <a href="/">
            Home / 
          </a>
        </li>
        <li>
          <a href="#"> Zip-Front Jacket
          </a>
        </li>
      </ul>
      <div class="row">
        <div id="content" class="col-sm-12">
          <h2 class="page_title">Zip-Front Jacket</h2>
          <div class="pro-deatil row">
            <div class="col-sm-6 product-img">
              <div class="thumbnails">
                <div class="product-additional">
                  <div id="additional-carousel" class="slick-carousel clearfix">
                    <Carousel></Carousel>
                    {/* <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/1-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/1-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/1-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/1-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/12-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/12-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/12-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/12-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/6-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/6-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/6-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/6-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/5-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/5-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/5-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/5-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/10-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/10-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/10-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/10-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="image-additional">
                      <a
                        href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/9-1000x1000.jpg"
                        title="Zip-Front Jacket"
                        class="elevatezoom-gallery"
                        data-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/9-750x750.jpg"
                        data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/9-1000x1000.jpg"
                      >
                        <img
                          src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/9-750x750.jpg"
                          title="Zip-Front Jacket"
                          alt="Zip-Front Jacket"
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                  */}
                  </div>
                </div>
                <div class="pro-image">
                  <a
                    href="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-1000x1000.jpg"
                    title="Zip-Front Jacket"
                    class="thumbnail"
                  >
                    <img
                      src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
                      title="Zip-Front Jacket"
                      id="zoom"
                      alt="Zip-Front Jacket"
                      data-zoom-image="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-1000x1000.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 right_info">
              <h1 class="">Zip-Front Jacket</h1>
              <div class="rating clearfix">
                <div class="product-rating">
                  <span class="fa fa-stack">
                    <i class="fa fa-star fa-stack-1x"></i>
                    <i class="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span class="fa fa-stack">
                    <i class="fa fa-star fa-stack-1x"></i>
                    <i class="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span class="fa fa-stack">
                    <i class="fa fa-star fa-stack-1x"></i>
                    <i class="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span class="fa fa-stack">
                    <i class="fa fa-star fa-stack-1x"></i>
                    <i class="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span class="fa fa-stack">
                    <i class="fa fa-star-o fa-stack-1x"></i>
                  </span>
                </div>
              </div>
              <ul class="list-unstyled">
                <li>
                  <span class="disc">Brand:</span>{" "}
                  <a
                    class="disc1"
                    href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=product/manufacturer/info&amp;manufacturer_id=10"
                  >
                    Sony
                  </a>
                </li>
                <li>
                  <span class="disc">Product Code:</span>
                  <span class="disc1"> Product 19</span>
                </li>
                <li>
                  <span class="disc">Availability:</span>
                  <span class="disc1"> In Stock</span>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <span class="pro_price">$1,202.00</span>
                </li>
                <li class="tax">Ex Tax: $1,000.00</li>
              </ul>
              <div id="product" class="product-options">
                <div class="form-group">
                  <label class="control-label qty" for="input-quantity">
                    Qty
                  </label>
                  <div class="product-btn-quantity">
                    <div class="minus-plus">
                      <button class="minus">
                        <i class="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        value="1"
                        size="2"
                        id="input-quantity"
                        class="form-control"
                      />
                      <button class="plus">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="product_id" value="46" />
                  <div class="btn-group">
                    <button
                      type="button"
                      id="button-cart"
                      data-loading-text="Loading..."
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      class="pro_wish"
                      title="Add To WishList"
                      onclick="wishlist.add('46');"
                    >
                      <i class="icon-heart"></i>
                    </button>
                    <button
                      type="button"
                      class="pro_comper"
                      title="Add To Compare"
                      onclick="compare.add('46');"
                    >
                      <i class="icon-change"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="row propage-tab">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#tab-description" data-toggle="tab">
                    Description
                  </a>
                </li>
                <li>
                  <a href="#tab-review" data-toggle="tab">
                    Reviews (1)
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tab-description">
                  <div>
                    Unprecedented power. The next generation of processing
                    technology has arrived. Built into the newest VAIO notebooks
                    lies Intel&#39;s latest, most powerful innovation yet:
                    Intel&reg; Centrino&reg; 2 processor technology. Boasting
                    incredible speed, expanded wireless connectivity, enhanced
                    multimedia support and greater energy efficiency, all the
                    high-performance essentials are seamlessly combined into a
                    single chip.
                  </div>
                </div>
                <div class="tab-pane" id="tab-review">
                  <form class="form-horizontal" id="form-review">
                    <div id="review"></div>
                    <h2>Write a review</h2>
                    <div class="form-group required">
                      <div class="col-sm-2">
                        <label class="control-label" for="input-name">
                          Your Name
                        </label>
                      </div>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          value=""
                          id="input-name"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group required">
                      <div class="col-sm-2">
                        <label class="control-label" for="input-review">
                          Your Review
                        </label>
                      </div>
                      <div class="col-sm-10">
                        <textarea
                          name="text"
                          rows="5"
                          id="input-review"
                          class="form-control"
                        ></textarea>
                        <div class="help-block">
                          <span class="text-danger">Note:</span> HTML is not
                          translated!
                        </div>
                      </div>
                    </div>
                    <div class="form-group required">
                      <div class="col-sm-2">
                        <label class="control-label">Rating</label>
                      </div>
                      <div class="col-sm-10">
                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                        <input type="radio" name="rating" value="1" />
                        &nbsp;
                        <input type="radio" name="rating" value="2" />
                        &nbsp;
                        <input type="radio" name="rating" value="3" />
                        &nbsp;
                        <input type="radio" name="rating" value="4" />
                        &nbsp;
                        <input type="radio" name="rating" value="5" />
                        &nbsp;Good
                      </div>
                    </div>

                    <div class="buttons clearfix">
                      <div class="pull-right">
                        <button
                          type="button"
                          id="button-review"
                          data-loading-text="Loading..."
                          class="btn btn-primary"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="related-products-block box">
            <div class="box-content">
              <div class="page-title">
                <h3>Related Products</h3>
              </div>
              <div class="block_box row category-row">
                <div
                  id="related-carousel"
                  class="box-product  product-carousel  clearfix"
                  data-items="4"
                >
                   {/* <Product /> */}
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Detail;
