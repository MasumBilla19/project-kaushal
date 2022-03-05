import React from 'react';
import sell from "../../assets/images/home/sell/homepage-narrative-seller.jpg";
const Sell = () => {
    return (
        <div id="sell">
              <div class="container-fluid">
                  <div class="row align-items-center sell_row">
                      <div class="col-md-12 col-lg-6">
                          <div class="sell_inner_left">
                              <h2 class="sell_title">Sell your Way</h2>
                          
                              <p class="sell_text">Sell a few items or build your empire. Whatever your vibe we’ll share our pro tips to help you get there. It's simple to get started.</p>
                          
                              <button class="sell_btn">Sell On Depop</button>
                          </div>
                      </div>

                      <div class="col-md-12 offset-lg-2 col-lg-4">
                          <div class="sell_inner_right">
                              <div class="img_wrapper">
                                  <img src={sell} class="img-fluid" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
};

export default Sell;