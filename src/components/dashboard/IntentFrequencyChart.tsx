
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { hour: '6 AM', billing: 45, technical: 32, general: 28, product: 15, refund: 8 },
  { hour: '9 AM', billing: 52, technical: 38, general: 35, product: 22, refund: 12 },
  { hour: '12 PM', billing: 48, technical: 45, general: 42, product: 18, refund: 15 },
  { hour: '3 PM', billing: 55, technical: 42, general: 38, product: 25, refund: 18 },
  { hour: '6 PM', billing: 38, technical: 28, general: 32, product: 12, refund: 10 },
  { hour: '9 PM', billing: 25, technical: 18, general: 22, product: 8, refund: 5 },
];

export const IntentFrequencyChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Intent Frequency Evolution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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
              label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value}`, 
                name === 'billing' ? 'Billing' : 
                name === 'technical' ? 'Technical Support' :
                name === 'general' ? 'General Inquiry' :
                name === 'product' ? 'Product Info' : 'Refund Request'
              ]}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              cursor={{ stroke: 'rgba(128, 128, 128, 0.2)' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="billing"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="billing"
            />
            <Line
              type="monotone"
              dataKey="technical"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              name="technical"
            />
            <Line
              type="monotone"
              dataKey="general"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              name="general"
            />
            <Line
              type="monotone"
              dataKey="product"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              name="product"
            />
            <Line
              type="monotone"
              dataKey="refund"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              name="refund"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
