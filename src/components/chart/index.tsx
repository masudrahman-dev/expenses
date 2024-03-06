import React, { PureComponent } from "react";
import { BarChart, Bar, Cell } from "recharts";
import { data } from "./data";
import { useMeasure } from "react-use";

const getMax = () => {
  const v = data.map((item) => item.pv);
  const max = Math.max(...v);
  return max;
};

const ChartMonth = () => {
  const [ref, { width }] = useMeasure();
  return (
    <div ref={ref} className="mt-12">
      <BarChart width={width} height={100} data={data} barSize={16}>
        {/* <Tooltip /> */}
        <Bar dataKey="pv" fill="#8884d8">
          {data.map((entry, index) => {
            const isMax = entry.pv === getMax();
            return (
              <Cell
                key={`cell-${index}`}
                fill={isMax ? "#32A7E2" : "#D2DCE8"}
              />
            );
          })}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartMonth;
