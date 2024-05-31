import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';


function Header({ countCard,fav }) {
    const c1 = useSelector(state => state.counetr)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));



    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={c1.count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>

                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={fav.length} color="secondary">
                            <FavoriteIcon />
                        </StyledBadge>

                    </IconButton>



                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        <a href="#" className="cart">

                            <i className="bi bi-cart" /> <span>0</span></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto" to="/">Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/departments">Departments</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/doctore">Doctors</NavLink></li>
                            <li><NavLink className="nav-link scrollto " to="/medisin">Medisin</NavLink></li>
                            <li><NavLink className="nav-link scrollto " to="/about">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto " to="/counter">Counter</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/form">Form</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/display">Display</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to="/appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>
                    <NavLink to="/auth" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                </div>
            </header>
        </div>


    );

}

Header.propTypes = {

};

export default Header;