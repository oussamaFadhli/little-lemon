import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Menu from './Menu';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="content">
                    <h3>Little Lemon</h3>
                    <h4>Fort Collins</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel, voluptate quod
                    dignissimos sapiente maxime expedita consequuntur labore quo cum ex laboriosam 
                    incidunt officiis corrupti fugit in dolores ullam numquam?</p>
                    <NavLink className="btn btn-outline-success text-white" to="/reservation">Reserve Table</NavLink>
                </div>
            </section>
            <Menu />
            <Testimonial />
            <About />
        </>
    );
};

export default Home;
