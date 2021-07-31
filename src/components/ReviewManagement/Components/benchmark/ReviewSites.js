import React from "react";
import AreaGraph from "components/Graphs/Area/index";
import * as constant from "../../constant";
import { Box, Grid, Typography } from "@material-ui/core";
import Radio from "components/form/RadioButton/SimpleRadio";
export default function ReviewTrend() {
  return (
    <Grid
      style={{
        marginBottom: 10,
      }}
    >
      <Grid item container spacing={2}></Grid>
      <Box mt={5} pr={1} mb={2} pb={4}>
        <AreaGraph
          graphData={constant?.benchMarkData.graphFormat}
          mainData={constant?.benchMarkData.review_trend}
          height={300}
          legendVerticalAlign="bottom"
          legendalign="center"
          AdditonalLegendsStyles={{
            fontSize: 12,
            fontWeight: 400,
            paddingLeft: 40,
            paddingRight: 20,
          }}
        />
      </Box>
    </Grid>
  );
}
