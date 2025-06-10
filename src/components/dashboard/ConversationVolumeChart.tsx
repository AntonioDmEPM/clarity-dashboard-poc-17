
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', conversations: 120, resolved: 95 },
  { time: '04:00', conversations: 85, resolved: 78 },
  { time: '08:00', conversations: 340, resolved: 285 },
  { time: '12:00', conversations: 520, resolved: 445 },
  { time: '16:00', conversations: 480, resolved: 420 },
  { time: '20:00', conversations: 290, resolved: 255 },
];

export const ConversationVolumeChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Conversation Volume (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-muted-foreground"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Area
              type="monotone"
              dataKey="conversations"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
              name="Total Conversations"
            />
            <Area
              type="monotone"
              dataKey="resolved"
              stackId="2"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
              name="Resolved"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
