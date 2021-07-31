import React from "react";
import AreaGraph from "components/Graphs/Area/index";
import * as constant from "views/ReviewManagement/constant";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import Radio from "components/form/RadioButton/SimpleRadio";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 430,
    // maxHeight: 230,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: "3%",
  },
}));
export default function ReviewTrend({
  reviewTrendData,
  filterSelected,
  setFilterSelected,
  filterData,
}) {
  const classes = useStyles();

  console.log(filterData);
  return (
    <Grid
      style={{
        marginBottom: 10,
        minHeight: 500,
      }}
    >
      <Grid
        container
        // spacing={2}
        direction="row"
        justify="flex-end"
        style={{ paddingRight: 30, marginTop: -20 }}
      >
        {filterData?.map((item) => (
          <Grid item>
            <Radio
              isChecked={filterSelected == item.id}
              label={item.value}
              value="1"
              additionalStyles={{}}
              labelStyles={{
                fontSize: 10,
              }}
              handleChange={(data) => {
                setFilterSelected(item.id);
              }}
            />
          </Grid>
        ))}
      </Grid>

      {reviewTrendData.graphFormat == null ||
      reviewTrendData.review_trend == null ? (
        <Box
          flexWrap="wrap"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.title}> No Records Found</Typography>
        </Box>
      ) : (
        <Box mt={5} pl={2} pr={2} mb={2}>
          <AreaGraph
            graphData={reviewTrendData?.graphFormat}
            mainData={reviewTrendData?.review_trend}
            // graphData={constant?.RatingGraph.graphs}
            // mainData={constant?.RatingGraph.inputData.data}
            height={400}
            AdditonalLegendsStyles={{
              marginTop: -20,
            }}
          />
        </Box>
      )}
    </Grid>
  );
}
