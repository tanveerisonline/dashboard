import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Popup.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import FilterImage2 from "../../FilterImage2.png";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  btn: {
    width: "64%",
    height: "38px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#7bb42d",
    marginTop: 25,
    borderRadius: 10,
    marginLeft: 30,
  },
  filterImg: {
    height: 20,
    width: 20,
  },
  apply: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
}));

const PopupSidenav = () => {
  const classes = useStyles();
  return (
    <Grid className="popup-sidenav">
      <div className="side-names1">
        <span>
          <a href="#myPortfolio">My Portfolio</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      {/* <Divider variant="middle" /> */}
      <div className="side-names2">
        <span>
          <a href="#svp">SVP</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />

      <div className="side-names3">
        <span>
          <a href="#srltd">SRLTD</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names4">
        <span>
          <a href="#rltd">RLTD</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names5">
        <span>
          <a href="#rvp">RVP</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names6">
        <span>
          <a href="#rm">RM</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names7">
        <span>
          <a href="#manager">Manager</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names8">
        <span>
          <a href="#additionalUserReader">Additional User (Reader)</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names9">
        <span>
          <a href="#additionalUserPublisher">Additional User (Publisher)</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names10">
        <span>
          <a href="#additionalUser3">Additional User 3</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names11">
        <span>
          <a href="#additional4">Additional User 4</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        margintop="10"
        color="secondary"
        startIcon={
          <img src={FilterImage2} alt="Img" className={classes.filterImg} />
        }
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.apply}>APPLY FILTER</Typography>
      </Button>
    </Grid>
  );
};

export default PopupSidenav;
