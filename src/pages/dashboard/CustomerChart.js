import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Aug',
        Returning: 4000,
        New: 2400,
        amt: 2400,
    },
    {
        name: 'Sep',
        Returning: 3000,
        New: 1398,
        amt: 2210,
    },
    {
        name: 'Oct',
        Returning: 2000,
        New: 9800,
        amt: 2290,
    },
    {
        name: 'Nov',
        Returning: 2780,
        New: 3908,
        amt: 2000,
    },
    {
        name: 'Dec',
        Returning: 1890,
        New: 4800,
        amt: 2181,
    },
    {
        name: 'Jan',
        Returning: 2390,
        New: 3800,
        amt: 2500,
    },
    {
        name: 'Feb',
        Returning: 3490,
        New: 4300,
        amt: 2100,
    },
];


function CustomerChart() {
    return (
        <ResponsiveContainer width="99%" aspect={3}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="New" fill="#8884d8" />
                <Bar dataKey="Returning" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
        // <Doughnut
        //     data={data}
        // />
    );
};

export default CustomerChart;
