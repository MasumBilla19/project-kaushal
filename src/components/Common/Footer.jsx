import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer_area">
            <div className="container-fluid">
                <div className="row px-4 align-items-center">
                    <div className="col-md-8">
                        <nav className="footer_navigation">
                            <ul className="secondary_navigation">
                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Sustainability</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Blog</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">About</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Sell on Depop</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Jobs</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Spaces</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">News</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Support</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Terms</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Privacy</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Safety</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Sitemap</Link>
                                </li>

                                <li className="navigation_item">
                                    <Link to="/" className="navigation_link">Cookies</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-4">
                        <div className="footer_social">
                            <div className="social_icon">
                                <Link to="/" className="social_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="1 1 18 18"><title>Instagram</title><path fill-rule="evenodd" d="M17 15.367C17 16.3 16.3 17 15.367 17H4.633C3.7 17 3 16.3 3 15.367V4.633C3 3.7 3.7 3 4.633 3H15.25C16.3 3 17 3.7 17 4.633v10.734zm-3.85-8.05c-.233 0-.467-.234-.35-.467V4.983c0-.233.117-.35.35-.35h1.867c.116 0 .35.117.35.35v1.984c0 .233-.117.35-.35.35H13.15zM14.317 10c0-.35-.117-.7-.234-1.167h1.284V14.9c0 .233-.117.35-.35.35H4.983c-.116 0-.35-.117-.35-.35V8.833H5.8c-.117.35-.117.817-.117 1.167 0 2.333 1.984 4.2 4.317 4.2 2.45 0 4.317-1.867 4.317-4.2zM10 12.683a2.683 2.683 0 1 1 0-5.366 2.683 2.683 0 0 1 0 5.366z"></path></svg>
                                </Link>
                            
                                <Link to="/" className="social_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 3 15 15"><title>Twitter</title><path fill-rule="evenodd" d="M15.575 8.128c0-.121-.002-.242-.008-.362A5.767 5.767 0 0 0 17 6.315a5.844 5.844 0 0 1-1.65.44 2.826 2.826 0 0 0 1.263-1.55 5.843 5.843 0 0 1-1.823.68A2.903 2.903 0 0 0 12.693 5C11.107 5 9.82 6.255 9.82 7.803c0 .22.026.434.075.639a8.223 8.223 0 0 1-5.92-2.929 2.742 2.742 0 0 0-.39 1.41c0 .972.508 1.83 1.279 2.332a2.905 2.905 0 0 1-1.301-.35l-.001.035c0 1.358.99 2.491 2.304 2.748a2.947 2.947 0 0 1-1.297.049c.366 1.113 1.426 1.924 2.684 1.946a5.855 5.855 0 0 1-3.568 1.2c-.232 0-.46-.013-.685-.039a8.278 8.278 0 0 0 4.403 1.26c5.283 0 8.172-4.272 8.172-7.976z"></path></svg>
                                </Link>
                            
                                <Link to="/" className="social_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="1 1 18 18"><title>Facebook</title><path fill-rule="evenodd" d="M10.72 17v-6.386h2.143l.32-2.489H10.72V6.536c0-.72.2-1.211 1.233-1.211l1.318-.001V3.098C13.042 3.068 12.26 3 11.35 3c-1.9 0-3.201 1.16-3.201 3.29v1.835H6v2.489h2.149V17h2.57z"></path></svg>
                                </Link>
                            </div>

                            <div className="location_area">
                                <div className="language">
                                    <select name="select_language" id="">
                                        <option value="en" selected>English</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="it">Italian</option>
                                    </select>
                                    <svg viewBox="0 0 20 20"><title>Open</title><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                </div>

                                <div className="country_wrapper">
                                    <div className="country">
                                        <select name="select_location" id="">
                                            <option value="au">Australia</option>
                                            <option value="au">Germany</option>
                                            <option value="au">France</option>
                                            <option selected value="au">United Kingdom</option>
                                            <option value="au">Italy</option>
                                            <option value="au">United States</option>
                                        </select>
                                        <svg viewBox="0 0 20 20"><title>Open</title><path stroke="currentColor" stroke-width="1" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.137 7.137a.469.469 0 0 1 .664 0l5.001 5.003 5.001-5.003a.469.469 0 0 1 .664.664l-5.333 5.334a.47.47 0 0 1-.664 0L4.137 7.8a.469.469 0 0 1 0-.664z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;