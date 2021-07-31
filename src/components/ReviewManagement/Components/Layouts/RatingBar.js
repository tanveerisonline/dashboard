import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import Rating from "components/form/Rating/ReadOnly";
import ProgressBar from "components/Progress/ProgressBar";
import React from "react";
const useStyles = makeStyles((theme) => ({
  mainLabel: {
    fontSize: 14,
    fontWeight: 700,
    marginRight: 5,

  },
  percentLabel : {
    fontSize : 14,
    fontWeight : 400,
    
  }
}));

export default function RatingBar(props) {
  const classes = useStyles();
  const { starValue, progressValue, percentageValue, numberValue } = props;

  return (
    <Grid
      item
      direction="row"
      container
      alignItems="center"
      justify="space-evenly"
      xs={12}
    >
      <Grid item xs={4}>
        <Rating value={starValue} />
      </Grid>
      <Grid item xs={5}>
        <ProgressBar dataValue={progressValue} />
      </Grid>
      <Grid item xs={3} container direction="row" justify="flex-end">
        <Grid item > 
          <Typography className={classes.mainLabel}>{numberValue}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.percentLabel}>
            ({percentageValue}%)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
