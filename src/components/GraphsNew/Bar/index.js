import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import CircularLegend from "components/GraphsNew/Legends/circularLegend";

export default function BarChartComponent(props) {
  const {
    data,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    maxBarSize,
    stackId,
    legendsProps,
    ShowLegends,
    legendType,
    AdditonalLegendsStyles,
    mainData,
    graphData,
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

  // console.log(graphData);
  // console.log(mainData);

  useEffect(() => {}, [render, graphData]);
  return (
    <ResponsiveContainer height={height}>
      <BarChart
        width={width}
        height={height}
        data={mainData}
        margin={{
          top: 20,
          right: 30,
          // left: 20,
          bottom: 5,
        }}
        {...rest}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} dataKey="yValue" />
        <Tooltip />
        {ShowLegends && (
          <Legend
            iconSize={20}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            layout={legendlayout}
            onClick={(e) => hideShowGraphLegendClick(e)}
            content={
              legendType === "circular" && (
                <CircularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
              )
            }
            {...legendsProps}
          />
        )}
        {graphData?.map((item, index) => {
          // console.log(item);
          return (
            <Bar
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              stackId={stackId}
              fillOpacity={item.fillOpacity && item.fillOpacity}
              hide={isDisabled.includes(item.dataKey)}
              maxBarSize={maxBarSize}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {};

BarChartComponent.defaultProps = {
  legendVerticalAlign: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: window.innerWidth,
  maxBarSize: 20,
  stackId: 1,
  legendType: "circular",
  ShowLegends: true,
};
