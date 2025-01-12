import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Checkout({ cartItems }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
                <h1>Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <h3>Your Order</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${calculateTotal()}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
            </div>
            <button type="submit" className="btn btn-black">Place Order</button>
          </form>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Checkout;
