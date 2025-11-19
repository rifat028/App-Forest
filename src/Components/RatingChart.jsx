import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratingData }) => {
  const Data = [...ratingData].reverse();
  return (
    <div className="w-full h-48 md:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={Data}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={25}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
