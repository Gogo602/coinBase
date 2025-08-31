import { AreaChart, Area, ResponsiveContainer } from "recharts";

const chartData = [
  { value: 0 },
  { value: 200 },
  { value: 100 },
  { value: 300 },
  { value: 250 },
  { value: 400 },
];

export default function Areas() {
    
    return (
        <div style={{ width: '100px', height: '50px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                    <defs>
                    <linearGradient
                        id='colorPv'
                        x1='0'
                        y1='0'
                        x2='0'
                        y2='1'>
                        <stop
                        offset='35%'
                        stopColor='#1CD1A1'
                        stopOpacity={0.1}
                        />
                        <stop
                        offset='95%'
                        stopColor='#f87171'
                        stopOpacity={0}
                        />
                    </linearGradient>
                    </defs>
                    <Area
                    type='monotone'
                    dataKey='value'
                    stroke='#1CD1A1'
                    fillOpacity={1}
                    fill='url(#colorPv)'
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}