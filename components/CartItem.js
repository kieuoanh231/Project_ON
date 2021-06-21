import Link from "next/link";
import { decrease, increase } from "../store/Actions";
const CartItem = ({ item, dispatch, cart }) => {
  
  return (
    <tr>
      <td className="text-center">
        <Link href={`product/${item._id}`} passHref={true}>
          <img
          style={{height:"80px",
              border:"none",cursor:"pointer"}}
            src={item.images[0].url}
            alt={item.title}
            title={item.title}
            className="img-thumbnail"
          />
        </Link>
      </td>
      <td className="text-left">
        <Link href={`product/${item._id}`}>{item.title}</Link>
      </td>
      <td className="text-left">{item._id}</td>
      <td className="text-left">
        <div
          className="cart_input_block input-group btn-block"
          style={{ maxWidth: "200px" }}
        >
          <div className="product-btn-quantity">
            <div className="minus-plus">
              <button className="minus" onClick={ () => dispatch(decrease(cart, item._id)) } 
                disabled={item.quantity === 1 ? true : false}>
                <i aria-hidden className="fa fa-minus"></i>
              </button>
              <input
                type="text"
                name="quantity"
                readOnly
                value={item.quantity}
                size="2"
                className="form-control input-quantity"
              />
              <button className="plus"   onClick={ () => dispatch(increase(cart, item._id)) }
                disabled={item.quantity === item.inStock ? true : false}>
                <i aria-hidden className="fa fa-plus"></i>
              </button>

              <button className="delete"  data-toggle="modal" data-target="#myModal"  onClick={() => dispatch({
                    type: 'ADD_MODAL',
                    payload: [{ data: cart, id: item._id, title: item.title, type: 'ADD_CART' }]
                })}>
                <i aria-hidden className="fa fa-times-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="text-right">${item.price}</td>
      <td className="text-right">${item.price * item.quantity}</td>
    </tr>
  );
};

export default CartItem;
