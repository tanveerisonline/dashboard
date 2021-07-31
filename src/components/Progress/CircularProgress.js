import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  greyShader: {
    position: "absolute",
    color: theme.palette.grey[200],
  },
  innerCircleTitle : {
          fontSize : 14,
          fontWeight : 700

  }
}));

function CircularProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="static"
        {...props}
        value={100}
        className={classes.greyShader}
        color="secondary"
      />
      <CircularProgress
        variant="static"
        {...props}
        style={{ transform: "rotate(-350deg)" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
        className={classes.innerCircleTitle}
        >
          {`${props.innerCircleValue}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic({ data, ...props }) {
  return (
    <CircularProgressWithLabel
      value={data}
      size={20}
      thickness={3}
      {...props}
    />
  );
}
