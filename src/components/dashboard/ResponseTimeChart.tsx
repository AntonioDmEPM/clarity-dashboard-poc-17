
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { hour: '6 AM', avgTime: 0.8, target: 1.0 },
  { hour: '9 AM', avgTime: 1.2, target: 1.0 },
  { hour: '12 PM', avgTime: 0.9, target: 1.0 },
  { hour: '3 PM', avgTime: 1.1, target: 1.0 },
  { hour: '6 PM', avgTime: 0.7, target: 1.0 },
  { hour: '9 PM', avgTime: 0.6, target: 1.0 },
];

export const ResponseTimeChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Average Response Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="hour" 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
              label={{ value: 'Seconds', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value}s`, 
                name === 'avgTime' ? 'Avg Response Time' : 'Target'
              ]}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              cursor={{ fill: 'rgba(128, 128, 128, 0.15)' }}
            />
            <Bar 
              dataKey="avgTime" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              name="avgTime"
            />
            <Bar 
              dataKey="target" 
              fill="#10b981" 
              fillOpacity={0.3}
              radius={[4, 4, 0, 0]}
              name="target"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
