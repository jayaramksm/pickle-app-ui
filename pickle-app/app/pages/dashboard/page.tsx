"use client";

import { Box } from "grommet";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import StatsCard from "../../components/layout/StatsCard";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Layout from "@/app/components/layout/layout";

const data = [
    { name: "Jan", orders: 120 },
    { name: "Feb", orders: 180 },
    { name: "Mar", orders: 90 },
    { name: "Apr", orders: 200 },
    { name: "May", orders: 150 },
    { name: "Jun", orders: 240 },
];

export default function DashboardPage() {
    return (
        <Layout>
            {/* <> */}
                {/* Stat Cards */}
                <Box direction="row" gap="medium">
                    <StatsCard title="Total Users" value="1,240" />
                    <StatsCard title="Orders" value="312" />
                    <StatsCard title="Revenue" value="$12,500" />
                </Box>

                {/* Chart Section */}
                <Box
                    background="white"
                    height="350px"
                    round="small"
                    pad="medium"
                    elevation="small"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="orders"
                                stroke="#7c3aed"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            {/* </> */}
        </Layout>

    );
}
