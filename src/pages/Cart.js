import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Cart({ cartItems, updateQuantity, removeItem }) {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; // You can add discounts or taxes here if needed

  return (
    <Fragment>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
        <Menu />
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <img src={item.image} alt="Image" className="img-fluid" />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{item.title}</h2>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-black" type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>&minus;</button>
                            </div>
                            <input type="text" className="form-control text-center quantity-amount" value={item.quantity} readOnly />
                            <div className="input-group-append">
                              <button className="btn btn-outline-black" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>&plus;</button>
                            </div>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td><button className="btn btn-black btn-sm" onClick={() => removeItem(item.id)}>X</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${subtotal.toFixed(2)}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${total.toFixed(2)}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/checkout">
                        <button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>
    </Fragment>
  );
}

export default Cart;
