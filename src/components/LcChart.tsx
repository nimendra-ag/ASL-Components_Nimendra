"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  { lc: "Ainshams", count: 186 },
  { lc: "Helwan", count: 305 },
  { lc: "Hyderabad", count: 237 },
  { lc: "Chennai", count: 73 },
  { lc: "FHCMC", count: 209 },
  { lc: "MUST", count: 214 },
  { lc: "Cairo", count: 150 },
  { lc: "Alexandria", count: 180 },
  { lc: "GUC", count: 220 },
  { lc: "Bangalore", count: 190 },
  { lc: "Mumbai", count: 210 },
  { lc: "Delhi", count: 230 },
  { lc: "Pune", count: 175 },
  { lc: "Kolkata", count: 160 },
  { lc: "Jaipur", count: 140 },
  { lc: "Lucknow", count: 155 },
  { lc: "Kanpur", count: 165 },
  { lc: "Nagpur", count: 145 },
  { lc: "Patna", count: 135 },
  { lc: "Bhopal", count: 125 },
  { lc: "Indore", count: 115 },
  { lc: "Vadodara", count: 105 },
  { lc: "Surat", count: 95 },
  { lc: "Ahmedabad", count: 85 },
  { lc: "Rajkot", count: 75 },
  { lc: "Jodhpur", count: 65 },
  { lc: "Udaipur", count: 55 },
  { lc: "Nashik", count: 45 },
  { lc: "Aurangabad", count: 35 },
  { lc: "Amritsar", count: 25 },
  { lc: "Ludhiana", count: 15 },
  { lc: "Chandigarh", count: 10 },
  { lc: "Shimla", count: 5 },
  { lc: "Mysore", count: 50 },
  { lc: "Coimbatore", count: 60 },
  { lc: "Trichy", count: 70 },
  { lc: "Madurai", count: 80 },
  { lc: "Salem", count: 90 },
  { lc: "Tirunelveli", count: 100 },
  { lc: "Vellore", count: 110 },
  { lc: "Thanjavur", count: 120 },
  { lc: "Erode", count: 130 },
  { lc: "Karur", count: 140 },
  { lc: "Dindigul", count: 150 },
  { lc: "Theni", count: 160 },
  { lc: "Sivakasi", count: 170 },
  { lc: "Nagercoil", count: 180 },
  { lc: "Kanyakumari", count: 190 },
  { lc: "Tuticorin", count: 200 },
  { lc: "Ramanathapuram", count: 210 },
  { lc: "Virudhunagar", count: 220 },
  { lc: "Namakkal", count: 230 },
];

const chartConfig = {
  count: {
    label: "count",
    color: "blue",
  },
} satisfies ChartConfig;

import { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          className="label"
          style={{ margin: 0, fontWeight: "bold", color: "#333" }}
        >{`${payload[0].payload.lc}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function LcChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LC Breakdown by selected Project</CardTitle>
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
                  dataKey="lc"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<CustomTooltip />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={5}>
                  <LabelList dataKey="count" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
