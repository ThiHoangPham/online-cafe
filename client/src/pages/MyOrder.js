import React, { useEffect } from 'react';
import { ThemeProvider, 
    Stack, Flex, Box, Heading, Button } from '@chakra-ui/core';
import theme  from '../theme/theme';
import Auth from "../utils/auth";
import CartItem from '../components/CartItem';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries"
import { useLazyQuery } from '@apollo/react-hooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

