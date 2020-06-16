import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuPopper from '../MenuPopper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "black",
        color: "white",
        border: "black solid 1px"
    },
    header: {
        backgroundColor: "mediumturquoise",
        width:"100%",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {

    },
    controls: {
        backgroundColor: "black",
        border: "black solid 2px",
        textAlign: "right"
    },
    button: {
        backgroundColor: "black",
        color: "hotpink",
    },
    cover: {
        width: "50%",
    },
    numberInput: {
        backgroundColor: "black",
        color: "mediumturquoise",
        width: 20,
        height: 20,
        outline: "none",
        textAlign: "center",
    }
}));

function ShoppingCart() {

    const classes = useStyles();

    return (
        <div>
            <Grid container
                direction="column"
                justify="center"
                alignItems="left"
                spacing={3}
            >
                <Grid container item xs={12} sm={12} md={6} lg={6} spacing={3}>
                    <Paper className={classes.header}>
                <Typography variant="h2">
                    MY CART
                    </Typography>
                    <MenuPopper />
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} lg={6} spacing={3}>
                
                   
                   
                    {/* <Paper> */}
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            alt="product"
                            className={classes.cover}
                            image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/19/USATODAY/usatsports/ibm-thinkpad-notebook-1992.jpg"
                            title="Contemplative Reptile"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography gutterBottom component="h5" variant="h5">
                                    Computer
          </Typography>
                                <Typography variant="subtitle1">
                                    This is a wonderful computer don't you agree? Give it a try!
          </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton className={classes.button} aria-label="previous">
                                    <AddCircleIcon />
                                </IconButton>
                                <input className={classes.numberInput} >

                                </input>
                                <IconButton className={classes.button} aria-label="play/pause">
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton className={classes.button} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>

                    </Card>
                    {/* </Paper> */}
                </Grid>
                <Grid container item xs={12} sm={12} md={6} lg={6} spacing={3}>
                    {/* <Paper> */}
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            alt="product"
                            className={classes.cover}
                            image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/19/USATODAY/usatsports/ibm-thinkpad-notebook-1992.jpg"
                            title="Contemplative Reptile"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography gutterBottom component="h5" variant="h5">
                                    Computer
          </Typography>
                                <Typography variant="subtitle1">
                                    This is a wonderful computer don't you agree? Give it a try!
          </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton className={classes.button} aria-label="previous">
                                    <AddCircleIcon />
                                </IconButton>
                                <IconButton className={classes.button} aria-label="play/pause">
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton className={classes.button} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>

                    </Card>
                    {/* </Paper> */}
                </Grid>
                <Grid container item xs={12} sm={12} md={6} lg={6} spacing={3}>
                    {/* <Paper> */}
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            alt="product"
                            className={classes.cover}
                            image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/19/USATODAY/usatsports/ibm-thinkpad-notebook-1992.jpg"
                            title="Contemplative Reptile"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography gutterBottom component="h5" variant="h5">
                                    Computer
          </Typography>
                                <Typography variant="subtitle1">
                                    This is a wonderful computer don't you agree? Give it a try!
          </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton className={classes.button} aria-label="previous">
                                    <AddCircleIcon />
                                </IconButton>
                                <IconButton className={classes.button} aria-label="play/pause">
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton className={classes.button} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>

                    </Card>
                    {/* </Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default ShoppingCart;