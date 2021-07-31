import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

export default function ProgressBar(props) {
  const { dataValue, color } = props;

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: color,
    },
  }))(LinearProgress);

  return <BorderLinearProgress variant="determinate" value={dataValue} />;
}
ProgressBar.propTypes = {};

ProgressBar.defaultProps = {
  dataValue: "0",
  color: "#46D479",
};
