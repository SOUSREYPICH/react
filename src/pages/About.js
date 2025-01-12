import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function About() {
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
                <h1>About Us</h1>
                <p>We will tell to something about us so u can know about us clearly</p>
                <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>They stay updated on the latest trends and technologies, incorporating innovative design solutions that enhance your space.</p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>A well-designed website allows for easy navigation, showcasing a range of products and services offered by the studio</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>Categories such as furniture, decor, lighting, and textiles are clearly labeled for easy access.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/assets/images/support.svg" alt="Image" className="imf-fluid"/>
                  </div>
                  <h3>24/7 Support</h3>
                  <p>Whether you have questions about a product, need help with your order, or require design advice, support is available at any hour.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
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

          <div className="col-lg-5">
            
          </div>

        </div>
      </div>
      </div>
      
      <div className="untree_co-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">

          
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="/assets/images/person_1.jpg" className="img-fluid mb-5"/>
            <h3 clas><a href="#"><span className="">Lawson</span> Arnold</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div> 
          
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="/assets/images/person_2.jpg" className="img-fluid mb-5"/>

            <h3 clas><a href="#"><span className="">Jeremy</span> Walker</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

          </div> 
          
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="/assets/images/person_3.jpg" className="img-fluid mb-5"/>
            <h3 clas><a href="#"><span className="">Patrik</span> White</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div> 
          
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="/assets/images/person_4.jpg" className="img-fluid mb-5"/>

            <h3 clas><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

          
          </div> 
          
        </div>
      </div>
      </div>
      
      <div className="testimonial-section before-footer-section">
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

              <div className="testimonial-slider">
                
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">

                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div> 
                
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">

                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div> 
                

                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">

                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
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
      
      <Footer/>


      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>

    </Fragment>
  )
}

export default About
