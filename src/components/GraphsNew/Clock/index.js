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
  BarChart,
  Bar,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import PropTypes from "prop-types";

export default function BarChartComponent(props) {
  const {
    data,
    width,
    height,
    legendVerticalAling,
    legendlayout,
    legendalign,
    maxBarSize,
    stackId,
    ...rest
  } = props;
  const [isDisabled, setIsDisabled] = useState([]);
  const [render, setRerender] = useState(false);
  const wrappedLegends = ({ payload }) => {
    return (
      <div style={{}}>
        {payload.map((entry) => {
          const { dataKey, color } = entry;
          const active = ""; //_.includes(this.state.disabled, dataKey);
          const style = {
            marginRight: 10,
            color: isDisabled.includes(dataKey) ? "#AAA" : "#000",
          };

          return (
            <span
              className="legend-item"
              onClick={() => hideShowGraphLegendClick(dataKey)}
              style={style}
            >
              <Surface width={10} height={10} viewBox="0 0 10 10">
                <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
                {isDisabled.includes(dataKey) && (
                  <Symbols
                    cx={5}
                    cy={5}
                    type="circle"
                    size={25}
                    fill={"#FFF"}
                  />
                )}
              </Surface>
              <span>{dataKey}</span>
              {legendalign == "left" && <br />}
            </span>
          );
        })}
      </div>
    );
  };

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
      <RadialBarChart
        width={width}
        height={height}
        data={data?.data}
        cx={150}
        cy={150}
        innerRadius={32}
        outerRadius={140}
        barSize={7}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        {...rest}
      >
        <CartesianGrid vertical={false} />
        {/* <XAxis dataKey="name" />
        <YAxis axisLine={false} /> */}
        <Tooltip />

        <Legend
          iconSize={20}
          verticalAlign={legendVerticalAling}
          align={legendalign}
          layout={legendlayout}
          //   onClick={(e) => hideShowGraphLegendClick(e)}
          // content={wrappedLegends}
        />

        {data?.graphs?.map((item) => (
          <RadialBar
              minAngle={55}
            //   label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey={item.dataKey}
            fill = {item.fill}
          />
        ))}
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {};

BarChartComponent.defaultProps = {
  legendVerticalAling: "middle",
  legendlayout: "vertical",
  legendalign: "left",
  height: 400,
  width: window.innerWidth,
  maxBarSize: 30,
  stackId: 1,
};
