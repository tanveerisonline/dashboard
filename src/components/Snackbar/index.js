import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { SelectAlertAction } from "./actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
  
    fontWeight : 500,
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  Alert :{ 
    fontSize : 11,
    fontWeight : 500,
    fontFamily : "Poppins"
  }
}));

export default function CustomizedSnackbars() {
  const { message, severity, id } = SelectAlertAction();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let horizontal = "center";
  let vertical = "top";
  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [id]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity} className={classes.Alert}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
