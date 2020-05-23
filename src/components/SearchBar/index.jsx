import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    field: {
        background: "transparent",
        color: "white",
        width: "80%",
        height: "50px",
        fontSize: "45px",
        border: "2px solid hotpink",
        borderRadius: "0.75em",
        margin: "0 0 0 125px",
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
        <div>
            <form>
            <input type="text" placeholder="Search..." className={classes.field}></input>
            <button className={classes.button}>
            <SearchIcon className={classes.icon}/>
            </button>
            </form>
        </div>
    );
}

export default SearchBar;