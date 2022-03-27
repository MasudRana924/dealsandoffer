import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css'


const SignUp = () => {

    return (
        <Container fluid className="mt-3">
            <Row xs="1" md="3">
                <Col></Col>
                <Col xs="">
                    <div className="signup-card">
                        <div className="d-flex">
                            <button className="google-btn me-1 ms-1">Google</button>
                            <button className="facebook-btn me-1">Facebook</button>
                        </div>
                        <Form className="w-75 mx-auto ">
                            <Form.Group className="">
                                <p className="text-start text-white" >Name </p>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="" >
                                <p className="text-start text-white">Email </p>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="" >
                                <p className="text-start text-white">Password </p>
                                <Form.Control type="password" placeholder="Enter a Password" />
                                <p className="text-start text-white"> Password should be more than 6 characters</p>
                                <p className="text-start text-danger"></p>
                            </Form.Group>
                            <Button type="submit" className="w-100 text-center fs-6  signup-btn " size="sm" variant="dark">
                                Sign-up
                            </Button>
                            <p className="text-start mt-3 account-text">Already have an account ?
                                <Link to="/login" className="text-decoration-none">Login</Link>
                            </p>
                        </Form>
                    </div>

                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default SignUp;