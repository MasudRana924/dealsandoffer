import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Shoes.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Shoes = () => {
    const arrow = <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('./apexshoes.json')
            .then(res => res.json())
            .then(data => {
                setShoes(data)
            })
    }, [])
    let Rsettings = {

        infinite: false,
        dots: true,
        speed: 1000,
        slidesToShow: 4,
        autoplay:false,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <Container fluid className="mt-5">
            <Row xs="2" md="2">
                <Col md="3">
                    <div className="shoes-left-sidebar">
                        <h2>Shoes </h2>
                        <hr className="shoes-hr" />
                        <p>{arrow} Apex shoes</p>
                        <p>{arrow} Bata shoes</p>
                        <p>{arrow} Lotto shoes</p>
                        <p> {arrow} Bay shoes</p>
                    </div>

                </Col>
                <Col md="8" >
                    <Slider {...Rsettings}>
                        {
                            shoes.map(shoe => (

                                <div>
                                    <div className="card-shoes">
                                    <p className="stock">{shoe.stock}</p>
                                        <img src={shoe.img} className="w-75 mx-auto review-image" alt="" />
                                        <h5 className="card-title">{shoe.name}</h5>
                                        <p>{shoe.price}TK</p>
                                        <a href={shoe.url} target="_blank" rel="noopener noreferrer">
                                            <button className="btn-cart">Purchase</button>
                                        </a>

                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </Col>
            </Row>


        </Container>
    );
};

export default Shoes;