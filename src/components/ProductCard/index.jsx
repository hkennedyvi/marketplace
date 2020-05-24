import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: "solid 5px black"
    },
    cardTop: {
        borderTop: "solid 5px black",
        backgroundColor: "lightgrey"
    },
    cardBottom: {
        backgroundColor: "white"
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="product"
                height="100%"
                image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/19/USATODAY/usatsports/ibm-thinkpad-notebook-1992.jpg"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.cardTop}>
                <Typography gutterBottom variant="h5" component="h2">
                    Computer
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is a wonderful computer don't you agree? Give it a try!
          </Typography>
            </CardContent>
            <CardActions className={classes.cardBottom}>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <VisibilityIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}