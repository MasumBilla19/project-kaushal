import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import p1 from "../assets/images/all-products/P5 (1).jpg"

const allProducts = [
    {
        img: p1,
        price: "4.56",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.87",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.00",
        delPrice: "",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "",
    },
    {
        img: p1,
        price: "4.94",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.00",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "3.56",
        delPrice: "",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "4.11",
        delPrice: "",
    },
    {
        img: p1,
        price: "4.56",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "5.60",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "3.96",
        delPrice: "5.00",
    },
    {
        img: p1,
        price: "5.56",
        delPrice: "5.00",
    },
];

const AllProduct = () => {
    const [category, setCategory] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [brand, setBrand] = useState(false);
    const [price, setPrice] = useState(false);
    const [color, setColor] = useState(false);
    const [condition, setCondition] = useState(false);

    return (
        <section id="all-products">
            <div class="container-fluid">
                <div class="top-part">
                    <div class="page-redirected align-items-center d-flex">
                        <a class="home-page" href="../index.html">Home</a>     
                        <img src="../assets/images/all-products/greater-than.png" alt=""/>
                        <span>Art</span>
                    </div>
                    <div class="category">
                        <h2>Art</h2>
                    </div>
                    <div class="little-description">
                        <p>From one-of-a kind originals, art prints, rare pop culture pop culture posters, handmade <br/> embroidery hangings and more. Discover and shop home decor and art from creatives all over <br/> the world. Updated daily with unique items.</p>
                    </div>
                    <hr/>
                </div>
                <div class="products-body">
                    <div class="filter">
                        <div class="filter_inner">
                            <div class="dropdown_category">
                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div onClick={() => !category ? setCategory(true) : setCategory(false)} class="dropdown_single_category_wrapper active">
                                            <div class="dropdown_info">
                                                <div class="dropdown_info1 active">Category</div>
                                                <div class="dropdown_info2">Category</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>
                                        
                                        {category &&
                                            <div class="dropdown_Inner_area" id="categoryBtn">
                                                <div class="dropdown_menu_list">
                                                    <div class="dropdown_Inner_category">
                                                        <div class="dropdown_search">
                                                            <svg class="serch_icon" viewBox="0 0 16 16"><title>Search</title><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.504 12.874c2.966 0 5.37-2.404 5.37-5.37s-2.404-5.37-5.37-5.37-5.37 2.404-5.37 5.37 2.404 5.37 5.37 5.37zm6.363.993l-2.522-2.522"></path></svg>
                                                            
                                                            <input type="text" placeholder="Search for categories" class="serch_input"/>
                                                        </div>

                                                        <div class="dropdown_details">
                                                            <details class="dropdown_single_item">
                                                                <summary class="dropdown_single_item_inner">
                                                                    <div class="dropdown_single_item_wrapper">
                                                                        <div class="dropdown_item_text">Mens</div>
                                                                        
                                                                        <svg viewBox="0 0 20 20" class="dropdown_down_arrow"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                                                    </div>
                                                                </summary>
                                                            </details>

                                                            <details class="dropdown_single_item">
                                                                <summary class="dropdown_single_item_inner">
                                                                    <div class="dropdown_single_item_wrapper">
                                                                        <div class="dropdown_item_text">Womens</div>
                                                                        
                                                                        <svg viewBox="0 0 20 20" class="dropdown_down_arrow"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                                                    </div>
                                                                </summary>
                                                            </details>

                                                            <details class="dropdown_single_item">
                                                                <summary class="dropdown_single_item_inner">
                                                                    <div class="dropdown_single_item_wrapper">
                                                                        <div class="dropdown_item_text">Others</div>
                                                                        
                                                                        <svg viewBox="0 0 20 20" class="dropdown_down_arrow"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                                                    </div>
                                                                </summary>
                                                            </details>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div class="dropdown_single_category_wrapper">
                                            <div class="dropdown_info" onClick={() => !subCategory ? setSubCategory(true) : setSubCategory(false)}>
                                                <div class="dropdown_info1">Subcategory</div>
                                                <div class="dropdown_info2">Subcategory</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>

                                        {subCategory &&
                                            <div class="dropdown_sub_area" id="subCategoryBtn">
                                                <div class="dropdown_sub_inner">
                                                    <div class="dropdown_sub_search">
                                                        <svg class="serch_sub_icon" viewBox="0 0 16 16"><title>Search</title><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.504 12.874c2.966 0 5.37-2.404 5.37-5.37s-2.404-5.37-5.37-5.37-5.37 2.404-5.37 5.37 2.404 5.37 5.37 5.37zm6.363.993l-2.522-2.522"></path></svg>
                                                        
                                                        <input type="text" placeholder="Search for categories" class="serch_sub_input"/>
                                                    </div>

                                                    <div class="dropdown_sub_item_wrapper">
                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Collectibles</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Mixed Media</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Prints</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Drawings & Illustrations</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Paintings</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Photography</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Sculptures</div>
                                                        </div>

                                                        <div class="dropdown_sub_item">
                                                            <div class="dropdown_sub_item_text">Other</div>
                                                        </div>
                                                    </div>

                                                    <div class="dropdown_sub_button">
                                                        <button type="button" class="sub_button_info">
                                                            <span class="button_text">Reset</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div class="dropdown_single_category_wrapper" onClick={() => !brand ? setBrand(true) : setBrand(false)}>
                                            <div class="dropdown_info" >
                                                <div class="dropdown_info1">Brand</div>
                                                <div class="dropdown_info2">Brand</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>

                                        {brand &&
                                            <div class="dropdown_brand_area" id="brandBtn">
                                                <div class="dropdown_brand_inner">
                                                    <div class="dropdown_brand_search">
                                                        <svg class="serch_brand_icon" viewBox="0 0 16 16"><title>Search</title><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.504 12.874c2.966 0 5.37-2.404 5.37-5.37s-2.404-5.37-5.37-5.37-5.37 2.404-5.37 5.37 2.404 5.37 5.37 5.37zm6.363.993l-2.522-2.522"></path></svg>
                                                        
                                                        <input type="text" placeholder="Search for categories" class="serch_brand_input"/>
                                                    </div>

                                                    <div class="dropdown_brand_item_wrapper_group">
                                                        <div class="dropdown_brand_item_wrapper_group_info">
                                                            <div class="dropdown_brand_item_wrapper_group1_title">Suggested</div>

                                                            <div class="dropdown_brand_item_wrapper">
                                                                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">Supreme</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">& Other Stories</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">Unbranded</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">Pokémon</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">Funko</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="dropdown_brand_item_wrapper_group_info">
                                                            <div class="dropdown_brand_item_wrapper_group1_title">A-Z</div>

                                                            <div class="dropdown_brand_item_wrapper">
                                                                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">& Other Stories</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">O32c</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">11 Degrees</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">17London</div>
                                                                </div>
                
                                                                <div class="dropdown_brand_item">
                                                                    <div class="dropdown_brand_item_text">1822 Denim</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="dropdown_brand_button">
                                                        <button type="button" class="brand_button_info">
                                                            <span class="button_text">Reset</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div class="dropdown_single_category_wrapper" onClick={() => !price ? setPrice(true) : setPrice(false)}>
                                            <div class="dropdown_info" >
                                                <div class="dropdown_info1">Price</div>
                                                <div class="dropdown_info2">Price</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>

                                        {price &&
                                            <div class="dropdown_price_area" id="priceBtn">
                                                <div class="dropdown_price_inner">
                                                    <div class="dropdown_price_inner_wrapper">
                                                        <div class="price_title">
                                                            <label for="" class="price_min">Min.</label>
                                                        
                                                            <label for="" class="price_max">Max.</label>
                                                        </div>
                                                    
                                                        <input type="text" class="price_input" placeholder="£1"/>
                                                    
                                                        <input type="text" class="price_any" placeholder="Any"/>
                                                    
                                                        <div class="price_button_wrapper">
                                                            <div class="reset_btn"><span class="reset_btn_text">Reset</span></div>
                                                            
                                                            <div class="done_btn"><span class="done_btn_text">Done</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div class="dropdown_single_category_wrapper" onClick={() => !color ? setColor(true) : setColor(false)}>
                                            <div class="dropdown_info">
                                                <div class="dropdown_info1">Colour</div>
                                                <div class="dropdown_info2">Colour</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>
                                        {color &&
                                            <div class="dropdown_color_area" id="colorBtn">
                                                <div class="dropdown_color_inner">
                                                    <div class="dropdown_color_inner_wrapper">
                                                        <div class="color_Details">
                                                            <div class="color_item">
                                                                <div class="color_item_inner">
                                                                    <div>
                                                                        <div class="color_info1"></div>
                                                                    </div>
                                                                    <div>Black</div>
                                                                </div>
                                                            </div>

                                                            <div class="color_item">
                                                                <div class="color_item_inner">
                                                                    <div>
                                                                        <div class="color_info2"></div>
                                                                    </div>
                                                                    <div>Gray</div>
                                                                </div>
                                                            </div>

                                                            <div class="color_item">
                                                                <div class="color_item_inner">
                                                                    <div>
                                                                        <div class="color_info3"></div>
                                                                    </div>
                                                                    <div>White</div>
                                                                </div>
                                                            </div>

                                                            <div class="color_item">
                                                                <div class="color_item_inner">
                                                                    <div>
                                                                        <div class="color_info4"></div>
                                                                    </div>
                                                                    <div>Brown</div>
                                                                </div>
                                                            </div>

                                                            <div class="color_item">
                                                                <div class="color_item_inner">
                                                                    <div>
                                                                        <div class="color_info5"></div>
                                                                    </div>
                                                                    <div>Tan</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="dropdown_color_button">
                                                            <button type="button" class="color_button_info">
                                                                <span class="button_text">Reset</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div class="category_item">
                                    <div class="dropdown_single_category">
                                        <div class="dropdown_single_category_wrapper" onClick={() => !condition ? setCondition(true) : setCondition(false)}>
                                            <div class="dropdown_info">
                                                <div class="dropdown_info1">Condition</div>
                                                <div class="dropdown_info2">Condition</div>
                                            </div>

                                            <svg viewBox="0 0 20 20" class="Optionstyles__StyledIconChevron-sc-__sc-1o0frlw-10 bhPDiK"><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                        </div>
                                        {condition &&
                                            <div class="dropdown_condition_area" id="conditionBtn">
                                                <div class="dropdown_condition_inner">
                                                    <div class="dropdown_condition_inner_wrapper">
                                                        <div class="condition_details">
                                                            <div class="condition_item">
                                                                <div class="condition_item_inner">
                                                                    <div class="condition_header_wrapper">
                                                                        <h2 class="condition_title">Brand new</h2>
                                                                    </div>

                                                                    <div class="condition_text">Unused with original packaging or tags</div>
                                                                </div>
                                                            </div>

                                                            <div class="condition_item">
                                                                <div class="condition_item_inner">
                                                                    <div class="condition_header_wrapper">
                                                                        <h2 class="condition_title">Brand new</h2>
                                                                    </div>

                                                                    <div class="condition_text">Unused with original packaging or tags</div>
                                                                </div>
                                                            </div>

                                                            <div class="condition_item">
                                                                <div class="condition_item_inner">
                                                                    <div class="condition_header_wrapper">
                                                                        <h2 class="condition_title">Brand new</h2>
                                                                    </div>

                                                                    <div class="condition_text">Unused with original packaging or tags</div>
                                                                </div>
                                                            </div>

                                                            <div class="condition_item">
                                                                <div class="condition_item_inner">
                                                                    <div class="condition_header_wrapper">
                                                                        <h2 class="condition_title">Brand new</h2>
                                                                    </div>

                                                                    <div class="condition_text">Unused with original packaging or tags</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="dropdown_condition_button">
                                                            <button type="button" class="condition_button_info">
                                                                <span class="button_text">Reset</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div class="check_category">
                                <div class="check_category_wrapper">
                                    <label for="" class="shopping_chack">
                                        <input type="checkbox" name="" class="category_box" id=""/>
                                    
                                        <div class="check_input">
                                            <div class="check_input_inner">
                                                <svg viewBox="0 0 32 32"><title>Success</title><g fill="currentColor"><path d="M30.3998051,6.60162398 C30.399542,6.60040819 23.9996994,12.9998476 11.2002773,25.7999421 L10.6346034,25.2341679 L1.60162398,16.1995886 C1.60040819,16.1998517 4.799969,19.4003705 11.2003064,25.801145 L30.3998051,6.60162398 Z M29.2670767,5.46889549 C29.8922707,4.84370149 30.9059105,4.84370151 31.5311045,5.46889552 C32.1562985,6.09408954 32.1562985,7.10772931 31.5311045,7.73292336 L12.3353062,26.9287058 C12.0353953,27.2318118 11.6267064,27.4023661 11.2003032,27.4023661 C10.7738999,27.4023661 10.365211,27.2318118 10.0682892,26.9317108 L0.468895522,17.3323171 C-0.156298507,16.707123 -0.156298507,15.6934832 0.468895522,15.0682892 C1.09408955,14.4430952 2.10772935,14.4430952 2.73297346,15.0683393 L11.200329,23.5371945 L29.2670767,5.46889549 Z"></path></g></svg>
                                            </div>
                                        </div>

                                        <p class="check_text">Free domestic shipping</p>
                                    </label>

                                    <label for="" class="shopping_chack">
                                        <input type="checkbox" name="" class="category_box" id=""/>
                                    
                                        <div class="check_input">
                                            <div class="check_input_inner">
                                                <svg viewBox="0 0 32 32"><title>Success</title><g fill="currentColor"><path d="M30.3998051,6.60162398 C30.399542,6.60040819 23.9996994,12.9998476 11.2002773,25.7999421 L10.6346034,25.2341679 L1.60162398,16.1995886 C1.60040819,16.1998517 4.799969,19.4003705 11.2003064,25.801145 L30.3998051,6.60162398 Z M29.2670767,5.46889549 C29.8922707,4.84370149 30.9059105,4.84370151 31.5311045,5.46889552 C32.1562985,6.09408954 32.1562985,7.10772931 31.5311045,7.73292336 L12.3353062,26.9287058 C12.0353953,27.2318118 11.6267064,27.4023661 11.2003032,27.4023661 C10.7738999,27.4023661 10.365211,27.2318118 10.0682892,26.9317108 L0.468895522,17.3323171 C-0.156298507,16.707123 -0.156298507,15.6934832 0.468895522,15.0682892 C1.09408955,14.4430952 2.10772935,14.4430952 2.73297346,15.0683393 L11.200329,23.5371945 L29.2670767,5.46889549 Z"></path></g></svg>
                                            </div>
                                        </div>

                                        <p class="check_text">On Sale</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="filter_small_area">
                        <div class="filter_small_inner">
                            <div class="filter_small_inner_wrapper">
                                <button class="filter_small_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="MobileFiltersstyles__IconFilter-sc-__sc-14qri98-12 bLtbKs"><title></title><defs><filter id="nyhqpms1fa"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g><g><g filter="url(#nyhqpms1fa)" transform="translate(-247 -958) translate(231 944) translate(16 12)"><g><path stroke="currentColor" stroke-width="1.5" d="M7.333 5.667H18m-16 0h2.667M5.167 3h1.666c.276 0 .5.224.5.5v4.333c0 .276-.224.5-.5.5H5.167c-.276 0-.5-.224-.5-.5V3.5c0-.276.224-.5.5-.5zm7.5 11.333H2m16 0h-2.667m-.5-2.666h-1.666c-.276 0-.5.224-.5.5V16.5c0 .276.224.5.5.5h1.666c.276 0 .5-.224.5-.5v-4.333c0-.276-.224-.5-.5-.5z" transform="translate(0 2)"></path></g></g></g></g></g></svg>
                                
                                    filter

                                    <span>1</span>
                                </button>

                                {/* <!-- // <div class="filter_nav_menu_area">
                                //    <div class="filter_nav_header">
                                //        <button class="back_btn">
                                //            <svg class="MobileFiltersstyles__StyledIconArrowLeft-sc-__sc-14qri98-2 ikXpck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Back</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                //        </button>
                                //
                                //        <h1 class="filter_nav_title">Brand</h1>
                                //    
                                //        <button class="button close_btn">
                                //            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="MobileFiltersstyles__StyledIconClose-sc-__sc-14qri98-5 ciZduX"><title>Close filters</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                //        </button>
                                //    </div>
                                //</div>  --> */}
                            </div>
                        </div>
                    </div>

                    <div class="tags">
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Art</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Kids</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Film</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Movie</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Music</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <div class="tag d-flex justify-content-between align-items-center">
                            <div class="text">
                                <span>Other / Rings</span>
                            </div>
                            <span class="cross iconify" data-icon="akar-icons:cross"></span>
                        </div>
                        <b class="clear">Clear All</b>
                    </div>

                    <div class="products">
                        {
                            allProducts.map((product, index) =>
                                <div class="product" key={index}>
                                    <div class="image">
                                        <div class="overlay">                             
                                        </div>
                                        <Link to="">
                                            <img src={product.img} alt=""/>
                                        </Link>
                                    </div>
                                    <div class="price">
                                        <b class="old-price">{product.delPrice && "$"}{product?.delPrice}</b>
                                        <b class="new-price">{"$"}{product.price}</b>
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

export default AllProduct;