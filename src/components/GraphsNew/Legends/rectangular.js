import React from "react";
import { makeStyles } from "@material-ui/core";

import { Surface, Symbols } from "recharts";
const useStyles = makeStyles((theme) => ({
  legendText: {
    fontSize: 14,
    fontWeight: 400,
    textTransform: "capitalize",
    marginLeft: 4,
  },
}));
export default function WrappedLegends(props) {
  const classes = useStyles();

  const {
    payload,
    hideShowGraphLegendClick,
    isDisabled,
    legendalign,
    AdditionalStyles,
  } = props;
  return (
    <div
      style={{
        ...AdditionalStyles,
      }}
    >
      {payload?.map((entry) => {
        const { dataKey, color } = entry;
        // const active = ""; //_.includes(this.state.disabled, dataKey);
        const style = {
          marginRight: 10,
          color: isDisabled?.includes(dataKey) ? "#AAA" : "#000",
        };

        return (
          <span
            className="legend-item"
            onClick={() => hideShowGraphLegendClick(dataKey)}
            style={style}
          >
            <Surface width={18} height={22} viewBox="0 0 10 10">
              <Symbols cx={5} cy={16} type="square" size={50} fill={color} />
              {isDisabled?.includes(dataKey) && (
                <Symbols cx={5} cy={16} type="square" size={25} fill={"#FFF"} />
              )}
            </Surface>
            <span className={classes.legendText}>{dataKey}</span>
            {legendalign === "left" && <br />}
          </span>
        );
      })}
    </div>
  );
}
