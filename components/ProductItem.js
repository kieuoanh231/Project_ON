import Link from "next/link";
import { useContext } from "react";
import { addToCart } from "../store/Actions";
import { DataContext } from "../store/GlobalState";
const Product = ({ product }) => {
  const {state, dispatch} = useContext(DataContext)
  const {cart} =state
  return (
    <div className="single-column col-md-3">
      <div className="product-layout">
        <div className="product-thumb transition">
          <div className="image">
            <Link href={`/product/${product._id}`}>
              <div style={{cursor:"pointer"}}>
                <img
                  src={product.images[0].url}
                  alt={product.title}
                  title={product.title}
                  className="img-responsive"
                />
                <img
                  className="img-responsive hover-img"
                  src={product.images[1].url}
                  title={product.title}
                  alt={product.title}
                />
              </div>
            </Link>

            <button type="button" onClick= {()=>dispatch(addToCart(product,cart)) } className="addcart" title="Add to Cart">
              Add to Cart
            </button>
          </div>
          <div className="thumb-description clearfix">
            <div className="caption">
              <h4 className="product-title">
                <Link href={`/product/${product._id}`}>{product.title}</Link>
              </h4>
              <p className="price">$ {product.price}</p>
              <div className="rating">
                {/* <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
