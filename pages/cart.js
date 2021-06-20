import CartItem from "../components/CartItem";
const Cart = () => {
  return (
    <div id="checkout-cart" className="container">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home /</a>
        </li>
        <li>
          <a href="/cart"> Shopping Cart</a>
        </li>
      </ul>

      <div className="row">
        <div id="content" className="col-sm-12 checkout">
          <h1 className="page_title">Shopping Cart</h1>
       
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <CartItem></CartItem>
                </tbody>
              </table>
            </div>
 

          <br />
          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4">
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <td className="text-left cart-total-title">Total:</td>
                  <td className="text-right cart-total-price">$220.00</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="buttons clearfix">
            <div className="pull-left">
              <a href="/" className="btn btn-primary">
                Continue Shopping
              </a>
            </div>
            <div className="pull-right">
              <a href="/checkout" className="btn btn-primary">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
