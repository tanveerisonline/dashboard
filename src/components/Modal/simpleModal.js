import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Divider } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 10; //+ rand();
  const left = window.innerWidth-900 ;

  return {
    top: `${top}%`,
    // left:  window.innerWidth-850 , //`${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
    maxHeight: 500,
    // margin:'auto'

  };
}

export default function SimpleModal(props) {
  const { children, isOpen, handleClose, width, height } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      width: width,
      height: height,
    },
  }));

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal open={isOpen} onClose={handleClose}
    style={{display:'flex',alignItems:'center',justifyContent:'center'}}

    >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
}
SimpleModal.defaultProps = {
  isOpen: false,
};
