import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Dragon scale dice', description: 'D&D dice.', price: '$10', image: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/3999/11145/IMG_7329__13333.1682447047.jpg?c=2'},
    { id: 2, name: 'Human Mini', description: 'Human miniature figure', price: '$8', image: 'https://i.etsystatic.com/22523066/r/il/46c180/2769417014/il_570xN.2769417014_j2be.jpg'}
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;