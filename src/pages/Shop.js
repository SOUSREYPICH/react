import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import Cart from './Cart'
import { Link } from "react-router-dom";
import Product from './Product';


function Shop() {
  return (
    <Fragment>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

        <Menu/>
  
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7">
              
            </div>
          </div>
        </div>
      </div>
      

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div> 
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-1.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div> 
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-2.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Kruzo Aero Chair</h3>
                  <strong className="product-price">$78.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div>
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Ergonomic Chair</h3>
                  <strong className="product-price">$43.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div>
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div> 
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-1.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div> 
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                  <img src="/assets/images/product-2.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Kruzo Aero Chair</h3>
                  <strong className="product-price">$78.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div>
              
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" to="/cart">
                <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" alt="Product" />
                  <h3 className="product-title">Ergonomic Chair</h3>
                  <strong className="product-price">$43.00</strong>

                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                  </span>
                </Link>
              </div>
              

            </div>
        </div>
      </div>
      
      <Footer/>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>

    </Fragment>
  )
}

export default Shop
