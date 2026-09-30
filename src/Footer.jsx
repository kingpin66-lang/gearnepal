import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
function Footer() {
    return (
        <>
            <footer className='bg2 py-4 text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 gap-2 align-items-center">
                            <h6 className='fw-bold'>Get In Touch</h6>
                            <p>help@nepalgear.com</p>
                            <p>Our business hours are 9 am to 5 pm,Time Monday to Friday. </p>
                            <button className='btn btn-secondary px-3 py-1'>SUPPORT</button>
                            <h6 className='py-2'>FOLLOW US ON</h6>
                            <FaFacebook /> <FaInstagram /> <FaWhatsapp />

                        </div>
                        <div className="col-lg-5 offset-lg-3">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className='fw-bold'>Customer Support</h5>
                                    <ul className='p-0'>
                                        <li>Help Center</li>
                                        <li>Return & Exchange Policy</li>
                                        <li>Product Warranty</li>
                                        <li>Shipping Info</li>
                                        <li>Deals and Discounts</li>
                                        <li>Backpacking Checklist</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h5 className='fw-bold'>About Us</h5>
                                    <ul className='p-0'>
                                        <li>About</li>
                                        <li> Articles</li>
                                        <li>  Testimonials</li>
                                        <li> Terms of Service</li>
                                        <li>  Privacy Policy</li>
                                        <li> Jobs</li>
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </div >
                    <div className='text-center'>
                        <h6>WE ACCEPT</h6>
                     <img src="https://yt3.ggpht.com/a/AGF-l79duhWVXgvs-RvD32GZv9sf0wHKlzBekUt9aQ=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
                     <img  className='ms-2' src="https://play-lh.googleusercontent.com/Xh_OlrdkF1UnGCnMN__4z-yXffBAEl0eUDeVDPr4UthOERV4Fll9S-TozSfnlXDFzw" alt="" />

                    </div>
                </div >
            </footer >
        </>
    )
}

export default Footer
