import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
import { ThemeProvider, Image, Stack, Flex, Box, Heading, Text } from '@chakra-ui/core';
import theme from '../theme/theme';


function OrderList({ name, price, ...rest }) {
    return (
        <Box p={5} shadow="lg" borderWidth="5px" {...rest}>
            <Heading fontSize="xl">{name}</Heading>
            <Text mt={4}>{price}</Text>
        </Box>
    );
}

function History() {
    const { data } = useQuery(QUERY_USER);
    let user;
    console.log(data)
    if (data) {
        user = data.user;
    }


    return (
        <ThemeProvider theme={theme}>
            <Link to="/menu">
                ← Back to Menu
                </Link>
            {user ? (
                <>
                    <Box pl={3}>
                        {<Heading as='h1'>{user.firstName} {user.lastName}'s Order History</Heading>}

                        {user.orders.map((order) => (
                            <Flex key={order._id}>
                                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                                <Stack>

                                    {order.drinks.map(({ _id, image, name, price }, index) => (
                                        <Box key={index}>
                                            <Link to={`/menu`}>
                                                <Image src={`${image}`} alt={name} mt="10%" width={['auto', '80%']} />
                                                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" >
                                                    {name}
                                                    <br></br>
                                                    ${price}
                                                </Box>
                                            
                                            </Link>
                                           
                                        </Box>
                                    ))}
                                </Stack>
                            </Flex>
                        ))}
                    </Box>
                
                </>
            ) : null}
        </ThemeProvider>
    );
};


export default History;