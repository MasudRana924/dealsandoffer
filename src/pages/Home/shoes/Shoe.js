import React from 'react';
import { Col } from 'react-bootstrap';

const Shoe = (props) => {
    const { name, price, img, stock, url, brand } = props.shoe
    return (
        <Col className="mt-3">
            <div className="card-shoes">
                <p className="stock">{stock}</p>
                <img src={img} className="w-75 mx-auto card-image" alt="" />
                <h5 className="card-title mt-3">{name}</h5>
                <p>{price}TK</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="btn-cart">Purchase</button>
                </a>

            </div>

        </Col>
    );
};

export default Shoe;