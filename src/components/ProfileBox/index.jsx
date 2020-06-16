import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    test: {
        backgroundColor: "hotpink",
        height: "600px"
    }
}));

function ProfileBox() {

    const classes = useStyles();

    return (
        <div className={classes.test}>
           test
        </div>
    );
}

export default ProfileBox;