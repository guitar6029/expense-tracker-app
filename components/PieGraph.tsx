"use client"
import { useEffect, useState } from "react"
import { Label, Pie, PieChart } from "recharts"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const fillColors = [
    "var(--color-chrome)",
    "var(--color-safari)",
    "var(--color-firefox)",
    "var(--color-edge)",
    "var(--color-other)",
]


type TransactionType = {
    id: string; // Unique identifier for the transaction
    category: string;
    text: string; // Description or label for the transaction
    amount: number; // Amount associated with the transaction
    createdAt: Date; // Timestamp of when the transaction was created
};

type ChartData = {
    data: TransactionType[];
}


const PieGraph = ({ data }: ChartData) => {

    const [categoryChartData, setDataProp] = useState<Array<{ category: string; amount: number }>>([]);

    useEffect(() => {
        if (data && data.length > 0) {
            // Group by category and sum the amounts
            const updatedChartData = data.reduce((acc: Array<{ category: string; amount: number; fill: string }>, categoryItem) => {
                // Capitalize the first letter of the category
                const category = categoryItem.category.charAt(0).toUpperCase() + categoryItem.category.slice(1);

                // Find if the category already exists in the accumulator
                const existingCategory = acc.find(item => item.category === category);

                if (existingCategory) {
                    // If the category exists, sum the amount
                    existingCategory.amount += categoryItem.amount;
                } else {
                    // If the category doesn't exist, add a new entry
                    acc.push({
                        category: category,
                        amount: categoryItem.amount ? Math.abs(categoryItem.amount) : 0,
                        fill: fillColors[acc.length], // Assign a color from the fillColors array
                    });
                }
                return acc;
            }, []);  // Start with an empty array as the accumulator

            setDataProp(updatedChartData);  // Set the new chart data
            
        } else {
            setDataProp([]);  // If no data, set empty array
        }
    }, [data]);  // Run when the `data` prop changes

    if (!categoryChartData || categoryChartData && categoryChartData.length === 0) {

        return (
            <>
            <div className="flex flex-row items-center justify-center text-2xl p-4">No Transactions</div>
            </>
        );

    }
    
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Categories</CardTitle>
                <CardDescription>Date From to Date</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={categoryChartData}
                            dataKey="amount"
                            nameKey="category"
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
                                                    {/* {totalVisitors.toLocaleString()} */}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Spend Amount
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing all categories
                </div>
            </CardFooter>
        </Card>
    )
}

export default PieGraph;