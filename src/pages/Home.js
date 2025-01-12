import React, { Fragment, useEffect, useState } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
                <h1>Modern Men's <span className="d-block">Design Studio</span></h1>
  
                <p>
                  <Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent Product.</h2>
              <p className="mb-4">Mention the meticulous craftsmanship and the fine details that enhance the overall aesthetic and functionality.</p>
              <p><Link to="/shop" className="btn">Explore</Link></p>
            </div>

            {/** Products Listing (limited to 5 products) */}
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="col-12 col-md-4 mb-4 d-flex flex-column">
                <Link className="product-item" to="/shop" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', height: '100%', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
                  <img src={product.image} className="img-fluid" alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
                  <h3 className="product-title" style={{ fontSize: '1.2rem', margin: '0 0 5px' }}>{product.title}</h3>
                  <strong className="product-price" style={{ marginBottom: '5px' }}>${product.price}</strong>
                  <span className="icon-cross" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Cross Icon" style={{ width: '20px' }} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Home;
