import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    form: {
        textAlign: "center"
    },
    searchField: {
        background: "black",
        color: "white",
        width: "80%",
        height: "50px",
        fontSize: "45px",
        border: "3px solid hotpink",
        borderRadius: "0.75em",
        padding: "5px 0 10px 20px",
        outline: "none"
    },
    searchFieldActive: {
        background: "white",
        color: "black",
        width: "80%",
        height: "50px",
        fontSize: "45px",
        border: "3px solid mediumturquoise",
        borderRadius: "0.75em",
        padding: "5px 0 10px 20px",
        outline: "none"
    },
    searchButton: {
        background: "transparent",
        border: "3px solid hotpink",
        borderRadius: "5em",
        position: "absolute",
        margin: "0 -78px",
        outline: "none"
    },
    searchButtonActive: {
        background: "transparent",
        border: "3px solid mediumturquoise",
        borderRadius: "5em",
        position: "absolute",
        margin: "0 -78px",
        outline: "none"
    },
    icon: {
        fontSize: "60px",
        color: "mediumturquoise"
    },
    iconActive: {
        fontSize: "60px",
        color: "hotpink"
    }
}));

function SearchBar() {
    const [searchBarActive, setSearchBarActive] = useState(false);

    const classes = useStyles();

    function activateSearchBar() {
        setSearchBarActive(true);
    }

    function deactivateSearchBar() {
        setSearchBarActive(false);
    }

    function onSearch(e) {
        e.preventDefault();
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <form className={classes.form}>
                        <input
                            id="searchField"
                            type="text"
                            placeholder="Search..."
                            className={searchBarActive ? classes.searchFieldActive : classes.searchField}
                            onFocus={activateSearchBar}
                            onBlur={deactivateSearchBar}
                        >
                        </input>
                        <button
                            id="searchBtn"
                            className={searchBarActive ? classes.searchButtonActive : classes.searchButton}
                            onClick={onSearch}
                        >
                            <SearchIcon 
                            className={searchBarActive ? classes.iconActive : classes.icon}
                            />
                        </button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchBar;