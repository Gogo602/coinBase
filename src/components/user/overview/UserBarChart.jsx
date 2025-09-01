import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function UserBarChart() {
    const data = [
        { name: 'Amazon', uv: 39 },
        { name: 'Google', uv: 46 },
        { name: 'iTunes', uv: 20 },
        { name: 'Payoneer', uv: 34 },
        { name: 'Bitcoin', uv: 42 },
        { name: 'Ethereum', uv: 36 },
        { name: 'Tecno', uv: 26 },
        { name: 'Paypal', uv: 40 },
        { name: 'Aliexpress', uv: 46 },
        { name: 'Konga', uv: 49 },
        { name: 'Jumia', uv: 44 },
    ];
    
    return (
        <div className="w-full h-96 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    barGap={10}
                    margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FD749B" />
                            <stop offset="100%" stopColor="#281AC8" />
                        </linearGradient> 
                    </defs>
                    <CartesianGrid stroke="#555" vertical={false} />
                    <XAxis dataKey="name" stroke="#fff" tickLine={false} axisLine={false} />
                    <YAxis stroke="#555" tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#FD749B', 
                            border: '1px solid #FD749B', 
                            borderRadius: '10px',
                            backdropFilter: 'blur(5px)'
                        }} 
                        itemStyle={{ color: '#f5f2f2ff' }} 
                    />
                    <Bar 
                        dataKey="uv" 
                        fill="url(#barGradient)"
                        barSize={20} 
                        radius={[10, 10, 0, 0]}
                        activeBar={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};