import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <section class="sign-in">
            <div class="container">
                <div class="the-form">
                    <div class="title">
                        <h2>Login to Continue</h2>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Username or email address*"/>
                        <input type="password" placeholder="Password*"/>
                        <Link to="" class="forgot">Forgot Password?</Link>
                        <input type="submit" value="Login"/>
                    </form>
                    <button class="facebook">Facebook</button>
                    <p class="or">or</p>
                    <button class="sign-up">Sign up</button>
                </div>
            </div>
    </section>
    );
};

export default Signin;