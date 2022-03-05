import React from 'react';
import buyer from "../../assets/images/home/style/homepage-narrative-buyer.jpg";

const FindStyle = () => {
    return (
        <div id="find_style">
            <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-lg-4">
                            <div class="style_inner_left">
                                <div class="img_wrapper">
                                    <img src={buyer} class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="offset-md-1 col-md-10 offset-lg-2 col-lg-6">
                            <div class="style_inner_right">
                                <h2 class="style_title">Find your style</h2>
                                
                                <p class="style_text">Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.</p>
                            
                                <button class="style_btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default FindStyle;