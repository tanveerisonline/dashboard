import React, { useState } from "react";
import Toolbar from "views/ReviewManagement/Components/Layouts/Toolbar";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingBrakdown";
import Sentiments from "./Sentiments";
import { Box, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";
import { useParams } from "react-router";

import {
  GetOverAllRating,
  GetRatingBreakDown,
  GetSentimentsBreakdown,
  GetReviewTrendData,
  GetAdvancedFilterData,
} from "../../actions";
import { UserDetailAction } from "apollo/actions";
import {
  ArrayParam,
  NumberParam,
  ObjectParam,
  QueryParamProvider,
  StringParam,
  useQueryParam,
} from "use-query-params";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));
export default function Index({
  GroupByData,
  siteFilter,
  reviewTrendFilterOptions,
  tab,
}) {
  const [groupBy, setGroupBy] = useState("MONTH");
  const [StartDate, setStartDate] = useQueryParam("StartDate", StringParam);
  const [EndDate, setEndDate] = useQueryParam("EndDate", StringParam);
  const [sitesSelected, setSitesSelected] = useQueryParam("Sites", ArrayParam);
  const [propertyFilter, setSelectedAdvancesPropeerties] = useState(null);
  const [reviewTrendFilter, setReviewTrendFilter] = useState("N_O_R");
  const { overAllRatingData } = GetOverAllRating(
    sitesSelected,
    groupBy,
    StartDate,
    EndDate,
    propertyFilter
  );
  const { ratingBreakdown } = GetRatingBreakDown(
    sitesSelected,
    groupBy,
    StartDate,
    EndDate,
    propertyFilter
  );
  const { sentimentsBreakdown } = GetSentimentsBreakdown(
    sitesSelected,
    groupBy,
    StartDate,
    EndDate,
    propertyFilter
  );
  const { reviewTrend } = GetReviewTrendData(
    sitesSelected,
    groupBy,
    StartDate,
    EndDate,
    propertyFilter,
    reviewTrendFilter
  );
  const { filters } = GetAdvancedFilterData();
  console.log(sitesSelected);

  const classes = useStyles();
  return (
    <Grid style={{ marginTop: 10 }} xs={12}>
      <Toolbar
        GroupByData={GroupByData}
        siteFilter={siteFilter}
        selectedValues={(data) => setSitesSelected(data)}
        selectedDateRange={(Data) => {
          setStartDate(Data.selection.startDate);
          setEndDate(Data.selection.endDate);
        }}
        handleResetFilter={() => {
          setStartDate(null);
          setEndDate(null);
          setSitesSelected([]);
        }}
        GroupBySelection={(data) => setGroupBy(data)}
        startDate={StartDate}
        endDate={EndDate}
        Advancefilters={filters}
        preSelectedSite={sitesSelected}
        selectedProperties={setSelectedAdvancesPropeerties}
        tab={tab}
      />
      <Divider />
      <div className={classes.root}>
        <Grid item container spacing={1}>
          <Grid item xs={3}>
            <BoxLayout label="Star Rating">
              <StarRating StarRatingData={overAllRatingData} />
            </BoxLayout>
          </Grid>

          <Grid item xs={5}>
            <BoxLayout label="Rating Breakdown">
              <RatingBreakdown ratingBreakdownData={ratingBreakdown} />
            </BoxLayout>
          </Grid>
          <Grid item xs={4}>
            <BoxLayout label="Sentiments Breakdown">
              {sentimentsBreakdown && <Sentiments data={sentimentsBreakdown} />}
            </BoxLayout>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <BoxLayout label="Review Trends">
          <ReviewTrend
            reviewTrendData={reviewTrend}
            filterSelected={reviewTrendFilter}
            setFilterSelected={(data) => {
              setReviewTrendFilter(data);
            }}
            filterData={reviewTrendFilterOptions}
          />
        </BoxLayout>
      </div>
    </Grid>
  );
}
