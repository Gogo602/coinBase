import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Custom label for the center of the doughnut, now takes completionPercentage as a prop
const renderCustomizedLabel = ({ cx, cy, completionPercentage }) => {
    return (
        <text
            x={cx}
            y={cy}
            fill="#FAA9C6"
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize: '12px', fontWeight: 'bold' }}
        >
            {`${completionPercentage}%`}
        </text>
    );
};

const Donut = ({ completionPercentage }) => {
    const data = [
        // We'll use the URL of the gradient as the color for the completed slice
        { name: 'Completed', value: completionPercentage, color: 'url(#gradientColor)' },
        { name: 'Remaining', value: 100 - completionPercentage, color: '#FAA9C6' },
    ];

    return (
        <ResponsiveContainer width="100%" height={100}>
            <PieChart>
                <defs>
                    {/* Define the SVG linear gradient here */}
                    <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="#FD749B" />
                        <stop offset="70%" stopColor="#281AC8" />
                    </linearGradient>
                </defs>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={44}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-360}
                    label={props => renderCustomizedLabel({ ...props, completionPercentage: completionPercentage })}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Donut;
