import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Popup from "./Popup/Popup";
import { Dialog } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "orange",
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
  },
  textField: {
    justifyContent: "center",
    paddingLeft: "15px",
    color: "red",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    width: 50,
    height: 45,
    [theme.breakpoints.down("sm")]: {
      border:"1px solid #000",
      width: 100,
      height: 40,
    },
  },
  filBtn: {
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  title: {
    marginLeft: 20,
    fontSize: 13,
    color: "#383e4c",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "75%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,
  },
  region: {
    display: "flex",
    flexDirection: "row",
  },
}));
const PortfolioFilter = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
    }
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>MY PORTFOLIO:</Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="portfolio-form"
        >
          <Grid className={classes.region}>
            <TextField
              className={classes.textField}
              onChange={(e) => setTitle(e.target.value)}
              // label="378"
              placeholder="378"
              color="secondary"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={classes.title}>East Region</Typography>
          </Grid>
          <Button
            className={classes.btn}
            onClick={() => setOpenPopup(true)}
            type="submit"
            color="primary"
            variant="contained"
            // marginTop="10"
            endIcon={<KeyboardArrowRightIcon className={classes.arrow} />}
          >
            <Typography className={classes.filBtn}>
              FILTER PROPERTIES
            </Typography>
          </Button>
        </form>
      </Grid>
      <Dialog
        open={openPopup}
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
      >
        <Popup close={handleClose} />
      </Dialog>
    </>
  );
};

export default PortfolioFilter;
