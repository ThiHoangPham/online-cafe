import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Flex, Box, Grid } from '@chakra-ui/core';
import theme from '../theme/theme';

import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    console.log("state", state);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
            data.products.forEach((item) => {
                idbPromise('products', 'put', item);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products
                })
            })
        }
    }, [loading, data, dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Flex wrap="wrap" alignItems='center' justifyContent='center'>
                <Box>
                    <Box p={5} alignItems='center' justifyContent='center'>
                        <CategoryMenu />
                    </Box>
                    <ProductList products={state.products} />
                </Box>
            </Flex>
        </ThemeProvider>
    );
};

export default Menu;