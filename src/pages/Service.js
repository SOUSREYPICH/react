import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Service() {
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
                <h1>Services</h1>
                <p className="mb-4">we offer a comprehensive range of interior design services tailored to meet the unique needs of our clients. Whether you are looking to refresh a single room or undertake a full-scale renovation, our experienced team is here to guide you every step of the way.</p>
                <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="/assets/images/couch.png" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="why-choose-section">
      <div className="container">
        
        
        <div className="row my-5">
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src="/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
              </div>
              <h3>Fast &amp; Free Shipping</h3>
              <p>A well-designed website allows for easy navigation, showcasing a range of products and services offered by the studio</p>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src="/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
              </div>
              <h3>Easy to Shop</h3>
              <p>Categories such as furniture, decor, lighting, and textiles are clearly labeled for easy access.</p>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src="/assets/images/support.svg" alt="Image" className="imf-fluid"/>
              </div>
              <h3>24/7 Support</h3>
              <p>Whether you have questions about a product, need help with your order, or require design advice, support is available at any hour.</p>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src="/assets/images/return.svg" alt="Image" className="imf-fluid"/>
              </div>
              <h3>Hassle Free Returns</h3>
              <p>A straightforward return policy outlines the steps for returning items, including time frames and conditions for returns.</p>
            </div>
          </div>

          
        </div>

      </div>
      </div>
      
      <div className="product-section pt-0">
      <div className="container">
        <div className="row">

          
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
            <p><a href="#" className="btn">Explore</a></p>
          </div> 
          
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <img src="/assets/images/product-1.png" className="img-fluid product-thumbnail"/>
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid"/>
              </span>
            </a>
          </div> 
          
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <img src="/assets/images/product-2.png" className="img-fluid product-thumbnail"/>
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>

              <span className="icon-cross">
                <img src="src/images/cross.svg" className="img-fluid"/>
              </span>
            </a>
          </div>
          
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail"/>
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid"/>
              </span>
            </a>
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

export default Service
