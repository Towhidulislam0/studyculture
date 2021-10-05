import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/studyculture.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} style={{ height: "3rem", width: "auto" }} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item pe-3 nav-btn-custom">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item pe-3 nav-btn-custom">
                            <Link to="/services" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item pe-3 nav-btn-custom">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item pe-3 nav-btn-custom">
                            <Link to="/login" className="nav-link"><span className="fw-bolder fs-3 text-warning"><i class="fas fa-user-circle"></i></span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;