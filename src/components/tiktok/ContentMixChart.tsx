"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'High-Value Clips', value: 60, color: '#dc2626' }, // Red
  { name: 'Community Reply', value: 20, color: '#ffffff' }, // White
  { name: 'Trending/Skits', value: 10, color: '#52525b' }, // Zinc-600
  { name: 'BTS/Vlog', value: 10, color: '#27272a' }, // Zinc-800
];

export default function ContentMixChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#000000', borderColor: '#27272a', color: '#ffffff', fontSize: '12px' }}
            itemStyle={{ color: '#ffffff' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#a1a1aa' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
