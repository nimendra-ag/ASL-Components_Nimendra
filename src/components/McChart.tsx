"use client";

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  { mc: "Egypt", count: 186 },
  { mc: "India", count: 305 },
  { mc: "Nederlands", count: 237 },
  { mc: "Pakistan", count: 73 },
  { mc: "Turkey", count: 209 },
  { mc: "Cambodia", count: 214 },
  { mc: "Brazil", count: 192 },
  { mc: "China", count: 321 },
  { mc: "Germany", count: 178 },
  { mc: "Japan", count: 256 },
  { mc: "USA", count: 400 },
  { mc: "Canada", count: 150 },
  { mc: "Australia", count: 220 },
  { mc: "Russia", count: 310 },
  { mc: "France", count: 190 },
  { mc: "Italy", count: 230 },
  { mc: "Spain", count: 210 },
  { mc: "South Korea", count: 280 },
  { mc: "Mexico", count: 170 },
  { mc: "Argentina", count: 140 },
  { mc: "South Africa", count: 200 },
  { mc: "Nigeria", count: 130 },
  { mc: "Kenya", count: 120 },
  { mc: "Indonesia", count: 260 },
  { mc: "Malaysia", count: 240 },
  { mc: "Thailand", count: 270 },
  { mc: "Vietnam", count: 250 },
  { mc: "Philippines", count: 180 },
  { mc: "Bangladesh", count: 160 },
];

const chartConfig = {
  count: {
    label: "count",
    color: "orange",
  },
} satisfies ChartConfig;

import { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <p
          className="label"
          style={{ margin: 0, fontWeight: "bold" }}
        >{`${payload[0].payload.mc}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export function McChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>MC Breakdown by selected Project</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div style={{ height: 400, overflowY: "auto" }}>
            <ResponsiveContainer width="100%" height={chartData.length * 30}>
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  left: -20,
                }}
              >
                <XAxis type="number" dataKey="count" hide />
                <YAxis
                  dataKey="mc"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<CustomTooltip />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={5} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
