import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {
    const [showDropdown, setDropdown] = useState(false);
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const { getTotalCartItems } = useContext(HomeContext);
    const navbarRef = useRef(null);

    const handleNavbarToggle = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const handleLinkClick = () => {
        setNavbarOpen(false);
    };

    const handleDropdownHover = () => {
        setDropdown(true);
    };

    const handleDropdownLeave = () => {
        setDropdown(false);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setNavbarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section id="nav-bar" ref={navbarRef}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                    </div>
                </Link>
                
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Products" onClick={handleLinkClick}>PRODUCT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" onClick={handleLinkClick}>ABOUT US</Link>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={showDropdown}>
                                SHOPS
                            </Link>
                            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/Shop" onClick={handleLinkClick}>Shop</Link>
                                <div className="dropdown-divider"></div>
                                {localStorage.getItem('auth-token')
                                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log Out</button>
                            :<Link className="dropdown-item" to="/LoginSignup" onClick={handleLinkClick}>LoginSignup</Link>}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" onClick={handleLinkClick}>CONTACT US</Link>
                        </li>
                        <li className="nav-item" style={{display: 'none'}}>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2 search"
                                    name="search_bar"
                                    type="search"
                                    placeholder="Search the laptop models & Products"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div className="nav-cart">
                    <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavbarToggle}
                >
                    <span className="navbar-toggler-icon"><i className="fa fa-2x fa-bars" aria-hidden="true"></i></span>
                </button>
            </nav>
        </section>
    );
};

export default Navbar;
