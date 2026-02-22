"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Content Quality', A: 95, B: 100, fullMark: 100 },
  { subject: 'Audio Engineering', A: 85, B: 95, fullMark: 100 },
  { subject: 'Brand Authority', A: 70, B: 95, fullMark: 100 },
  { subject: 'Thumbnail CTR', A: 15, B: 90, fullMark: 100 },
  { subject: 'SEO / Metadata', A: 10, B: 95, fullMark: 100 },
  { subject: 'Shorts Velocity', A: 5, B: 90, fullMark: 100 },
];

export default function AuditRadarChart() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#3f3f46" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#a1a1aa', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-mono)' }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Current Performance"
            dataKey="A"
            stroke="#dc2626"
            strokeWidth={3}
            fill="#dc2626"
            fillOpacity={0.2}
          />
          <Radar
            name="Optimized Target"
            dataKey="B"
            stroke="#22c55e"
            strokeWidth={2}
            strokeDasharray="4 4"
            fill="transparent"
            fillOpacity={0}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000000', borderColor: '#27272a', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
            itemStyle={{ color: '#ffffff' }}
            cursor={{ stroke: '#52525b', strokeWidth: 1 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
