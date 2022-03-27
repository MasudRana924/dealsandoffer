import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Shoes.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shoe from './Shoe';

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

    return (
        <Container fluid className="mt-5">
             <div className="grocery-header">
                <div>
                    <h2 className="grocery-title">Shoes - Best Seller </h2>
                </div>
                <div className="grocery-brand-section">
                   <p className="grocery-brand">Apex</p>
                   <p className="grocery-brand">Bata</p>
                   <p className="grocery-brand">Lotto</p>
                </div>
            </div>
            <Row xs="1" md="4">
           
                 {
                     shoes.map(shoe=><Shoe
                     shoe={shoe}
                     ></Shoe>)
                 }
        
            </Row>


        </Container>
    );
};

export default Shoes;