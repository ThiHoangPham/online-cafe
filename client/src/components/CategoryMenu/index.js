import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Box, Button } from '@chakra-ui/core';

import './index.css';

function CategoryMenu() {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    return (
        <Box>
            <h5>Categories.</h5>
            {categories.map(item => (
                <Button type="button"
                    borderRadius="8px"
                    py="3"
                    px="2"
                    mt="2"
                    mx='2'
                    lineHeight="1"
                    size="md"
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </Button>
            ))}
        </Box>
    );
}

export default CategoryMenu;