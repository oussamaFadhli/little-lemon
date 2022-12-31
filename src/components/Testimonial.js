import React from 'react';
import customer_one from "../images/customer_one.jpg";
import customer_two from "../images/customer_two.jpg";
import customer_three from "../images/customer_three.jpg";


const Testimonial = () => {
    return (
        <>
        <div className="row" id="testimoniol">
            <h1 className="section_title">What customers say for us.</h1>
            <div id="testimonial_carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat, quo ipsum quia
                        </h2>
                        <img className="testimonial_image" src={customer_one} alt="customer_one" />
                        <p>Joshep Smith, Fort Collins</p>
                    </div>
                    <div className="carousel-item">
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_two} alt="customer_two" />
                        <p>Rebeca Farmer, New York</p>
                    </div>
                    <div className="carousel-item">
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_three} alt="customer_three" />
                        <p>Roshan Shrestha, San Fransico</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonial_carousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonial_carousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        </>
    );
};

export default Testimonial;
