import React from 'react';
import footer_img from "../images/logo.png"

const Footer = () => {
    return (
        <>
            <section className="footer-section" id="footer">
                <img  className="footer-image" src={footer_img} alt="about one" />
                <div className="row">
                    {/* <div className="col-lg-3 footer-logo">
                        <img  className="footer-image" src={footer_img} alt="about one" />
                    </div> */}
                    <div className="col-lg-4 footer-nav">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservation</p>
                        <p>Order Online</p>
                    </div>
                    <div className="col-lg-4 footer-contact">
                        <h3>Contact</h3>
                        <p>950 Everest Way, Suite#120</p>
                        <p>Fort Collins, CO, 80020</p>
                    </div>
                    <div className="col-lg-4 social-media">
                        <h3>Social-Media</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                        <p>Trip Advisor</p>
                    </div>
                </div>
                <p>Copy Rights &copy; 2022 Little Lemon | All Right Reserved.</p>
            </section>
        </>
    );
};

export default Footer;
