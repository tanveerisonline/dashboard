import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import BarGraph from "components/GraphsNew/Bar/index";
import * as constant from "views/ReviewManagement/constant";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 160,
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: "7%",
  },
}));
export default function RatingsBreakdown({ data }) {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.root}>
      {constant.graphData.graphs == null ? (
        <Box
          flexWrap="wrap"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.title}> No Records Found</Typography>
        </Box>
      ) : (
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingTop: 10,
          }}
        >
          <BarGraph
            // data={constant.graphData}
            height={150}
            legendVerticalAlign="top"
            legendalign="center"
            graphData={constant.graphData.graphs}
            mainData={constant.graphData.data}
            AdditonalLegendsStyles={{
              marginTop: -20,
              marginBottom: 20,
              fontSize: 12,
              fontWeight: 400,
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
