import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Blog() {
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
                <h1>Blog</h1>
                <p className="mb-4">we share tips, trends, and inspiration to help you transform your spaces into beautiful and functional environments. Whether you're a design enthusiast or just starting your journey, our blog has something for everyone.</p>
                <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="/assets/images/couch.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="blog-section">
      <div className="container">
        
        <div className="row">

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
              <a href="#" className="post-thumbnail"><img src="assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
              <div className="post-content-entry">
                <h3><a href="#">First Time Home Owner Ideas</a></h3>
                <div className="meta">
                  <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
              <div className="post-content-entry">
                <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                <div className="meta">
                  <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="assets/images/post-3.jpg" alt="Image" className="img-fluid"/></a>
              <div className="post-content-entry">
                <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                <div className="meta">
                  <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
              <div className="post-content-entry">
                <h3><a href="#">First Time Home Owner Ideas</a></h3>
                <div className="meta">
                  <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
              <div className="post-content-entry">
                <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                <div className="meta">
                  <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="assets/images/post-3.jpg" alt="Image" className="img-fluid"/></a>
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
                            <img src="/assets/images/person-1.jpg" alt="Maria" className="img-fluid"/>
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
                          <p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                          <img src="assets/images/person-1.jpg" alt="Maria Jone" className="img-fluid"/>
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
                          <p>&ldquo;Maria Jones is a visionary leader and the co-founder of XYZ Inc, where she spearheads innovative strategies that drive the company's growth and success. With over a decade of experience in the industry, Maria is passionate about modern design and sustainability.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="assets/images/person-1.jpg" alt="Maria Jone" className="img-fluid"/>
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

export default Blog
