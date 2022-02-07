import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DRINKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { ThemeProvider, Box, Grid, Flex} from '@chakra-ui/core';
import theme from '../../theme/theme';


function DrinkList({drinks}) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_DRINKS,
          drinks: data.drinks
        });
        data.drinks.forEach((drink) => {
          idbPromise('drinks', 'put', drink);
        });
    } else if (!loading) {
      idbPromise('drinks', 'get').then((drinks) => {
        dispatch({
          type: UPDATE_DRINKS,
         drinks: drinks
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterDrinks() {
    if (!currentCategory) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.category._id === currentCategory);
  }

  return (
    <ThemeProvider theme={theme}>
         <Flex wrap='wrap' align='center' justify='center'>
        <Box p={5}>
            {state.drinks.length ? (
                <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={3}>
                    {filterDrinks().map(drink => (
                        <DrinkCard
                        key= {drink._id}
                        item={drink}

                        />
                    ))}
                </Grid>
            ) : (
                <h3>You haven't added any drinks yet!</h3>
            )}
            
        </Box>
        </Flex>
    </ThemeProvider>
  );
}

export default DrinkList;
