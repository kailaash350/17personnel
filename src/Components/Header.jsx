import React from 'react'
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <div className="main-header">

                <h1 className="header-logo">
                <img src="http://flexbox.ninja/assets/images/logo.svg" width="170" height="95" alt="Flexbox.ninja"/>
                </h1>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <Link to ="/">
                        <li>Home</li>
                        </Link>
                        <Link to="/login">
                        <li>Login</li>
                        </Link>
                        <Link to="/register">
                        <li>Register</li>
                        </Link>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header
