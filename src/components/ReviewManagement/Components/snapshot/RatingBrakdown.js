import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Rating from "components/form/Rating/ReadOnly";
import ProgressBar from "components/Progress/ProgressBar";
import RatingBar from "views/ReviewManagement/Components/Layouts/RatingBar";
import RatingStatus from "views/ReviewManagement/Components/Layouts/RatingStatus";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 230,
    maxHeight: 230,
  },
  TopGrip: {
    paddingTop: 10,
  },
  barGrid: {
    paddingTop: 15,
    paddingLeft: 10,
  },
  contentGrid: {
    paddingBottm: 20,
    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title : {
    fontSize : 14,
    fontWeight:  700
  }
}));
export default function RatingBreakdown({ ratingBreakdownData }) {
  var i = 10;
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.root}>
      <Grid
        xs={12}
        item
        direction="row"
        container
        alignItems="center"
        justify="center"
        className={classes.barGrid}
      >
        {ratingBreakdownData?.ratingCategory?.map((items) => (
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            container
            alignItems="center"
            justify="center"
          >
            <RatingStatus
              value={items?.value}
              color={items?.color}
              label={items?.label}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        direction="column"
        container
        xs={12}
        className={classes.contentGrid}
      >
        {ratingBreakdownData?.ratingBreakdown?.map((items) => (
          <RatingBar
            starValue={items?.value}
            progressValue={items?.percentage}
            percentageValue={items?.percentage}
            numberValue={items?.count}
          />
        ))}
      </Grid>
      {(ratingBreakdownData?.ratingCategory == null ||
        ratingBreakdownData?.ratingBreakdown == null) && (
        <Box  flexWrap="wrap" display="flex" alignItems="center"justifyContent="center">
          <Typography className={classes.title}> No Records Found</Typography>
        </Box>
      )}
    </Grid>
  );
}
