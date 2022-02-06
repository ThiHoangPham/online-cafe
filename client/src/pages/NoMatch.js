import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

function NoMatchStrap(props) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col />
                <Col>
                    <h1>Sorry, the page that you are looking for is not here!</h1>
                    <Image fluid src="./src/assets/sad_puppy.jpg" alt="sorry banner"></Image>
                    <a href='/menu'>
                        <h2>← Back to Menu</h2>
                    </a>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default NoMatchStrap;
