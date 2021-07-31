import { gql, useQuery } from "@apollo/client";

export const GET_OVERALL_RATING_DATA = gql`
  query overallRating(
    $start_date: String
    $end_date: String
    $review_sites: [String]
    $group_by: String
    $property_filter: GenericScalar
  ) {
    overallRating(
      start_date: $start_date
      end_date: $end_date
      review_sites: $review_sites
      group_by: $group_by
      property_filter: $property_filter
    ) {
      count: rating_count
      average: rating_average
      percentage: rating_percentage
    }
  }
`;

export const GET_RATING_BREAKDOWN_DATA = gql`
  query ratingBreakdown(
    $start_date: String
    $end_date: String
    $review_sites: [String]
    $group_by: String
    $property_filter: GenericScalar
  ) {
    ratingBreakdown(
      start_date: $start_date
      end_date: $end_date
      review_sites: $review_sites
      group_by: $group_by
      property_filter: $property_filter
    ) {
      label
      value
      count: rating_count

      percentage: rating_percentage
    }
    ratingCategory {
      label
      value
      color: fill_color
    }
  }
`;
export const GET_SENTIMENTS_BREAKDOWN_DATA = gql`
  query sentiment(
    $start_date: String
    $end_date: String
    $review_sites: [String]
    $group_by: String
    $property_filter: GenericScalar
  ) {
    sentimentBreakdown(
      start_date: $start_date
      end_date: $end_date
      review_sites: $review_sites
      group_by: $group_by
      property_filter: $property_filter
    ) {
      positive
      neutral
      negative
      name: x_axis
      yValue: y_axis
    }
    graphFormat(sentiment_breakdown: true) {
      type: graph_type

      fill: fill_color
      dataKey: data_key
    }
  }
`;

export const GET_REVIEWTREND_DATA = gql`
  query reviewtrend(
    $start_date: String
    $end_date: String
    $review_sites: [String]
    $group_by: String
    $property_filter: GenericScalar
    $option: String
  ) {
    review_trend(
      start_date: $start_date
      end_date: $end_date
      review_sites: $review_sites
      group_by: $group_by
      property_filter: $property_filter
      option: $option
    )
    graphFormat(review_trend: true) {
      dataKey: data_key
      type: graph_type
      fill: fill_color
      stroke
      fillOpacity: opacity
    }
  }
`;

export const GET_ADVANCED_FILTER_DATA = gql`
  query advancedFilter {
    propertyFilter
  }
`;
