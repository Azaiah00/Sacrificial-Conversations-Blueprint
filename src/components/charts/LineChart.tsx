"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'M1', current: 1200, strategy: 1200 },
  { month: 'M2', current: 1250, strategy: 2500 },
  { month: 'M3', current: 1300, strategy: 4800 },
  { month: 'M4', current: 1350, strategy: 8200 },
  { month: 'M5', current: 1400, strategy: 15600 },
  { month: 'M6', current: 1450, strategy: 28500 },
];

export default function GrowthChart() {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="#52525b" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false} 
            fontFamily="var(--font-mono)"
          />
          <YAxis 
            stroke="#52525b" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value / 1000}k`} 
            fontFamily="var(--font-mono)"
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000000', borderColor: '#27272a', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
            itemStyle={{ color: '#ffffff' }}
            cursor={{ stroke: '#52525b', strokeWidth: 1 }}
          />
          <Area 
            type="monotone" 
            dataKey="strategy" 
            stroke="#22c55e" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorStrategy)" 
            name="Optimized Growth"
          />
          <Area 
            type="monotone" 
            dataKey="current" 
            stroke="#ef4444" 
            strokeWidth={2}
            strokeDasharray="4 4"
            fillOpacity={1} 
            fill="url(#colorCurrent)" 
            name="Current Trajectory"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
