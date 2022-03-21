import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cart-icon" />
    return (
        <Container fluid>
            <div className="menu-bar">
                <div className="menubar-left">
                    <h1 className="logo">OffersBD</h1>
                </div>

                <div className="menubar-right" >
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a>
                        </li>
                        <li><a href="#">Offers <i class="fas fa-caret-down"></i></a>

                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="#">Daraz</a></li>
                                    <li><a href="#">Chaldal</a></li>
                                    <li><a href="#">Ajker Deal</a></li>
                                    <li><a href="#">Apex</a></li>
                                    <li><a href="#">Bata</a></li>
                                    <li><a href="#">Lotto</a></li>
                                    <li><a href="#">Yellow</a></li>
                                    <li><a href="#">Richman</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Brand <i class="fas fa-caret-down"></i></a>

                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="#">Apex</a></li>
                                    <li><a href="#">Bata</a></li>
                                    <li><a href="#">Lotto</a></li>
                                    <li><a href="#">Yellow</a></li>
                                    <li><a href="#">Richman</a></li>
                                    <li><a href="#">Cats Eye</a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="menubar-Cart">
                    <div>
                        <span className="search-icon">{search}</span>
                    <input type="text" placeholder=" search here " />
                    </div>
           
                    <Link to="/cart">
                        <button className=" cart-btn">
                            {Cart}
                        </button>
                        <span className="item-cart"> 0</span>
                    </Link>

                    <Link to="/cart">
                        <button className="login-btn">
                         Deals with us - login
                        </button>
                        
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Header;