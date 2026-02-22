"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

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
    <div className="w-full h-[450px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <defs>
            <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05}/>
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <PolarGrid 
            stroke="#27272a" 
            strokeWidth={1} 
            strokeDasharray="4 4" 
            gridType="polygon"
          />
          
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ 
              fill: '#e4e4e7', 
              fontSize: 12, 
              fontWeight: 700, 
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em'
            }} 
          />
          
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          
          <Radar
            name="Current Performance"
            dataKey="A"
            stroke="#dc2626"
            strokeWidth={3}
            fill="url(#currentGradient)"
            fillOpacity={1}
            style={{ filter: 'url(#glow)' }}
          />
          
          <Radar
            name="Optimized Target"
            dataKey="B"
            stroke="#22c55e"
            strokeWidth={2}
            strokeDasharray="6 6"
            fill="url(#targetGradient)"
            fillOpacity={1}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.9)', 
              borderColor: '#27272a', 
              color: '#ffffff', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '12px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            itemStyle={{ color: '#ffffff' }}
            cursor={{ stroke: '#52525b', strokeWidth: 1 }}
          />
          
          <Legend 
            wrapperStyle={{ paddingTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
