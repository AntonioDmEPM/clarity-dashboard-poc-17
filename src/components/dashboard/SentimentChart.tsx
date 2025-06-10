
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: '00:00', positive: 65, neutral: 25, negative: 10, csat: 4.2 },
  { time: '04:00', positive: 70, neutral: 22, negative: 8, csat: 4.4 },
  { time: '08:00', positive: 62, neutral: 28, negative: 10, csat: 4.1 },
  { time: '12:00', positive: 68, neutral: 24, negative: 8, csat: 4.5 },
  { time: '16:00', positive: 72, neutral: 20, negative: 8, csat: 4.6 },
  { time: '20:00', positive: 75, neutral: 18, negative: 7, csat: 4.7 },
];

export const SentimentChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Customer Sentiment & CSAT Evolution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
              label={{ value: 'Sentiment %', angle: -90, position: 'insideLeft' }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
              domain={[0, 5]}
              label={{ value: 'CSAT Score', angle: 90, position: 'insideRight' }}
            />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'csat') return [`${value}/5`, 'CSAT Score'];
                return [`${value}%`, name === 'positive' ? 'Positive' : name === 'neutral' ? 'Neutral' : 'Negative'];
              }}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="positive"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              name="Positive"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="neutral"
              stroke="#6b7280"
              strokeWidth={2}
              dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }}
              name="Neutral"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="negative"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              name="Negative"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="csat"
              stroke="#3b82f6"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
              name="CSAT Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
