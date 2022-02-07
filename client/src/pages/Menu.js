import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Flex, Box, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import CategoryMenu from "../components/CategoryMenu";
import DrinkList from "../components/DrinkList";
//import DrinkCard from '../components/DrinkCard';
import { QUERY_ALL_DRINKS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_DRINKS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ALL_DRINKS);
console.log("state", state);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DRINKS,
                drinks: data.drinks
            });

            data.drinks.forEach((item) => {
                idbPromise('drinks', 'put', item);
            });
        } else if (!loading) {
            idbPromise('drinks', 'get').then((drinks) => {
                dispatch({
                    type: UPDATE_DRINKS, 
                    drinks: drinks
                })
            })
        }
    }, [loading, data, dispatch]);
    // console.log(state.drinks);

    return (
        <ThemeProvider theme={theme}>
            <Flex wrap="wrap" alignItems='center' justifyContent='center'>
                <Box>
                <Box p={5} alignItems='center' justifyContent='center'>
                    <CategoryMenu />
                </Box>
                <DrinkList drinks={state.drinks}/>
                    {/*<Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={6}>
                        {state.drinks.map(item => (
                            <DrinkCard item={item} key={item._id}/>
                        ))}
                       
                    </Grid> */}
                </Box>
            </Flex>
            
            

        </ThemeProvider>
    );
};


export default Menu;