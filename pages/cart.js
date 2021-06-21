import CartItem from "../components/CartItem";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { getData, postData } from "../utils/fetchData";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import Head from "next/head";
const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;
  const [total, setTotal] = useState(0)
  const [callback, setCallback] = useState(false)
  // get price total
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      },0)

      setTotal(res)
    }

    getTotal()
  },[cart])
  // update cart state after change in database
  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('on__cart'))
    if(cartLocal && cartLocal.length > 0){
      let newArr = []
      const updateCart = async () => {
        for (const item of cartLocal){
          const res = await getData(`product/${item._id}`)
          const { _id, title, images, price, inStock, sold } = res.product
          if(inStock > 0){
            newArr.push({ 
              _id, title, images, price, inStock, sold,
              quantity: item.quantity > inStock ? 1 : item.quantity
            })
          }
        }

        dispatch({ type: 'ADD_CART', payload: newArr })
      }

      updateCart()
    } 
  },[callback]);
  return (
    <>
    <Head><title>Cart</title></Head>
    <div id="checkout-cart" className="container">
     <Breadcrumb></Breadcrumb>
      {cart.length === 0 ? (
        <>
          {" "}
          <h1 className="page_title">Shopping Cart</h1>
          <p>Your shopping cart is empty!</p>
          <div className="buttons clearfix">
            <div className="pull-right">
              <a href="/" className="btn btn-primary">
                Continue
              </a>
            </div>
          </div>{" "}
        </>
      ) : (
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
                {
                cart.map(item => (
                  <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
                ))
              }
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
                      <td className="text-right cart-total-price">${total}</td>
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
      )}
    </div>
    </>
  );
  
};

export default Cart;
