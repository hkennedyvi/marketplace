import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuBar: {
        backgroundColor: "black",
        color: "white",
        height: "70px"
    },
    menuBarTrans: {
        backgroundColor: "mediumturquoise",
        color: "black",
        height: "70px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        size: "50px"
    },
}));

function NavBar() {
    const [navbarTrans, setNavbarTrans] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let viewPosition = window.scrollY;
            if (viewPosition > 510) {
                setNavbarTrans(false);
            } else {
                setNavbarTrans(true);
            }
        })
    }, [])

    return (
        <div className={classes.root}>
            <AppBar className={navbarTrans ? classes.menuBar : classes.menuBarTrans} position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        VINCE'S STAPLES
                    </Typography>
                    <Button color="inherit">
                        <ShoppingCartIcon />
                    </Button>
                    <Button color="inherit">
                        <ExitToAppIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;