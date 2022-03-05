import React from 'react';
import heroPhone from "../../assets/images/home/about/home-phones.jpg";
import glary4 from "../../assets/images/home/about/gallery-4.png";

const About = () => {
    return (
        <div id="about">
            <div class="container-fluid">
                <div class="row align-items-center about_row">
                      <div class="col-lg-6">
                          <div class="about_inner_left">
                              <h2 class="about_title">What is Depop</h2>

                              <p class="about_text">Depop is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.</p>
                          
                              <button class="about_btn">Get Started</button>
                          </div>
                      </div>
                      
                      <div class="offset-0 offset-lg-2 col-10 col-md-6 col-lg-4">
                          <div class="about_inner_right">
                              <div class="main_img">
                                  <img src={heroPhone} class="img-fluid" alt="" />
                              </div>

                              <img src={glary4} class="main_image_inner" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
};

export default About;