import React from 'react';
import about_01 from "../images/about_01.jpg";
import about_02 from "../images/about_02.webp";


const About = () => {
    return (
        <>
            <section className="about-section" id="about">
                <div className="row">
                    <div className="col-lg-6 about-images">
                        {/* <img  className="about-image one" src={about_01} alt="about one" />
                        <img  className="about-image two" src={about_02} alt="about two" /> */}
                    </div>
                    <div className="col-lg-6 about-details">
                        <h3>Little Lemon</h3>
                        <h4>Fort Collins</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel, voluptate quod
                        dignissimos sapiente maxime expedita consequuntur labore quo cum ex laboriosam 
                        dignissimos sapiente maxime expedita consequuntur labore quo cum ex laboriosam 
                        incidunt officiis corrupti fugit in dolores ullam.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;