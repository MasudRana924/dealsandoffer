import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Banner.css'
import img from '../../../Imges/offer.webp'
import img2 from '../../../Imges/offer2.webp'
import img3 from '../../../Imges/offer3.webp'
import img4 from '../../../Imges/offer4.webp'
import img5 from '../../../Imges/offer5.webp'
import img6 from '../../../Imges/offer6.webp'

const Banner = () => {
    return (
        <Container fluid >
            <Row xs="1" md="2">
                <Col md="3">
                    <div className="banner-card">
                        <p className="banner-title">Footwear</p>
                        <hr  className="banner-hr"/>
                        <p className="banner-text">Apex</p>
                        <p className="banner-text">Bata</p>
                        <p className="banner-text">Lotto</p>
                        <p className="banner-title-two">Fashion</p>
                        <hr  className="banner-hr"/>
                        <p className="banner-text">Yellow</p>
                        <p className="banner-text">Richman</p>
                        <p className="banner-text">Catseye</p>
                        <p className="banner-text">Zara</p>
                        <p className="banner-text">Easy</p>

                        <p className="banner-title-two">Grocery</p>
                        <hr  className="banner-hr"/>
                        <p className="banner-text">Chaldal</p>
                        <p className="banner-text">Daraz</p>
                        <p className="banner-text">Ajker deal</p>
                    </div>
                </Col>
                <Col md="9">

                    <Carousel className="carousel-section">
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>This is the first slide!</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img5}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img6}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>


        </Container>
    );
};

export default Banner;