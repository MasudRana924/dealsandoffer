import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faHome, faSignInAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';




const Footer = () => {
    const apple = <FontAwesomeIcon icon={faApple} className="apple-icon " />
    const playstore = <FontAwesomeIcon icon={faGooglePlay}
        className="play-icon " />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt}
        className="map-icon" />
    const mail = <FontAwesomeIcon icon={faEnvelope}
        className="mail-icon" />
    const home = <FontAwesomeIcon icon={faHome}
        className="home-icon" />
    const signin = <FontAwesomeIcon icon={faSignInAlt}
        className="home-icon" />
    const usericon = <FontAwesomeIcon icon={faUserAlt}
        className="home-icon" />



    return (
        <Container fluid className="mt-5 pt-5  pb-5">
            <div className="footer-section">
                <Row xs="4" >
                    <Col>
                        <Link to="/" className="text-decoration-none">
                            <span>{home}</span>
                            <p className="footer-text">Home</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/signup" className="text-decoration-none">
                            <span>{signin}</span>
                            <p className="footer-text">SignUp</p>
                        </Link>
                    </Col>
                    <Col>

                        <Link to="/login" className="text-decoration-none">
                            <span>{signin}</span>

                            <p className="footer-text">Login</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/dashboard" className="text-decoration-none">
                            <span>{usericon}</span>
                            <p className="footer-text" >Account</p>
                        </Link>
                    </Col>
                </Row>

            </div>


        </Container>

    );
};

export default Footer;