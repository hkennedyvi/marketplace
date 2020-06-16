import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import ConfirmDialogSlide from '../ConfirmDialog';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        border: "solid 3px black"
    },
    cardHeader : {
        color: "white",
        fontWeight: "bold"
    },
    cardBody: {
        backgroundColor: "black",
        color: "mediumturquoise",
    },
    cardBottom: {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    cardBtn: {
        color: "hotpink",
        border: "solid 1px mediumturquoise",
        borderRadius: "0.5em"
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={`${classes.root} ${"resultCard"}`}>
            <CardMedia
                component="img"
                alt="product"
                height="100%"
                image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/19/USATODAY/usatsports/ibm-thinkpad-notebook-1992.jpg"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.cardBody}>
                <Typography gutterBottom className={classes.cardHeader} variant="h5" component="h2">
                    Computer
          </Typography>
                <Typography variant="body2" component="p">
                    This is a wonderful computer don't you agree? Give it a try!
          </Typography>
            </CardContent>
            <CardActions className={classes.cardBottom}>
                <ConfirmDialogSlide />
                <IconButton className={classes.cardBtn} aria-label="add to shopping cart">
                    <VisibilityIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}