import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "mediumturquoise",
    color: "black",
    height: "50px",
    //Play with posittion attribute in AppBar, might have fixed bottom setting
    width: '100%',
    position: 'fixed',
    bottom: 0,
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: 'auto'
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar} position="">
        {/* <Toolbar> */}
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            C
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}

export default Footer;