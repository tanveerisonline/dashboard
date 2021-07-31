// import "./styles.css";
import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Legend,
  Area,
  Surface,
  Symbols,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import PropTypes from "prop-types";
import CircularLegend from "components/GraphsNew/Legends/circularLegend";

export default function LineChartComponent(props) {
  const {
    data,
    width,
    height,
    legendVerticalAling,
    legendlayout,
    legendalign,
    AdditonalLegendsStyles,
    legendsProps,
    ShowLegends,
    legendType,
    ...rest
  } = props;
  const [isDisabled, setIsDisabled] = useState([]);
  const [render, setRerender] = useState(false);

  const hideShowGraphLegendClick = (payload) => {
    let disabledGraph = [];
    disabledGraph = isDisabled;
    if (disabledGraph.includes(payload)) {
      var index = disabledGraph.indexOf(payload);
      disabledGraph.splice(index, 1);
    } else {
      disabledGraph.push(payload);
    }
    setIsDisabled(disabledGraph);

    
    render ? setRerender(false) : setRerender(true);
  };

  useEffect(() => {}, [render]);
  return (
    <ResponsiveContainer height={height}>
      <LineChart width={width} height={height} data={data?.data} {...rest}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} />
        <Tooltip />
        {ShowLegends && (
          <Legend
            iconSize={20}
            verticalAlign={legendVerticalAling}
            align={legendalign}
            layout={legendlayout}
            onClick={(e) => hideShowGraphLegendClick(e)}
            content={
              legendType &&
              "circular" && (
                <CircularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
              )
            }
          />
        )}

        {data?.graphs?.map((item, index) => {
          
          return (
            // !isDisabled.includes(item.dataKey) && (
            <Line
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              hide={isDisabled.includes(item.dataKey)}
              dot={false}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartComponent.propTypes = {};

LineChartComponent.defaultProps = {
  legendVerticalAling: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: window.innerWidth,
  legendType: "circular",
  ShowLegends: true,
};
