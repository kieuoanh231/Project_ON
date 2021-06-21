import { getData } from "../../utils/fetchData";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import SliderVertical from "../../components/SliderVertical";
import dynamic from "next/dynamic"
import Slider from "../../components/Slider";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
const Detail = (props) => {

  const [product] = useState(props.product)

  const {state, dispatch} = useContext(DataContext)
  const {cart} = state
  
  return (
    <div id="product-page" className="container">
      <ul className="breadcrumb">
        <li>
          <Link href="/">Home /</Link>
        </li>
        <li>
          <Link href="/">
            <>&nbsp;{product.title}</>
          </Link>
        </li>
      </ul>
      <div className="row">
        <div id="content" className="col-sm-12">
          <h2 className="page_title">{product.title}</h2>
          <div className="pro-deatil row">
            <div className="col-sm-6 product-img">
              <div className="thumbnails">
                <div className="product-additional">
                  <div
                    id="additional-carousel"
                    className="slick-carousel clearfix"
                  >
                   <SliderVertical images={product.images}></SliderVertical>
                  
                  </div>
                </div>
                <div className="pro-image">
                  <a
                    href={product.images[0].url}
                    title={product.title}
                    className="thumbnail"
                  >
                    <img
                      src={product.images[0].url}
                      title={product.title}
                      id="zoom"
                      alt={product.title}
                      data-zoom-image={product.images[0].url}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 right_info">
              <h1 className="">{product.title}</h1>

              <ul className="list-unstyled">
                {/* <li>
                  <span className="disc">Category:</span>{" "}
                  <a
                    className="disc1"
                    href=""
                  >
                    {product.category}
                  </a>
                </li> */}
                <li>
                  <span className="disc">Product Code:</span>
                  <span className="disc1"> {product._id}</span>
                </li>
                <li>
                  <span className="disc">Availability:</span>
                  <span className="disc1"> In Stock</span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <span className="pro_price">${product.price}</span>
                </li>
                {/* <li className="tax">Ex Tax: $1,000.00</li> */}
              </ul>
              <div id="product" className="product-options">
                <div className="form-group">

                  <div className="btn-group">
                    <button
                      type="button"
                      id="button-cart"
                      data-loading-text="Loading..."
                      className="btn btn-primary btn-lg btn-block"
                      onClick= {()=>dispatch(addToCart(product,cart)) }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row propage-tab">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab-description" data-toggle="tab">
                    Description
                  </a>
                </li>
              
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tab-description">
                  <div>{product.description}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="related-products-block box">
            <div className="box-content">
              <div className="page-title">
                <h3>Related Products</h3>
              </div>
              <div className="block_box row category-row">
                <div
                  id="related-carousel"
                  className="box-product  product-carousel  clearfix"
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




//server side render
export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  return {
    props: {
      product: res.product,
    },
  };
}
export default Detail;
