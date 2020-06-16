import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    button: {
       backgroundColor: "black",
       color: "hotpink",
       height: "45px",
       width: "3px",
       margin: "2% 0"
    },
    menu: {
        backgroundColor: "black",
        color: "hotpink"
    }
}));

export default function MenuPopper() {

    const classes = useStyles();

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button className={classes.button}  {...bindTrigger(popupState)}>
                        <MoreHorizIcon />
                    </Button>
                    <Menu  {...bindMenu(popupState)}>
                        <div className={classes.menu}>
                        <MenuItem  onClick={popupState.close}>Total Items:</MenuItem>
                        <MenuItem onClick={popupState.close}>Average Rating:</MenuItem>
                        </div>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}