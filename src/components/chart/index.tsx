import React, { useState } from "react";
import { BarChart, Bar, Cell } from "recharts";
import { data } from "./data";
import { useMeasure } from "react-use";

const getMax = () => {
  const v = data.map((item) => item.pv);
  const max = Math.max(...v);
  return max;
};

const ChartMonth = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, { width }] = useMeasure();

  return (
    <div ref={ref}>
      <BarChart width={width} height={60} data={data} barSize={16}>
        {/* <Tooltip /> */}
        <Bar dataKey="pv" fill="#D2DCE8">
          {data.map((entry, index) => {
            const isMax = entry.pv === getMax();
            return (
              <Cell
                key={`cell-${index}`}
                fill={
                  hoveredIndex === index
                    ? "#157AFF"
                    : isMax
                    ? "#157AFF"
                    : "#D2DCE8"
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            );
          })}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartMonth;
