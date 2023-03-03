import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "name": "Aug",
        "Chicken Fried Rice": 5972,
        "Beef Wellington": 7300,
        "amt": 2400
    },
    {
        "name": "Sep",
        "Chicken Fried Rice": 2985,
        "Beef Wellington": 7374,
        "amt": 2210
    },
    {
        "name": "Oct",
        "Chicken Fried Rice": 5345,
        "Beef Wellington": 8357,
        "amt": 2290
    },
    {
        "name": "Nov",
        "Chicken Fried Rice": 4077,
        "Beef Wellington": 9471,
        "amt": 2000
    },
    {
        "name": "Dec",
        "Chicken Fried Rice": 9299,
        "Beef Wellington": 2409,
        "amt": 2181
    },
    {
        "name": "Jan",
        "Chicken Fried Rice": 9036,
        "Beef Wellington": 3077,
        "amt": 2500
    },
    {
        "name": "Feb",
        "Chicken Fried Rice": 9286,
        "Beef Wellington": 3396,
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
                <Area type="monotone" dataKey="Chicken Fried Rice" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Beef Wellington" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
};

export default TopSellingChart;
