import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="register">
            <div className="form-two"  id="my-login">
                <form>
                    <h2>Register!</h2>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" required/>
                        </div>
                        <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;