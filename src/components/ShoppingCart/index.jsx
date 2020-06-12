import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "black",
        color: "hotpink",
        padding: "20px"
    },
    searchField: {
        background: "transparent",
        color: "white",
        width: "80%",
        height: "50px",
        fontSize: "45px",
        border: "2px solid hotpink",
        borderRadius: "0.75em",
        padding: "5px 0 10px 20px"
    },
    searchButton: {
        background: "transparent",
        border: "solid hotpink 2px",
        borderRadius: "5em",
        position: "absolute",
        margin: "0 -78px",
    },
    icon: {
        fontSize: "60px",
        color: "mediumturquoise"
    }
}));

function ShoppingCart() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
         <Paper className={classes.paper}>
             item
         </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Paper className={classes.paper}>
             item
         </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Paper className={classes.paper}>
             item
         </Paper>
        </Grid>
      </Grid>
        </div>
    );
}

export default ShoppingCart;