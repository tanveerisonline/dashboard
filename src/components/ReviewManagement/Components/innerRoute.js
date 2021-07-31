import React, { useState } from "react";
import { useParams } from "react-router";
import Snapshot from "./snapshot";
import Benchmark from "./benchmark";
// import {
//   GetOverAllRating,
//   GetRatingBreakDown,
//   GetSentimentsBreakdown,
//   GetReviewTrendData,
// } from "../actions";
import { UserDetailAction } from "apollo/actions";

import {
  NumberParam,
  QueryParamProvider,
  StringParam,
  useQueryParam,
} from "use-query-params";

export default function Content() {
  // const [dateSelected, setdateSelected] = useState("six_months");
  // // const [sitesSelected, setSitesSelected] = useState(null);
  // const [groupBy, setGroupBy] = useState("");
  // const [StartDate, setStartDate] = useQueryParam("S_D", StringParam);
  // const [EndDate, setEndDate] = useQueryParam("E_D", StringParam);
  // const [sitesSelected, setSitesSelected] = useQueryParam("Sites", StringParam);
  let { tab } = useParams();
  const { group_by, review_sites, review_trend_options } = UserDetailAction();

  return (
    <div style={{}}>
      {tab == "snapshot" && (
        <Snapshot
          GroupByData={group_by}
          siteFilter={review_sites}
          reviewTrendFilterOptions={review_trend_options}
          tab={tab}
        />
      )}
      {tab == "benchmark" && (
        <Benchmark
          tab={tab}
          GroupByData={group_by}
          graphFilters={review_trend_options}
        />
      )}
    </div>
  );
}
