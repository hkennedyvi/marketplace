import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import vinceImg from './assets/vince_staples.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    padding: "20px",
    textAlign: "start",
    backgroundColor: "transparent",
    color: "hotpink",
    fontFamily: "helvetica",
    "box-shadow": "none"
  },
  image: {
    width: "100%"
  }
}));

function InfoGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <div>
              <img className={classes.image} src={vinceImg} alt="vince" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">
              Vince's Staples is the premier source of office supplies.
              We make it easy for you to stock every inch of your storage
              with top of the line supplies.
              </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default InfoGrid;