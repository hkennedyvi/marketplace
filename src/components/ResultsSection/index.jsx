import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "20px 0 0 20px",
    backgroundColor: "transparent",
    "box-shadow": "none"
  }
}));

function ResultsSection() {

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper className={classes.paper}>
              <ProductCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
              <ProductCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
              <ProductCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper className={classes.paper}>
              <ProductCard />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default ResultsSection;