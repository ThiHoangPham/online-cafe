import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./home.css";

const Home = () => {
    return (
        <Container fluid className='home'>
            <Jumbotron>
                <h1>Welcome to OnlineCafé</h1>
                <p>
                    OnlineCafé is a destination for great food and a relaxed atmosphere. We serve fabulous coffee and fresh gourmet food.
                </p>
                <p>
                    <Button variant="primary"><a href='menu'>Order Now</a></Button>
                </p>
            </Jumbotron>
        </Container>
    );
};


export default Home;