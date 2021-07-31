import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  },
  innerTypographyDiv: {
    // backgroundColor: "#383E4C",
    height: 38,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 15,
    paddingTop: 20,
  },
  dataText: {
    fontSize: 14,
    fontWeight: 700,
  },
}));

export default function BoxLayout(props) {
  const classes = useStyles();

  const { children, label } = props;

  return (
    <Grid className={classes.mainGrid}>
      <div className={classes.innerTypographyDiv}>
        <Box className={classes.dataText}>{label}</Box>
      </div>
      {children}
    </Grid>
  );
}
