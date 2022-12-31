import React from 'react';


const Reservation = () => {
    return (
        <>
            <section className="reservation" id="myTable">
                <div className="row">
                    <div className="col-lg-6 table-image"></div>
                    <div className="col-lg-6 table-form">
                        <h2 style={{textAlign:"center"}}>Book a Table!</h2>
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationDefault01">First name</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationDefault02">Last name</label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationDefaultUsername">Email</label>
                                    <input type="email" className="form-control" id="validationDefault03" placeholder="Email"  required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationDefault04">Table Size<span> <i className="fa-solid fa-utensils"></i></span></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>2 People</option>
                                        <option>4 People</option>
                                        <option>8 People</option>
                                        <option>15 People</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                <label for="validationDefault05">Date<span> <i className="fa-solid fa-calendar-days"></i></span></label>
                                <input type="date" className="form-control" id="validationDefault04" required />
                                </div>
                                <div className="col-md-3 mb-3">
                                <label for="validationDefault06">Time<span> <i className="fa-solid fa-clock"></i></span></label>
                                <input type="time" className="form-control" id="validationDefault05" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reservation;