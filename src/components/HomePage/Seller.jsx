import React from 'react';
import s1 from "../../assets/images/home/seller/s1.jpg";
import s2 from "../../assets/images/home/seller/sugarvtg.jpg";
import s3 from "../../assets/images/home/seller/areaeighteen.jpg";
import s4 from "../../assets/images/home/seller/palm_vaults.jpg";

const sellerDetails = [
    {
        img: s1,
        title: "sadsac",
    },
    {
        img: s2,
        title: "sugarvtg",
    },
    {
        img: s3,
        title: "areaeighteen",
    },
    {
        img: s4,
        title: "PALM_VAULTS",
    },
];

const Seller = () => {
    return (
        <div id="seller">
              <div class="container-fluid">
                  <div class="seller_inner">
                        {
                            sellerDetails.map((seller, index) =>
                                <a href="/" class="seller_card" key={index}>
                                    <div class="seller_img_bg">
                                        <div class="seller_img">
                                            <img src={seller.img} alt="" class="img-fluid" />
                                        </div>
                                    </div>

                                    <div class="seller_info">
                                        <div class="seller_logo">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" class="styles__StyledIconDepopGroup-sc-__sc-1cl605m-8 PxBNk"><title></title><g fill="none"><rect width="28.267" height="28.267" x=".367" y=".367" fill="#FF2300" rx="2"></rect><path fill="#262626" d="M7.434,16.595 C7.434,13.335 9.668,11.331 13.24,11.331 L16.938,11.331 L16.938,6.551 L21.567,6.551 L21.567,21.567 L13.223,21.567 C9.668,21.567 7.433,19.641 7.433,16.595 L7.434,16.595 Z M12.327,16.428 C12.327,17.678 13.056,18.33 14.457,18.33 L16.938,18.33 L16.938,14.501 L14.48,14.501 C13.079,14.501 12.327,15.159 12.327,16.428 L12.327,16.428 Z"></path></g></svg>
                                        </div>

                                        <p class="seller_title">@ {seller.title}</p>
                                    </div>
                                </a>
                            )
                        }
                  </div>
              </div>
          </div>
    );
};

export default Seller;