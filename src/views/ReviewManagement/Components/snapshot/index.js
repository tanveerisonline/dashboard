import React, { useState } from "react";
import StarRating from "./StarRating";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";
import RatingsRollup from "./RatingsRollup";
import RatingsBreakdown from "./RatingsBreakdown";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  starDiv: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    color: "green",
    backgroundColor: "yellow",
    borderRadius: "5px",
  },
}));
export default function Index() {
  const [radioData, setRadioData] = useState([
    {
      id: 1,
      value: false,
      label: "Average Star Rating",
    },
    {
      id: 2,
      value: false,
      label: "Number of Reviews",
    },
    {
      id: 3,
      value: false,
      label: "Number of Responses",
    },
    {
      id: 4,
      value: false,
      label: "Responses Pending Approval",
    },
    {
      id: 5,
      value: false,
      label: "Problem Responses",
    },
  ]);
  const classes = useStyles();
  const handleRadioChange = (e) => {
    // e.prevent.default();
    console.log(e);
    let newRadioData = radioData.map((item) => {
      if (item.id === e) {
        item.value = true;
        return item;
      } else {
        item.value = false;
        return item;
      }
    });
    setRadioData(newRadioData);
  };

  return (
    <Grid style={{ marginTop: 10 }} xs={12}>
      <div className={classes.root}>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <BoxLayout label="Star Rating" white={true}>
              <StarRating />
            </BoxLayout>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <BoxLayout label="Ratings Rollup">
              <RatingsRollup />
            </BoxLayout>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <BoxLayout label="Ratings Breakdown">
              <RatingsBreakdown />
            </BoxLayout>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            filterData={radioData}
            setFilterSelected={handleRadioChange}
          />
        </BoxLayout>
      </div>
    </Grid>
  );
}
