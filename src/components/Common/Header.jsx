import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menswear, setMenswear] = useState(false);
    const [womenswear, setWomenswear] = useState(false);
    const [juewellery, setJewellery] = useState(false);
    const [beauty, setBeauty] = useState(false);
    const [more, setMore] = useState(false);
    const [brands, setBrands] = useState(false);

    const sidebar = () => {
        const open = document.getElementById("sidebar_area");
        open.style.display = "flex";
    }
    const closeBar = () => {
        const open = document.getElementById("sidebar_area");
        open.style.display = "none";
    }

    return (
        <header id="topbar">
            <div class="header">
                <div class="container-fluid">
                    <div class="header_area">
                        <div class="toggle_nav">
                            <button type="button" onClick={() => sidebar()} class="toggle_nav_button">
                                <svg class="toggle_nav_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Menu</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5 9.5L25 9.5M5 15.5L25 15.5M5 21.5L25 21.5"></path></g></svg>
                            </button>

                            <div id="sidebar_area">
                                <div class="sidebar_inner">
                                    <div class="sidebar_social_area">
                                        <div class="social_icon">
                                            <Link to="" class="social_link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="1 1 18 18"><title>Instagram</title><path fill-rule="evenodd" d="M17 15.367C17 16.3 16.3 17 15.367 17H4.633C3.7 17 3 16.3 3 15.367V4.633C3 3.7 3.7 3 4.633 3H15.25C16.3 3 17 3.7 17 4.633v10.734zm-3.85-8.05c-.233 0-.467-.234-.35-.467V4.983c0-.233.117-.35.35-.35h1.867c.116 0 .35.117.35.35v1.984c0 .233-.117.35-.35.35H13.15zM14.317 10c0-.35-.117-.7-.234-1.167h1.284V14.9c0 .233-.117.35-.35.35H4.983c-.116 0-.35-.117-.35-.35V8.833H5.8c-.117.35-.117.817-.117 1.167 0 2.333 1.984 4.2 4.317 4.2 2.45 0 4.317-1.867 4.317-4.2zM10 12.683a2.683 2.683 0 1 1 0-5.366 2.683 2.683 0 0 1 0 5.366z"></path></svg></Link>

                                            <Link to="" class="social_link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 3 15 15"><title>Twitter</title><path fill-rule="evenodd" d="M15.575 8.128c0-.121-.002-.242-.008-.362A5.767 5.767 0 0 0 17 6.315a5.844 5.844 0 0 1-1.65.44 2.826 2.826 0 0 0 1.263-1.55 5.843 5.843 0 0 1-1.823.68A2.903 2.903 0 0 0 12.693 5C11.107 5 9.82 6.255 9.82 7.803c0 .22.026.434.075.639a8.223 8.223 0 0 1-5.92-2.929 2.742 2.742 0 0 0-.39 1.41c0 .972.508 1.83 1.279 2.332a2.905 2.905 0 0 1-1.301-.35l-.001.035c0 1.358.99 2.491 2.304 2.748a2.947 2.947 0 0 1-1.297.049c.366 1.113 1.426 1.924 2.684 1.946a5.855 5.855 0 0 1-3.568 1.2c-.232 0-.46-.013-.685-.039a8.278 8.278 0 0 0 4.403 1.26c5.283 0 8.172-4.272 8.172-7.976z"></path></svg></Link>

                                            <Link to="" class="social_link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="1 1 18 18"><title>Facebook</title><path fill-rule="evenodd" d="M10.72 17v-6.386h2.143l.32-2.489H10.72V6.536c0-.72.2-1.211 1.233-1.211l1.318-.001V3.098C13.042 3.068 12.26 3 11.35 3c-1.9 0-3.201 1.16-3.201 3.29v1.835H6v2.489h2.149V17h2.57z"></path></svg></Link>
                                        </div>

                                        <button class="close_btn">
                                            <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                        </button>
                                    </div>

                                    <nav class="sidebar_nav">
                                        <ul>
                                            <li class="sidebar_item">
                                                <Link to="" class="sidebar_link">Login</Link>
                                            </li>

                                            <li class="sidebar_item">
                                                <Link to="" class="sidebar_link">Sign up</Link>
                                            </li>

                                            <li class="sidebar_item">
                                                <Link to="" class="sidebar_link">Get the App</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav class="sidebar_navbar">
                                        <h3 class="side_navbar_title">Browse Depop</h3>
                                    
                                        <ul class="side_navbar_wrapper1">
                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn" onClick={() => !menswear ? setMenswear(true) : setMenswear(false)}>
                                                    <span>Menswear</span>

                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>
                                            
                                                {menswear &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => menswear && setMenswear(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => menswear && setMenswear(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>Menswear</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden"></span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Tops</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Bottoms</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Underwear</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Outerwear</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Accessories</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Shoes</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>

                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn"  onClick={() => !menswear ? setWomenswear(true) : setWomenswear(false)}>
                                                    <span>Womenswear</span>

                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>

                                                {womenswear &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => womenswear && setWomenswear(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => womenswear && setWomenswear(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>Womenswear</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden"></span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Tops</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Bottoms</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Dresses</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Lingerie</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Outerwear</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Accessories</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Shoes</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Suits</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>

                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn" onClick={() => !juewellery ? setJewellery(true) : setJewellery(false)}>
                                                    <span>Jewellery</span>

                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>

                                                {juewellery &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => juewellery && setJewellery(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => juewellery && setJewellery(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>Juewellery</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden"></span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Necklaces</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Pins</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Body jewelry</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Bracelets</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Earrings</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Rings</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Watches</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Others</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>

                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn" onClick={() => !beauty ? setBeauty(true) : setBeauty(false)}>
                                                    <span>Beauty</span>

                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>

                                                {beauty &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => beauty && setBeauty(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => beauty && setBeauty(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>Beauty</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden"></span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Makeup</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Tools & Brushes</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Bath & Body</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Fragrance</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Hair</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Skincare</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Other</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>

                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn" onClick={() => !more ? setMore(true) : setMore(false)}>
                                                    <span>More</span>

                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>

                                                {more &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => more && setMore(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => more && setMore(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>More</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden"></span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Art</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Home</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Kids</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Sports equipment</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Transportation</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Other</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Books & magazines</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Film</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Music</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Face masks and coverings</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                        </ul>

                                        <ul class="side_navbar_wrapper2">
                                            <li class="side_navbar_item">
                                                <button class="side_nabvar_btn" onClick={() => !brands ? setBrands(true) : setBrands(false)}>
                                                    <span>Brands</span>
                                                    <span class="side_navbar_arrow">
                                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 17 17"><title>Right Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797"></path></g></svg>
                                                    </span>
                                                </button>

                                                {brands &&
                                                    <div className="sidebar_submenu_area">
                                                        <div className="sidebar_submenu_inner">
                                                            <div className="sidebar_submenu_top">
                                                                <button className="right_arrow" onClick={() => brands && setBrands(false)}>
                                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" data-testid="iconArrowLeft"><title data-testid="iconArrowLeft__title">Left Arrow</title><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M0 6.75L12 6.75M12 6.75L5.953.703M12 6.75L5.953 12.797" transform="matrix(-1 0 0 1 13 .25)"></path></g></svg>
                                                                </button>

                                                                <button class="sub_close_btn" onClick={() => brands && setBrands(false)}>
                                                                    <svg onClick={() => closeBar()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class=""><title>Close</title><path d="M7.49586652,6.73356737 L13.4044936,0.824940276 C13.6160283,0.620633208 13.9522734,0.623555086 14.1602257,0.831507383 C14.3681779,1.03945968 14.3710998,1.37570471 14.1667928,1.58723943 L8.25816567,7.49586652 L14.2940223,13.5317232 C14.4983294,13.7432579 14.4954075,14.0795029 14.2874552,14.2874552 C14.0795029,14.4954075 13.7432579,14.4983294 13.5317232,14.2940223 L7.49586652,8.25816567 L1.58723943,14.1667928 C1.45188309,14.3069375 1.25144078,14.3631428 1.06295265,14.3138061 C0.874464514,14.2644693 0.727263707,14.1172685 0.677926972,13.9287804 C0.628590237,13.7402923 0.68479552,13.5398499 0.824940276,13.4044936 L6.73356737,7.49586652 L0.824940276,1.58723943 C0.68479552,1.45188309 0.628590237,1.25144078 0.677926972,1.06295265 C0.727263707,0.874464514 0.874464514,0.727263707 1.06295265,0.677926972 C1.25144078,0.628590237 1.45188309,0.68479552 1.58723943,0.824940276 L7.49586652,6.73356737 Z"></path></svg>
                                                                </button>
                                                            </div>

                                                            <div className="sidebar_submenu_content">
                                                                <Link to="" className='sidebar_submenu_title'>Brands</Link>
                                                            
                                                                <div className="submenu_content_wrapper">
                                                                    <span className="submenu_hidden">Popular Brands</span>

                                                                    <ul className="submenu_content_info">
                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Nike</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Adidas</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Zara</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Brandy Melville</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>Levi's</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link'>The North Face</Link>
                                                                        </li>

                                                                        <li className="submenu_single_content">
                                                                            <Link to="" className='submenu_single_content_link last'>Browse all brands</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav class="footer_nav">
                                        <h3 class="footer_nav_title">More from Depop</h3>

                                        <ul class="footer_nav_inner">
                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Sustainability</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Blog</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">About</Link>
                                            </li>


                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Sell on Depop</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Jobs</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Spaces</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">News</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Support</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Terms</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Privacy</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Safety</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Sitemap</Link>
                                            </li>

                                            <li class="footer_nav_item">
                                                <Link to="" class="footer_nav_link">Cookies</Link>
                                            </li>

                                            
                                        </ul>
                                    </nav>

                                    <div class="select_wrapper">
                                        <div class="language_area">
                                            <div class="language_inner">
                                                <label class="language_title" for="">Select Language</label>
                                            
                                                <div class="language_wrapper">
                                                    <select name="" id="" class="language_info">
                                                        <option value="en">English</option>
                                                        <option value="fr">French</option>
                                                        <option value="de">German</option>
                                                        <option value="it">Italian</option>
                                                    </select>

                                                    <div class="down_arrow">
                                                        <div class="down_arrow_inner">
                                                            <svg viewBox="0 0 20 20"><title>Chevron</title><path fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="country_area">
                                            <label for="" class="county_title">Select Location</label>
                                            
                                            <div class="country_wrapper">
                                                <select name="" id="" class="country_info">
                                                    <option value="au">Australia</option>
                                                    <option value="de">Germany</option>
                                                    <option value="fr">France</option>
                                                    <option value="gb">United Kingdom</option>
                                                    <option value="it">Italy</option>
                                                    <option value="us">United States</option>
                                                </select>
                                                
                                                <div class="down_arrow">
                                                    <div class="down_arrow_inner">
                                                        <svg viewBox="0 0 20 20"><title>Chevron</title><path fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/" class="company_logo">
                            <span class="logo_info"><svg viewBox="0 0 1295 333"><title>Depop</title><path fill-rule="nonzero" d="M0 167.9c0-54.5 38.884-88 101.06-88h64.373V0H246v251H100.76C38.883 251 0 218.8 0 167.9zm85-2.7c0 20.9 12.653 31.8 36.96 31.8H165v-64h-42.64C98.05 133 85 144 85 165.2zm682-.1c0 54.5-38.884 88-101.06 88h-64.373V333H521V82h145.24C728.117 82 767 114.2 767 165.1zm-85 2.7c0-20.9-12.668-31.8-37.007-31.8H602v64h42.693c24.34 0 37.307-11 37.307-32.2zm613-2.7c0 54.5-38.884 88-101.06 88h-64.373V333H1049V82h145.24c61.876 0 100.76 32.2 100.76 83.1zm-85 2.7c0-20.9-12.668-31.8-37.007-31.8H1130v64h42.693c24.34 0 37.307-11 37.307-32.2zm-419-1.2c0-60.996 48.8-93.6 116-93.6s116 32.604 116 93.6c0 60.993-48.8 94.4-116 94.4-67.2-.1-116-33.407-116-94.4zm153-.95c0-29.733-14.9-44.65-37.5-44.65S869 135.917 869 165.65c0 29.332 14.9 45.35 37.5 45.35 22.7-.1 37.5-16.018 37.5-45.35zm-450 4.262C494 108.918 454.77 72 383.898 72 315.82 72 272 108.918 272 166.702 272 225.19 315.422 260 387.79 260c45.52 0 82.253-17.054 101.618-44.743l-57.696-21.067c-9.982 10.935-25.055 16.954-40.926 16.954-23.857 0-40.427-9.63-44.72-25.983-.3-1.102-.5-2.106-.698-3.31H494v-11.938zM346 144c1.902-19.814 15.62-32 39.45-32 23.832 0 37.55 12.88 37.55 32h-77z"></path></svg></span>
                        </Link>

                        <div class="search_area">
                            <div class="search_wrapper">
                                <form action="" class="search_form">
                                    <svg class="search_icon" viewBox="0 0 16 16"><title>Search</title><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7.504 12.874c2.966 0 5.37-2.404 5.37-5.37s-2.404-5.37-5.37-5.37-5.37 2.404-5.37 5.37 2.404 5.37 5.37 5.37zm6.363.993l-2.522-2.522" ></path></svg>
                                
                                    <input placeholder="Search for items, brands, or styles…" type="text" name="q" class="search_input" value=""/>

                                    <div class="search_suggestions">
                                        <div class="search_tag">
                                            <span class="search_tag_info">Popular</span>
                                        </div>

                                        <ul class="search_value">
                                            <li>
                                                <div class="search_value_wrapper">
                                                    <p>vintage</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="search_value_wrapper">
                                                    <p>urban outfitters</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="search_value_wrapper">
                                                    <p>corset top</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="search_value_wrapper">
                                                    <p>princess polly</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="search_value_wrapper">
                                                    <p>north face puffer</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <nav class="main_navigation">
                            <ul class="navigation_wrapper">
                                <li class="search_wrapper">
                                    <button type="button" class="search_btn">
                                        <svg class="search_icon" viewBox="0 0 16 16"><title>Search</title><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7.504 12.874c2.966 0 5.37-2.404 5.37-5.37s-2.404-5.37-5.37-5.37-5.37 2.404-5.37 5.37 2.404 5.37 5.37 5.37zm6.363.993l-2.522-2.522"></path></svg>
                                    </button>
                                </li>
                                
                                <li class="navigation_item">
                                    <Link to="/" class="navigation_link">
                                        <div class="love_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Likes</title><path fill="none" stroke="currentColor" fill-rule="evenodd" stroke-width="1.5" d="M24.278 15.963L15 25.267l-9.278-9.304c-2.563-2.569-2.563-6.734 0-9.303 2.562-2.569 6.716-2.569 9.278 0 2.562-2.569 6.716-2.569 9.278 0 2.563 2.57 2.563 6.734 0 9.303z"></path></svg>
                                        </div>
                                    </Link>
                                </li>

                                <li class="navigation_item">
                                    <button class="signUp_btn"><span class="btn_info">Sign Up</span></button>
                                </li>

                                <li class="navigation_item">
                                    <Link to="/" class="navigation_link login_btn">Login</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <nav class="navbar">
                    <ul class="nav_menu">
                        <li class="nav_item">
                            <button type="button">Menswear</button>

                            <div class="nav_dropdown">
                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Show All</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Tops</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Bottoms</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Underware</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Outerware</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Accessories</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Shoes</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav_item">
                            <button type="button">Womenswear</button>

                            <div class="nav_dropdown">
                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Show All</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Tops</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Bottoms</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Dresses</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Lingerie</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Outerwere</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Accessories</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Shoes</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Suits</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav_item">
                            <button type="button">Jewellery</button>

                            <div class="nav_dropdown">
                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Show All</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Necklaces</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Pins</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Body jewelry</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Bracelets</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Earrings</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Rings</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Shoes</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Suits</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav_item">
                            <button type="button">Beauty</button>

                            <div class="nav_dropdown">
                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Show All</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Makeup</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Tools & Brushes</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Bath & Body</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Fragrance</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Hair</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Skincare</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Other</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav_item">
                            <button type="button">More</button>

                            <div class="nav_dropdown">
                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Art</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Home</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Kids</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Sports equipment</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Transportation</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Other</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Books & magazines</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Film</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Music</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Face masks and coverings</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>

                        <li class="nav_item">
                            <button type="button">Brands</button>

                            <div class="nav_dropdown">
                                <span class="popular">Popular Brands</span>

                                <ul class="drop_menu">
                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Nike</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Adidas</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Zara</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Brandy Melville</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">Levi's</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link">The North Face</Link>
                                    </li>

                                    <li class="drop_item">
                                        <Link to="/" class="drop_link fw-bold">Browse all brands</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;