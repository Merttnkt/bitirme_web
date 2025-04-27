import React from 'react';

// Basit bir SVG çizgi grafik komponenti
interface SimpleLineChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  color?: string;
}

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ data, labels = [], height = 100, color = '#1976d2' }) => {
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const width = 260;
  const stepX = width / (data.length - 1);
  const stepY = max === min ? 1 : (max - min);
  const points = data.map((val, i) => {
    const x = i * stepX;
    const y = height - ((val - min) / stepY) * (height - 20) - 10;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} style={{ background: '#f5f5f5', borderRadius: 8 }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth={3}
        points={points}
      />
      {data.map((val, i) => {
        const x = i * stepX;
        const y = height - ((val - min) / stepY) * (height - 20) - 10;
        return <circle key={i} cx={x} cy={y} r={4} fill={color} />;
      })}
      {labels.length === data.length && labels.map((label, i) => (
        <text key={i} x={i * stepX} y={height - 2} fontSize="10" textAnchor="middle" fill="#888">{label}</text>
      ))}
    </svg>
  );
};

export default SimpleLineChart;
