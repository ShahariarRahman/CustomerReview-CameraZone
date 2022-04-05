import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        { name: 'Page A', uv: 210, pv: 1500, amt: 1300 },
        { name: 'Page B', uv: 400, pv: 2000, amt: 1800 },
        { name: 'Page C', uv: 700, pv: 5000, amt: 4500 },
        { name: 'Page D', uv: 550, pv: 4900, amt: 4500 },
        { name: 'Page E', uv: 600, pv: 6500, amt: 6000 },
        { name: 'Page F', uv: 650, pv: 7800, amt: 7500 },

    ];
    const data2 = [
        { name: 'Page A', uv: 110, pv: 6500, amt: 1300 },
        { name: 'Page B', uv: 200, pv: 1000, amt: 1800 },
        { name: 'Page C', uv: 300, pv: 2000, amt: 4500 },
        { name: 'Page D', uv: 450, pv: 3900, amt: 4500 },
        { name: 'Page E', uv: 500, pv: 5500, amt: 6000 },
        { name: 'Page F', uv: 660, pv: 7800, amt: 7500 },

    ];
    return (
        <div className='grid grid-cols-2 mt-16 gap-8'>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-500 mb-6'>MONTH WISE SELL</h2>
                <LineChart width={400} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-500 mb-6'>MONTH WISE SELL</h2>
                <AreaChart width={400} height={300} data={data}
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
                    <Tooltip />
                    <Area type="monotone" dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-500 mb-6'>MONTH WISE SELL</h2>
                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-blue-500 mb-6'>MONTH WISE SELL</h2>
                <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data2} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>

        </div>
    );
};

export default Dashboard;