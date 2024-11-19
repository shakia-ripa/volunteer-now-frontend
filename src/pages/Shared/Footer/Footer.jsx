import React from 'react';
import { FaFacebookF,FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-lime-100 text-base-content p-10">
                <div>
                    <h2 className="text-xl font-semibold">Follow Us</h2>
                    <p>Join us on social media</p>
                    <div className='flex justify-between items-center gap-3 mt-3'>
                        <FaFacebookF  className='w-5 h-5'/>
                        <FaInstagram  className='w-5 h-5'/>
                        <FaXTwitter  className='w-5 h-5'/>
                    </div>
                </div>
                <form>
                    <h6 className="text-xl font-semibold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;