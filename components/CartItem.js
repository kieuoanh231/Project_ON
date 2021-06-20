import Link from "next/link";
import { decrease, increase } from "../store/Actions";

const CartItem = ({ item, dispatch, cart }) => {
  return (
    <tr>
      <td className="text-center">
        {" "}
        <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=product/product&amp;product_id=36">
          <img
            src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-80x80.jpg"
            alt=" Waistcoat Jacket"
            title=" Waistcoat Jacket"
            className="img-thumbnail"
          />
        </a>{" "}
      </td>
      <td className="text-left">
        <a href="https://opencart.mahardhi.com/MT04/noriva/02/index.php?route=product/product&amp;product_id=36">
          {" "}
          Waistcoat Jacket
        </a>{" "}
      </td>
      <td className="text-left">Product 9</td>
      <td className="text-left">
        <div
          className="cart_input_block input-group btn-block"
          style={{ maxWidth: "200px" }}
        >
          <div className="product-btn-quantity">
            <div className="minus-plus">
              <button className="minus">
                <i aria-hidden className="fa fa-minus"></i>
              </button>
              <input
                type="text"
                name="quantity"
                defaultValue="1"
                size="2"
                id="input-quantity"
                className="form-control"
              />
              <button className="plus">
                <i aria-hidden className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="text-right">$110.00</td>
      <td className="text-right">$220.00</td>
    </tr>
  );
};

export default CartItem;
