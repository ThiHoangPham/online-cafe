import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { ThemeProvider, Box, Heading, Flex } from '@chakra-ui/core';
import theme from '../theme/theme';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const drinks = cart.map(item => item._id);

            if (drinks.length) {
                const { data } = await addOrder({ variables: { drinks } });
                const drinkData = data.addOrder.drinks;

                drinkData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        }

        saveOrder();
    }, [addOrder]);
    return (

        <ThemeProvider theme={theme}>
             <Flex width="full" textAlign="center" justifyContent="center" minHeight='100vh'>
            <Box p={3}>
                <Heading as='h1'>Your order has been submitted!</Heading>
                <Heading as='h2'>Thank you</Heading>
            </Box>
            </Flex>
        </ThemeProvider>
       
    );
};

export default Success;
