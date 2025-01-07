import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Fragment>
        <div className="container">
            <Link class="navbar-brand" href="index.html">Home Interior<span></span></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsFurni">
                <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to='/' class="nav-link">Home</Link>
                    </li>
                    <li ><Link class="nav-link" to="/shop">Shop</Link></li>
					<li><Link class="nav-link" to="/about">About us</Link></li>
					<li><Link class="nav-link" to="/service">Services</Link></li>
					<li><Link class="nav-link" to="/blog">Blog</Link></li>
					<li><Link class="nav-link" to="/contact">Contact us</Link></li>
                </ul>

                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li><a className="nav-link" href="#"><img src="/assets/images/user.svg" alt="User" /></a></li>
                    <li><Link className="nav-link" to="/cart"><img src="/assets/images/cart.svg" alt="Cart" /></Link></li>
                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default Menu
