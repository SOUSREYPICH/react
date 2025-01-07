import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
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
                            <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                            <p className="mb-4">Modern studios often utilize open floor plans to create a sense of spaciousness and flow.urniture and decor are kept to a minimum, focusing on essential pieces that serve both form and function. </p>
                            <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="/assets/images/couch.png" className="img-fluid" alt="Couch Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="product-section">
        <div className="container">
            <div className="row">

               
                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                    <p className="mb-4">Mention the meticulous craftsmanship and the fine details that enhance the overall aesthetic and functionality. This could include intricate joinery, precise stitching, or unique finishes. </p>
                    <p><Link to="/shop" className="btn">Explore</Link></p>
                </div> 
                
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <Link className="product-item" to="/shop">
                        <img src="/assets/images/product-1.png" className="img-fluid product-thumbnail" />
                        <h3 className="product-title">Nordic Chair</h3>
                        <strong className="product-price">$50.00</strong>

                        <span className="icon-cross">
                            <img src="assets/images/cross.svg" className="img-fluid"/>
                        </span>
                    </Link>
                </div> 
                
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <Link className="product-item" to="/shop">
                        <img src="/assets/images/product-2.png" className="img-fluid product-thumbnail" alt="Product Image" />
                        <h3 className="product-title">Kruzo Aero Chair</h3>
                        <strong className="product-price">$78.00</strong>

                        <span className="icon-cross">
                            <img src="assets/images/cross.svg" className="img-fluid"/>
                        </span>
                    </Link>
                </div>
               
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <Link className="product-item" to="/shop">
                        <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" alt="Product 3" />
                        <h3 className="product-title">Ergonomic Chair</h3>
                        <strong className="product-price">$43.00</strong>

                        <span className="icon-cross">
                            <img src="assets/images/cross.svg" className="img-fluid"/>
                        </span>
                    </Link>
                </div>
                

            </div>
        </div>
        </div>
       
        <div className="why-choose-section">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p>They stay updated on the latest trends and technologies, incorporating innovative design solutions that enhance your space.</p>

                    <div className="row my-5">
                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="/assets/images/truck.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Fast &amp; Free Shipping</h3>
                                <p>A well-designed website allows for easy navigation, showcasing a range of products and services offered by the studio</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="/assets/images/bag.svg" alt="Bag Image" className="img-fluid" />
                                </div>
                                <h3>Easy to Shop</h3>
                                <p>Categories such as furniture, decor, lighting, and textiles are clearly labeled for easy access.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="/assets/images/support.svg" alt="Image" class="img-fluid"/>
                                </div>
                                <h3>24/7 Support</h3>
                                <p>Whether you have questions about a product, need help with your order, or require design advice, support is available at any hour.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="/assets/images/return.svg" alt="Image" className="img-fluid"/>
                                </div>
                                <h3>Hassle Free Returns</h3>
                                <p>A straightforward return policy outlines the steps for returning items, including time frames and conditions for returns.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="img-wrap">
                        <img src="/assets/images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
        </div>
       
        <div className="we-help-section">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="imgs-grid">
                        <div className="grid grid-1"><img src="/assets/images/img-grid-1.jpg" alt="Untree.co" /></div>
                        <div className="grid grid-2"><img src="/assets/images/img-grid-2.jpg" alt="Untree.co" /></div>
                        <div className="grid grid-3"><img src="/assets/images/img-grid-3.jpg" alt="Untree.co" /></div>
                    </div>
                </div>
                <div className="col-lg-5 ps-lg-5">
                    <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                    <p>We start by understanding your vision, preferences, and needs. Our designers work closely with you to develop a tailored plan that aligns with your lifestyle and aesthetic.</p>

                    <ul className="list-unstyled custom-list my-4">
                        <li>The studio starts by understanding the client's vision, preferences, and needs.</li>
                        <li>Their designers work closely with the client to develop a tailored plan that aligns</li>
                        <li>Efficient space planning is emphasized to maximize the potential of the client's</li>
                        <li>The focus is on creating a harmonious environment with good flow, functionality</li>
                    </ul>
                    <p><a herf="#" className="btn">Explore</a></p>
                </div>
            </div>
        </div>
        </div>
        
        <div className="popular-product">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="product-item-sm d-flex">
                        <div className="thumbnail">
                            <img src="/assets/images/product-1.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="pt-3">
                            <h3>Nordic Chair</h3>
                            <p>The Nordic Chair features a clean, minimalist design characterized by smooth lines and simple geometric shapes.  </p>
                            <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="product-item-sm d-flex">
                        <div className="thumbnail">
                            <img src="/assets/images/product-2.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="pt-3">
                            <h3>Kruzo Aero Chair</h3>
                            <p>The Kruzo Aero Chair features a modern, aerodynamic silhouette that highlights clean lines and a minimalist design. </p>
                            <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="product-item-sm d-flex">
                        <div className="thumbnail">
                            <img src="/assets/images/product-3.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="pt-3">
                            <h3>Ergonomic Chair</h3>
                            <p>The Ergonomic Chair features a modern design that blends seamlessly with various interior styles. </p>
                            <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        
        <div className="testimonial-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                    <h2 className="section-title">Testimonials</h2>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="testimonial-slider-wrap text-center">

                        <div id="testimonial-nav">
                            <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                            <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                        </div>

                        <div class="testimonial-slider">
								
							<div class="item">
								<div class="row justify-content-center">
									<div class="col-lg-8 mx-auto">

										<div class="testimonial-block text-center">
											<blockquote class="mb-5">
												<p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
											</blockquote>

											<div class="author-info">
												<div class="author-pic">
                                                    <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 class="font-weight-bold">Maria Jones</h3>
												<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
								</div>
							</div> 
								

							<div class="item">
								<div class="row justify-content-center">
									<div class="col-lg-8 mx-auto">

										<div class="testimonial-block text-center">
											<blockquote class="mb-5">
												<p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
											</blockquote>

											<div class="author-info">
												<div class="author-pic">
                                                    <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 class="font-weight-bold">Maria Jones</h3>
												<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
                                </div>
							</div> 
								

							<div class="item">
								<div class="row justify-content-center">
									<div class="col-lg-8 mx-auto">

										<div class="testimonial-block text-center">
											<blockquote class="mb-5">
												<p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
											</blockquote>

											<div class="author-info">
												<div class="author-pic">
                                                    <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 class="font-weight-bold">Maria Jones</h3>
												<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
								</div>
							</div> 
								
						</div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <div className="blog-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-6">
                    <h2 className="section-title">Recent Blog</h2>
                </div>
                <div className="col-md-6 text-start text-md-end">
                    <a href="#" className="more">View All Posts</a>
                </div>
            </div>

            <div className="row">

                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="post-entry">
                        <a href="#" className="post-thumbnail"><img src="/assets/images/post-1.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="post-content-entry">
                            <h3><a href="#">First Time Home Owner Ideas</a></h3>
                            <div className="meta">
                                <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="post-entry">
                        <a href="#" className="post-thumbnail"><img src="/assets/images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="post-content-entry">
                            <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                            <div className="meta">
                                <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="post-entry">
                        <a href="#" className="post-thumbnail"><img src="/assets/images/post-3.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="post-content-entry">
                            <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                            <div className="meta">
                                <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        
        <Footer/>
        
        <script scr="js/bootstrap.bundle.min.js"></script>
        <script scr="js/tiny-slider.js"></script>
        <script scr="js/custom.js"></script>

    </Fragment>
  )
}

export default Home

