"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface GrowthChartProps {
  postsPerWeek: number;
}

export default function GrowthChart({ postsPerWeek }: GrowthChartProps) {
  // Calculate data based on postsPerWeek
  const calculateData = () => {
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
    const currentTrend = [2000, 2200, 2100, 2400, 2300, 2500];
    
    let base = 2000;
    const growthRate = 1.1 + (postsPerWeek * 0.05);
    
    return months.map((month, index) => {
      if (index > 0) base = base * growthRate;
      return {
        name: month,
        current: currentTrend[index],
        optimized: Math.round(base)
      };
    });
  };

  const data = calculateData();

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#52525b" 
            tick={{ fill: '#71717a', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#52525b" 
            tick={{ fill: '#71717a', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000000', borderColor: '#27272a', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
            itemStyle={{ color: '#ffffff' }}
            formatter={(value: number) => [value.toLocaleString(), undefined]}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '12px' }} />
          <Line 
            type="monotone" 
            dataKey="current" 
            name="Current Trajectory" 
            stroke="#52525b" 
            strokeWidth={2} 
            strokeDasharray="5 5" 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="optimized" 
            name="Optimized Growth" 
            stroke="#dc2626" 
            strokeWidth={3} 
            dot={{ fill: '#dc2626', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
