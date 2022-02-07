import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { ThemeProvider, Box, Grid, Flex} from '@chakra-ui/core';
import theme from '../../theme/theme';

function ProductList({products}) {
    const [state, dispatch] = useStoreContext()
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);
  
    useEffect(() => {
      if(data) {
        dispatch({
             type: UPDATE_PRODUCTS,
            products: data.products
          });
          data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
      } else if (!loading) {
        idbPromise('products', 'get').then((products) => {
          dispatch({
            type: UPDATE_PRODUCTS,
           products: products
         });
        });
      }
    }, [data, loading, dispatch]);
  
    function filterProducts() {
      if (!currentCategory) {
        return state.products;
      }
      return state.products.filter(product => product.category._id === currentCategory);
    }
  
    return (
      <ThemeProvider theme={theme}>
           <Flex wrap='wrap' align='center' justify='center'>
          <Box p={5}>
              {state.products.length ? (
                  <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={3}>
                      {filterProducts().map(product => (
                          <ProductCard
                          key= {product._id}
                          item={product}
                          />
                      ))}
                  </Grid>
              ) : (
                  <h3>You haven't added any products yet!</h3>
              )}
          </Box>
          </Flex>
      </ThemeProvider>
    );
  }
  
  export default ProductList;