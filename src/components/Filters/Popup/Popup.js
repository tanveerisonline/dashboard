import React from "react";
import { DialogTitle, DialogContent, makeStyles } from "@material-ui/core";
import PopupContent from "./PopupContent";
import { Grid } from "@material-ui/core";
import PopupSidenav from "./PopupSidenav";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Popup.css";
import popupIcon from "./popupIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70%",
  },
  rootHeader: {
    height: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    marginRight: "20px",
    backgroundColor: "#2b3b5c",
    height: "36px",
    width: "36px",
    borderRadius: 6,
    border: "none",
  },
  title: {
    color: "#383e4c",
    fontSize: "16px",
    fontWeight: 800,
  },
  inner2: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  property: {
    width: "30%",
    height: "35px",
    color: "#fff",
    display: "flex",
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    background: "#0DA9DE",
    borderRadius: 10,
    marginRight: 30,
  },
  close: {
    background: "#fff",
    borderRadius: "50px",
    marginRight: 50,
  },
  content: {
    height: "100%",
    width: "100%",
  },
}));
const Popup = (props) => {
  const { close } = props;
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      xs={12}
      style={{ overflowY: "hidden" }}
    >
      <Grid className="popup-main" item xs={12}>
        <Grid className={classes.rootHeader}>
          <DialogTitle className={classes.inner1}>
            <span>
              <button className={classes.iconBtn}>
                <img
                  src={popupIcon}
                  height={22}
                  width={22}
                  alt="Img"
                  className={classes.iconImg}
                />
              </button>
            </span>
            <span className={classes.title}>
              Filter by Portfolio / Distribution
            </span>
          </DialogTitle>
          <div className={classes.inner2}>
            <span className={classes.property}># PROPERTIES SELECTED</span>
            <span className={classes.close}>
              {close ? (
                <IconButton aria-label="close" onClick={close}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.combo} container xs={12}>
        <Grid item xs={3}>
          <PopupSidenav />
        </Grid>
        <Grid className={classes.content} item xs={9}>
          <DialogContent>
            <PopupContent />
            {/* {children} */}
          </DialogContent>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Popup;
