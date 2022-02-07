import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Flex, Box, Grid } from '@chakra-ui/core';
import theme from '../theme/theme';

import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
//import ProductCard from '../components/ProductCard';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

