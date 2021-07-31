import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {},
  root: {
    height: 160,
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "10px",
    paddingLeft: 10,
    paddingRight: 10,
  },
  percent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: 30,
    color: "#e2e2e2",
    fontWeight: 800,
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  rated: {
    fontSize: "50px",
    color: "#c2302a",
    fontWeight: 600,
    marginTop: "16px",
    marginBottom: "12px",
  },
  overAllRating: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: "0px",
    textAlign: "center",
  },
  reviews: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 10,
    textAlign: "center",
  },
  rate: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#8f95a3",
  },
  progressBar: {
    color: "#0fa9de",
    marginBottom: "10px",
  },
  divider: {
    backgroundColor: "lightgray",
    marginTop: "5px",
    height: "150px",
  },
}));

export default function StarRating({ StarRatingData }) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 0 ? 130 : prevProgress));
    }, 700);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function CircularProgressWithLabel() {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={progress}
          size="5.5rem"
          className={classes.progressBar}
          thickness={2.5}
          background="gray"
        />
        <Box
          top={0}
          left={0}
          bottom={10}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            // color="textSecondary"
            className={classes.rate}
          >
            3.75
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Grid xs={12} className={classes.root}>
      <Grid xs={6} sm={8} className={classes.percent}>
        <CircularProgressWithLabel />
        <Typography className={classes.overAllRating}>
          OVERALL RATING
        </Typography>
      </Grid>
      <Divider
        className={classes.divider}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <Grid xs={6} sm={4} className={classes.rating}>
        <Typography className={classes.rated}>14</Typography>
        <Typography className={classes.reviews}> REVIEWS RECEIVED</Typography>
      </Grid>
    </Grid>
  );
}
