"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import BaseChart from "./BaseChart";

export default function SeverityChart({
  data,
}: {
  data: { level: string; count: number }[];
}) {
  return (
    <BaseChart>
      <BarChart data={data}>
        <XAxis dataKey="level" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </BaseChart>
  );
}
