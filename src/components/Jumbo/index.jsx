import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StaplerIcon from './assets/stapler-80.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white",
        height: "500px",
        width: "100%",
        // borderRadius: "1em",
        marginTop: "100px",
        // boxShadow: "5px 5px"
    },
}));

function Jumbo() {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography component="div" variant="h1" >
                Hello 
            </Typography>
            <div>
                <img src={StaplerIcon} alt="stapler"  />
            </div>
        </Container>
    );
}

export default Jumbo;