import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const Dashboard = () => {
    const [data,] = useData([]);
    return (
        <div className='grid lg:grid-cols-2 mt-20 gap-8 max-w-screen-xl mx-auto'>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-600  mb-6'>MONTH WISE SELL</h2>
                <LineChart width={400} height={300} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                </LineChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-600  mb-6'>Investment VS Revenue</h2>
                <AreaChart width={400} height={300} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-600  mb-6'>Investment VS Revenue</h2>
                <BarChart width={400} height={300} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-600  mb-6'>Investment VS Revenue</h2>
                <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

        </div>
    );
};

export default Dashboard;