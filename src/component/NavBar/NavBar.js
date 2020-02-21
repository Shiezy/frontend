import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    let token = localStorage.getItem("token");
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Scheduler
            </Link>
            <Link className="navbar-brand" to="/login">
                Login
            </Link>

            <Link className="navbar-brand" to="/register">
                Register User
            </Link>
        </nav>
    );
}

export default NavBar;