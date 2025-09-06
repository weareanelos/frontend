"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "frontend", visitors: 275, fill: "#3B82F6" },
  { browser: "backend", visitors: 200, fill: "#8B5CF6" },
  { browser: "socialmedia", visitors: 287, fill: "#10B981" },
  { browser: "uiux", visitors: 173, fill: "#F97316" },
  { browser: "videomaker", visitors: 190, fill: "#EF4444" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  frontend: {
    label: "Desenvolvedor Front-end",
    color: "#3B82F6",
  },
  backend: {
    label: "Desenvolvedor Back-end",
    color: "#8B5CF6",
  },
  socialmedia: {
    label: "Social Media",
    color: "#10B981",
  },
  uiux: {
    label: "Designer UI/UX",
    color: "#F97316",
  },
  videomaker: {
    label: "Videomaker",
    color: "#EF4444",
  },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <CardContent className="flex flex-col md:flex-row gap-8 pb-0">
      <section className="flex flex-1 pb-0 w-full md:w-1/2">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px] w-full md:w-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </section>
      <section className="w-full md:w-[49%]">
        {chartData.map((data) => {
          const chartInfo =
            chartConfig[data.browser as keyof typeof chartConfig];

          return (
            <div
              key={data.browser}
              className="flex items-center justify-between mt-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-[2px]"
                  style={{
                    backgroundColor:
                      "color" in chartInfo ? chartInfo.color : "transparent",
                  }}
                />
                <span className="text-sm font-medium text-foreground">
                  {chartInfo.label}
                </span>
              </div>
              {data.visitors && (
                <>
                  <div className="flex items-baseline gap-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />{" "}
                    {
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {((data.visitors / totalVisitors) * 100).toFixed(2)}%
                      </span>
                    }
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
    </CardContent>
  );
}
