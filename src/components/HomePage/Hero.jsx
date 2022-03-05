import React from 'react';
import app from "../../assets/images/home/hero/app.png";
import play from "../../assets/images/home/hero/play.png";
import hero from "../../assets/images/home/hero/hero.jpg";

const Hero = () => {

    return (
        <div id="hero">
            <picture>
                <source media="(max-width: 480px)" srcset="https://d2qzw5x58y77kz.cloudfront.net/web/assets/narrative/mobile-hero-480@2x.jpg" />
                <source media="(max-width: 768px)" srcset="https://d2qzw5x58y77kz.cloudfront.net/web/assets/narrative/mobile-hero@2x.jpg" />
                <source media="(min-width: 769px)" srcset="https://d2qzw5x58y77kz.cloudfront.net/web/assets/narrative/hero@2x.jpg" />
                <img src={hero} alt="" class="hero_bg" />
            </picture>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="hero_inner">
                            <h1 class="hero_title">BUY. SELL. <br /> DISCOVER UNIQUE FASHION.</h1>
                              
                            <p class="hero_text">Designer. Preloved. Vintage. Streetwear. Sneakers. Whatever your style. Find it on Depop.</p>

                            <div class="hero_img">
                                <a href="/" class="">
                                    <img src={app} class="img-fluid"  alt="app" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Kaushal on the App Store" /> 
                                </a>

                                <a href="/" class="">
                                    <img  src={play} class="img-fluid lastImg" alt="app" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Kaushal on the Google Play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;