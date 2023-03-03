import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RevenueChart() {
    const data = [
        {
            name: 'Aug',
            total: 4000,
            amt: 2400,
        },
        {
            name: 'Sep',
            total: 3000,
            amt: 2210,
        },
        {
            name: 'Oct',
            total: 2000,
            amt: 2290,
        },
        {
            name: 'Nov',
            total: 2780,
            amt: 2000,
        },
        {
            name: 'Dec',
            total: 1890,
            amt: 2181,
        },
        {
            name: 'Jan',
            total: 2390,
            amt: 2500,
        },
        {
            name: 'Feb',
            total: 3490,
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
                <Line type="monotone" dataKey="total" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        // <Line
        //     data={data}
        // />
    )
};

export default RevenueChart;
