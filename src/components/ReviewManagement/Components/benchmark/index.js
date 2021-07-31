import React from "react";
import Toolbar from "views/ReviewManagement/Components/Layouts/Toolbar";
import ReviewSites from "./ReviewSites";
import RatingBox from "../Layouts/BoxLayout";
import * as constant from "views/ReviewManagement/constant";
import { Grid } from "@material-ui/core";
export default function index({ tab, graphFilters, GroupByData }) {
  const arr = [1, 2, 3, 4];
  return (
    <Grid xs={12}>
      <Toolbar
        tab={tab}
        GroupByData={GroupByData}
        tab={tab}
        benchmarkFilter={graphFilters}
      />
      <Grid item container spacing={1}>
        {arr.map((items) => (
          <Grid item xs={6}>
            <RatingBox label="Star Rating">
              <ReviewSites />
            </RatingBox>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
