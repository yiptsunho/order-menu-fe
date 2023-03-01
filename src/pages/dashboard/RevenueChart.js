import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RevenueChart() {
    const data = [
        {
            name: 'Aug',
            uv: 4000,
            amt: 2400,
        },
        {
            name: 'Sep',
            uv: 3000,
            amt: 2210,
        },
        {
            name: 'Oct',
            uv: 2000,
            amt: 2290,
        },
        {
            name: 'Nov',
            uv: 2780,
            amt: 2000,
        },
        {
            name: 'Dec',
            uv: 1890,
            amt: 2181,
        },
        {
            name: 'Jan',
            uv: 2390,
            amt: 2500,
        },
        {
            name: 'Feb',
            uv: 3490,
            amt: 2100,
        },
    ];

    return (
        <ResponsiveContainer width="99%" aspect={3}>
            <LineChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        // <Line
        //     data={data}
        // />
    )
};

export default RevenueChart;
