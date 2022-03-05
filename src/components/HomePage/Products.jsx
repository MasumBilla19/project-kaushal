import React from 'react';
import p1 from "../../assets/images/home/product/P1.jpg";
import p2 from "../../assets/images/home/product/p2.jpg";
import p3 from "../../assets/images/home/product/P3.jpg";
import p4 from "../../assets/images/home/product/P4.jpg";
import p5 from "../../assets/images/home/product/P5.jpg";
import p6 from "../../assets/images/home/product/P6.jpg";
import p7 from "../../assets/images/home/product/P7.jpg";
import p8 from "../../assets/images/home/product/P8.jpg";
import p9 from "../../assets/images/home/product/P9.jpg";
import p10 from "../../assets/images/home/product/P10.jpg";
import p11 from "../../assets/images/home/product/P11.jpg";
import p12 from "../../assets/images/home/product/P12.jpg";


const productsDetails = [
    {
        img: p1,
        price: "25.20",
        delPrice: "36.00",
    },
    {
        img: p2,
        price: "19.95",
        delPrice: "",
    },
    {
        img: p3,
        price: "18.20",
        delPrice: "",
    },
    {
        img: p4,
        price: "22.00",
        delPrice: "",
    },
    {
        img: p5,
        price: "24.22",
        delPrice: "",
    },
    {
        img: p6,
        price: "35.00",
        delPrice: "",
    },
    {
        img: p7,
        price: "40.00",
        delPrice: "",
    },
    {
        img: p8,
        price: "10.00",
        delPrice: "",
    },
    {
        img: p9,
        price: "34.99",
        delPrice: "",
    },
    {
        img: p10,
        price: "40.00",
        delPrice: "",
    },
    {
        img: p11,
        price: "80.00",
        delPrice: "",
    },
    {
        img: p12,
        price: "35.00",
        delPrice: "",
    },
];

const Products = () => {
    return (
        <div id="products">
              <div class="container-fluid">
                  <div class="row">
                      <h2 class="product_title">Things we love</h2>
                  
                      <div class="products_inner">
                          <ul class="product_inner">
                                {
                                    productsDetails.map((product, index) =>
                                        <li class="product_item" key={index}>
                                            <a href="/" class="">
                                                <div class="img_wrapper">
                                                    <img src={product.img} alt="" class="img-fluid" />
                                                </div>
                                            </a>

                                            <div class="price_wrapper">
                                                <p class="delPrice">{product.delPrice && "£"}{product?.delPrice}</p>
                                                <p class="price">£{product.price}</p>
                                            </div>
                                        </li>
                                    )
                                }
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    );
};

export default Products;