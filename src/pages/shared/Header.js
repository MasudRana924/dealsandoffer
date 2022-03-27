import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cart-icon" />
    const bar = <FontAwesomeIcon icon={faBars} className="cart" />
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputshow, setInputShow] = useState(false);
    return (
        <div>

            <Container fluid>
                <div className="menu-bar">
                    <div className="menubar-left">
                        <h1 className="logo">OffersBD</h1>
                    </div>

                    <div className="menubar-right" >
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            {/* <li><a href="#">About</a></li> */}
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                            <li><Link to="">Category</Link>

                                <div class="dropdown-menu">
                                    <ul>
                                        <li><Link to="/grocery">Grocery</Link></li>
                                        <li><Link to="/electronics">Electronics</Link></li>
                                        <li><Link to="/fashion">Fashion</Link></li>
                                        <li><Link to="/beauty">Beauty</Link></li>
                                        <li><Link to="/food">Food</Link></li>


                                    </ul>
                                </div>
                            </li>
                            <li><Link to="">Offers</Link>

                                <div class="dropdown-menu">
                                    <ul>
                                        <li><Link to="/daraz">Daraz</Link></li>
                                        <li><Link to="/chaldal">Chaldal</Link></li>
                                        <li><Link to="/apex">Apex</Link></li>
                                        <li><Link to="/bata">Bata</Link></li>
                                        <li><Link to="/yellow">Yellow</Link></li>


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

                        <Link to="/login">
                            <button className="login-btn">
                                Deals with us - login
                            </button>

                        </Link>
                    </div>
                </div>
            </Container>

            {/* for 480px device  */}
            <Container fluid className="header-section" >
                <Row className="header-section" xs="1">
                    <Col xs="12" className="d-flex">
                        <button className="bar-btn" onClick={handleShow}>
                            {bar}
                        </button>
                        <h2 className="header-title">OffersBd</h2>
                        <button className="search-btn" onClick={() => setInputShow(true)}>
                            {search}
                        </button>
                        <Link to="/cart">
                            <button className=" cart-btn">
                                {Cart}
                            </button>
                            <span className="item-cart"> 0</span>
                        </Link>


                        <Offcanvas placement="start" show={show} onHide={handleClose} className="w-50 mx-auto bg-dark ">
                            <Offcanvas.Header closeButton className="nav-header" >
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="mt-1">

                                <h2 className="footwear-title">Footwer</h2>
                                <hr className="hr" />
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Apex</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Bata</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Lotto</Link>
                                </p>

                                {/* fshion */}
                                <h2 className="footwear-title">Fashion</h2>
                                <hr className="hr" />
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Yellow</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Richman</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Zara</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Catseye</Link>
                                </p>
                                {/* grocery */}
                                <h2 className="footwear-title">Grocery</h2>
                                <hr className="hr" />
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Daraz</Link>
                                </p>
                                <p className="footwear-text">
                                    <Link to="/apex" className="footwear-link">Chaldal</Link>
                                </p>
                              
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    {
                        inputshow ? <div className="input-section" >
                            <input type="text" placeholder="Search a product" />
                        </div> : null
                    }

                </Row>
            </Container>
        </div >
    );
};

export default Header;