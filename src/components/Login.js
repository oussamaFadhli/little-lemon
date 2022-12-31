import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="signin">
            <div className="form-one" id="register">
                <form>
                    <h2>Sign In!</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p>Don't have an account?  <NavLink to="/signup">Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;