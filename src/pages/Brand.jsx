import React from 'react';
import u1 from "../assets/images/brand/U1.jpg";
import p5 from "../assets/images/brand/P5.jpg";
import { Link } from 'react-router-dom';

const brandDetails = [
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
    {
        img: p5,
        price: "5.00",
    },
];

const Brand = () => {
    return (
        <section id="brand-section">
            <div class="container-fluid">
                <div class="top-part">
                    <div class="brand-info d-flex">
                        <div class="brand-profile-image">
                            <div class="sign-icon">
                                <span class="iconify" data-icon="el:ok-sign"></span>
                            </div>
                            <img src={u1} alt=""/>
                        </div>
                        <div class="brand-profile-info">
                            <div class="name">
                                <h2 class="brand-name">American Madness</h2>
                                <div class="username">
                                    <b>@americanmadness</b>
                                </div>
                            </div>

                                <div class="reviews d-flex">
                                    <div class="stars">
                                        <span class="iconify" data-icon="codicon:star-full"></span>
                                        <span class="iconify" data-icon="codicon:star-full"></span>
                                        <span class="iconify" data-icon="codicon:star-full"></span>
                                        <span class="iconify" data-icon="codicon:star-full"></span>
                                        <span class="iconify" data-icon="codicon:star-full"></span>
                                    </div>
                                    <div class="number">
                                        <Link to="">2000</Link>
                                    </div>
                                </div>

                                <div class="basic-info d-flex">
                                    <div class="sold d-flex">
                                        <div class="icon">
                                            <span class="iconify" data-icon="bxs:purchase-tag"></span>
                                        </div>
                                        <div class="text">
                                            <span>4885 sold</span>
                                        </div>
                                    </div>
                                    <div class="activity d-flex">
                                        <div class="icon">
                                            <span class="iconify" data-icon="pepicons:electricity"></span>
                                        </div>
                                        <div class="text">
                                            <span>Active over a week ago</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>


                    <div class="follow-line d-flex">
                        <div class="follwers">
                            <b class="number">64k</b> Followers
                        </div>
                        <div class="following">
                            <b class="number">1</b> Following
                        </div>
                        <div class="message">
                            <span class="iconify" data-icon="bx:envelope"></span>
                        </div>
                        <div class="follow-btn">
                            <button>Follow</button>
                        </div>
                    </div>

                    <div class="status">
                            <p class="open">DEPOP NOW CLOSED - WEBSITE</p>
                            <p class="update">UPDATED DAILY</p>
                        <div class="website">
                            https://americanmaddness.co.uk
                        </div>
                    </div>
                </div>


                <div class="brand-body">
                    <div class="all-likes d-flex">
                        <div class="all active" >
                            All
                        </div>
                        <div class="likes">
                            Likes
                        </div>
                    </div>
                    <div class="products">
                        {
                            brandDetails.map((brand, index) =>
                                <div class="product" key={index}>
                                    <div class="image">
                                        <div class="overlay">                             
                                        </div>
                                        <a href="">
                                            <img src={brand.img} alt=""/>
                                        </a>
                                    </div>
                                    <div class="price">
                                        <b class="new-price">{"$"}{brand.price}</b>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;