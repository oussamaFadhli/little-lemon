import React from 'react';
import { NavLink } from 'react-router-dom';
import special_one from "../images/special_05.jpg";
import special_two from "../images/special_02.jpg";
import special_three from "../images/special_03.jpg";

const Menu = () => {
    return (
        <>
        <section className="menu-item" id="menu">
            <div className="row first">
                <div className="col-lg-6 special">
                    <h1>Specials</h1>
                </div>
                <div className="col-lg-6 order-btn">
                    <NavLink className="btn btn-success" to="/order">Order Online</NavLink>
                </div>
            </div>
            <div className="row" id="special-menu">
                <div className="col-md-4 card-details">
                    <div className="card" style={{width: "15rem"}}>
                        <img className="card-img-top" src={special_one} alt="special one" height="160px"/>
                        <div className="card-body">
                            <div className="card-title fw-semibold mb-3">Pizza Siciliana</div>
                            <h6 className="card-subtitle mb-3 text-muted ">$14.99</h6>
                            <p className="card-text">Sicilian pizza is pizza prepared in a manner that originated in Sicily, Italy. Sicilian pizza is also known as sfincione or focaccia with toppings. This type of pizza became a popular dish</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 card-details">
                    <div className="card" style={{width: "15rem"}}>
                        <img className="card-img-top" src={special_two} alt="special two" />
                        <div className="card-body">
                            <div className="card-title fw-semibold mb-3">Bistecca Alla</div>
                            <h6 className="card-subtitle mb-3 text-muted ">$23.99</h6>
                            <p className="card-text">The bistecca alla fiorentina (beefsteak Florentine style) is an Italian steak made of young steer (vitellone) or heifer (scottona) that, combined with the specific preparation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 card-details">
                    <div className="card" style={{width: "15rem"}}>
                        <img className="card-img-top" src={special_three} alt="special three" />
                        <div className="card-body">
                            <div className="card-title fw-semibold mb-3">Spaghetti Meatball</div>
                            <h6 className="card-subtitle mb-3 text-muted ">$13.99</h6>
                            <p className="card-text">Polpette alla Napoletana are Italian meatballs in a simple tomato sauce, and they’re the closest recipe you’ll find to “spaghetti with meatballs” in traditional Italian cuisine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Menu;