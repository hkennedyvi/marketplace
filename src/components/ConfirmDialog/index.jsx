import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  root: {
    backgroundColor: "hotpink",
    color: "white",
  },
  shopBtn: {
    color: "hotpink",
    border: "solid 1px mediumturquoise",
    borderRadius: "0.5em"
  },
  thumbBtn: {
    backgroundColor: "black",
    color: "mediumturquoise",
    border: "solid 1px mediumturquoise"
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.shopBtn} onClick={handleClickOpen}>
        <AddShoppingCartIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"

      >
        <DialogTitle className={classes.root} id="alert-dialog-slide-title">{"Are you sure you want to add this to your shopping cart?"}</DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText className={classes.root} id="alert-dialog-slide-description">
            Just making sure!
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.root}>
          <Button className={classes.thumbBtn} onClick={handleClose} >
            <ThumbDownIcon />
          </Button>
          <Button className={classes.thumbBtn} onClick={handleClose} >
            <ThumbUpIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
