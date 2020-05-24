import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StaplerIcon from './assets/stapler-80.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        height: "500px",
        marginTop: "70px",
        padding: "150px 0"
    }
}));

function Jumbo() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                <Typography component="div" variant="h1" >
                Need supplies?
            </Typography>
            <div>
                <img src={StaplerIcon} alt="stapler" />
            </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Jumbo;