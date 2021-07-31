import {
  GET_OVERALL_RATING_DATA,
  GET_RATING_BREAKDOWN_DATA,
  GET_SENTIMENTS_BREAKDOWN_DATA,
  GET_REVIEWTREND_DATA,
  GET_ADVANCED_FILTER_DATA,
} from "./queries";
import { useQuery, useMutation } from "@apollo/client";
export function GetOverAllRating(
  sitesSelected,
  groupBy,
  StartDate,
  EndDate,
  propertyFilter
) {
  const { data, error, loading } = useQuery(GET_OVERALL_RATING_DATA, {
    variables: {
      start_date: StartDate,
      end_date: EndDate,
      review_sites: sitesSelected,
      group_by: groupBy,
      property_filter: propertyFilter,
    },
  });
  return {
    overAllRatingData: data ? data.overallRating : [],
    error,
    loading,
  };
}
export function GetRatingBreakDown(
  sitesSelected,
  groupBy,
  StartDate,
  EndDate,
  propertyFilter
) {
  const { data, error, loading } = useQuery(GET_RATING_BREAKDOWN_DATA, {
    variables: {
      start_date: StartDate,
      end_date: EndDate,
      review_sites: sitesSelected,
      group_by: groupBy,
      property_filter: propertyFilter,
    },
  });
  return {
    ratingBreakdown: data ? data : [],
    error,
    loading,
  };
}
export function GetSentimentsBreakdown(
  sitesSelected,
  groupBy,
  StartDate,
  EndDate,
  propertyFilter
) {
  const { data, error, loading } = useQuery(GET_SENTIMENTS_BREAKDOWN_DATA, {
    variables: {
      start_date: StartDate,
      end_date: EndDate,
      review_sites: sitesSelected,
      group_by: groupBy,
      property_filter: propertyFilter,
    },
  });
  return {
    sentimentsBreakdown: data ? data : [],
    error,
    loading,
  };
}
export function GetReviewTrendData(
  sitesSelected,
  groupBy,
  StartDate,
  EndDate,
  propertyFilter,
  reviewTrendFilter
) {
  const { data, error, loading } = useQuery(GET_REVIEWTREND_DATA, {
    variables: {
      start_date: StartDate,
      end_date: EndDate,
      review_sites: sitesSelected,
      group_by: groupBy,
      property_filter: propertyFilter,
      option :    reviewTrendFilter
    },
  });
  return {
    reviewTrend: data ? data : [],
    error,
    loading,
  };
}

export function GetAdvancedFilterData() {
  const { data, error, loading } = useQuery(GET_ADVANCED_FILTER_DATA);
  return {
    filters: data ? data.propertyFilter : [],
    error,
    loading,
  };
}
