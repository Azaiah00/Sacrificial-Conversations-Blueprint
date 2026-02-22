"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { subject: 'Hook Quality', A: 3, B: 9, fullMark: 10 },
  { subject: 'Video Editing', A: 5, B: 9, fullMark: 10 },
  { subject: 'SEO/Hashtags', A: 4, B: 9, fullMark: 10 },
  { subject: 'Consistency', A: 6, B: 8, fullMark: 10 },
  { subject: 'Engagement', A: 3, B: 9, fullMark: 10 },
  { subject: 'Visual Identity', A: 5, B: 10, fullMark: 10 },
];

export default function TikTokAuditRadar() {
  return (
    <div className="w-full h-[350px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#27272a" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#a1a1aa', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-mono)' }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
          <Radar
            name="Current Status"
            dataKey="A"
            stroke="#ef4444"
            strokeWidth={2}
            fill="#ef4444"
            fillOpacity={0.2}
          />
          <Radar
            name="Target (With Us)"
            dataKey="B"
            stroke="#22c55e"
            strokeWidth={2}
            fill="#22c55e"
            fillOpacity={0.1}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000000', borderColor: '#27272a', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
            itemStyle={{ color: '#ffffff' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', fontFamily: 'var(--font-mono)', paddingTop: '10px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
