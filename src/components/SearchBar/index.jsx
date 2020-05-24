import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    form: {
        textAlign: "center"
    },
    field: {
        background: "transparent",
        color: "white",
        width: "80%",
        height: "50px",
        fontSize: "45px",
        border: "2px solid hotpink",
        borderRadius: "0.75em",
        padding: "5px 0 10px 20px"
    },
    button: {
        background: "transparent",
        border: "solid hotpink 2px",
        borderRadius: "5em",
        position: "absolute",
        margin: "0 -78px"
    },
    icon: {
        fontSize: "60px",
        color: "mediumturquoise"
    }
}));

function SearchBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <form className={classes.form}>
                        <input type="text" placeholder="Search..." className={classes.field}></input>
                        <button className={classes.button}>
                            <SearchIcon className={classes.icon} />
                        </button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchBar;