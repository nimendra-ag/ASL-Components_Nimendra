
"use client"

import React from 'react'
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Europe", visitors: 275, fill: "#E7AFFF" },
  { browser: "MEA", visitors: 200, fill: "#0D2535" },
  { browser: "AsiaPacific", visitors: 187, fill: "#54317B" },
  { browser: "Americas", visitors: 173, fill: "#8B5695" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Europe: {
    label: "Europe",
    color: "#E7AFFF",
  },
  MEA: {
    label: "MEA",
    color: "#0D2535",
  },
  AsiaPacific: {
    label: "Asia Pacific",
    color: "#54317B",
  },
  Americas: {
    label: "Americas",
    color: "#8B5695",
  },

} satisfies ChartConfig


export const RegionalPieChart = () => {
  return (
    <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle>Pie Chart - Legend</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart>
          <Pie data={chartData} dataKey="visitors" />
          <ChartLegend
            content={<ChartLegendContent nameKey="browser" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </CardContent>
  </Card>
  )
}
