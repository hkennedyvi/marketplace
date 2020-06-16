import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoppingCart from '../ShoppingCart';
import ProfileBox from '../ProfileBox';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        marginTop: "70px"
    }
}));

function CartMain() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ShoppingCart />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ProfileBox />
                </Grid> 
            </Grid>
        </div>
    );
}

export default CartMain;