import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand navbar-logo m-2 ms-5" to="/" exact>Little Lemon</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto me-5">
                        <li className="nav-item active">
                            <NavLink className="nav-link fs-5 m-2" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-2" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-2" to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-2" to="/reservation">Reservation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-2" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-2" to="/signup">SignUp</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
