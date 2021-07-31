import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  labelTitle: {
    fontSize: 14,
    fontWeight: 700,
  },
  mainLabel: {
    fontSize: 14,
    fontWeight: 400,
  },
}));

export default function RatingStatus(props) {
  const classes = useStyles();
  const { value, color, label } = props;
  return (
    <Grid
      xs={12}
      sm={6}
      md={6}
      direction="row"
      container
      alignItems="center"
      justify="center"
    >
      <Box
        style={{
          backgroundColor: color,
          color: "white",
        }}
        mr={1}
        pl={1}
        pr={1}
      >
        <Typography className={classes.labelTitle}>{value}</Typography>
      </Box>
      <Typography className={classes.mainLabel}>{label}</Typography>
    </Grid>
  );
}
