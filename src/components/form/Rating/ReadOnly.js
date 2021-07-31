import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    "& span.MuiRating-icon.MuiRating-iconEmpty": {
      visibility: "hidden",
    },
  },
}));

const ReadOnlyRating = (props) => {
  const classes = useStyles();

  const { value, ...rest } = props;
  return (
    <div className={classes.root}>
      <Rating value={value} readOnly size="small" emptyIcon={null} {...rest} />
    </div>
  );
};

ReadOnlyRating.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ReadOnlyRating;
