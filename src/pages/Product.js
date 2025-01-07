import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]); // Stores products
    const [cart, setCart] = useState([]); // Stores cart items

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(setProducts);
    }, []);

    const addToCart = (product) => setCart([...cart, product]); // Add product to cart

    return (
        <div>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {products.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            flex: '1 1 calc(25% - 15px)', // 4 products per line
                            textAlign: 'center',
                            border: '1px solid #ddd',
                            padding: '10px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <h4>{p.title}</h4>
                        <p>${p.price}</p>
                        <img
                            src={p.image}
                            alt={p.title}
                            style={{ width: '100%', height: 'auto', maxHeight: '150px' }}
                        />
                        <button onClick={() => addToCart(p)} style={{ marginTop: '10px' }}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
