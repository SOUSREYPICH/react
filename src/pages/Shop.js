import React, { Fragment, useEffect, useState } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Cart state
  const navigate = useNavigate(); // To programmatically navigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.slice(0, 8)); // Limit to 8 products
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    navigate('/cart'); // Navigate to the Cart page
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
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {error && <p className="text-danger">Error fetching products: {error}</p>}
            {!error && products.length > 0 ? (
              products.map((product) => (
                <div className="col-12 col-md-6 col-lg-3 mb-4" key={product.id}>
                  <div className="card h-100 shadow-sm">
                    <div className="product-item" onClick={() => addToCart(product)}> {/* Handle click for adding to cart */}
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{ maxHeight: '200px', objectFit: 'contain' }}
                      />
                      <div className="card-body">
                        <h3 className="product-title" style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{product.title}</h3>
                        <strong className="product-price">${product.price.toFixed(2)}</strong>
                      </div>
                      <div className="icon-cross text-center mb-2">
                        <img src="/assets/images/cross.svg" className="img-fluid" alt="Remove item" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
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

export default Shop;
