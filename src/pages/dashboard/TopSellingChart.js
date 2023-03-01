import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "name": "Aug",
        "uv": 5972,
        "pv": 7300,
        "amt": 2400
    },
    {
        "name": "Sep",
        "uv": 2985,
        "pv": 7374,
        "amt": 2210
    },
    {
        "name": "Oct",
        "uv": 5345,
        "pv": 8357,
        "amt": 2290
    },
    {
        "name": "Nov",
        "uv": 4077,
        "pv": 9471,
        "amt": 2000
    },
    {
        "name": "Dec",
        "uv": 9299,
        "pv": 2409,
        "amt": 2181
    },
    {
        "name": "Jan",
        "uv": 9036,
        "pv": 3077,
        "amt": 2500
    },
    {
        "name": "Feb",
        "uv": 9286,
        "pv": 3396,
        "amt": 2100
    }
];

function TopSellingChart() {
    return (
        <ResponsiveContainer width="99%" aspect={3}>
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
};

export default TopSellingChart;
