
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle, Clock, AlertTriangle, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

const conversations = [
  {
    id: '#C001',
    customer: 'Sarah Johnson',
    startTime: '14:32',
    duration: '3m 45s',
    messages: 8,
    status: 'resolved',
    resolution: 'confirmed',
    satisfaction: 5,
    escalated: false,
    intents: ['billing', 'account'],
    lastMessage: 'Thank you for your help!'
  },
  {
    id: '#C002',
    customer: 'Mike Chen',
    startTime: '14:27',
    duration: '8m 12s',
    messages: 15,
    status: 'in-progress',
    resolution: 'pending',
    satisfaction: null,
    escalated: false,
    intents: ['technical', 'troubleshooting'],
    lastMessage: 'Let me check that for you...'
  },
  {
    id: '#C003',
    customer: 'Emma Davis',
    startTime: '14:20',
    duration: '15m 30s',
    messages: 24,
    status: 'escalated',
    resolution: 'escalated',
    satisfaction: 2,
    escalated: true,
    intents: ['billing', 'refund', 'complaint'],
    lastMessage: 'I want to speak to a manager'
  },
  {
    id: '#C004',
    customer: 'John Smith',
    startTime: '14:14',
    duration: '6m 22s',
    messages: 12,
    status: 'resolved',
    resolution: 'confirmed',
    satisfaction: 4,
    escalated: false,
    intents: ['account', 'password'],
    lastMessage: 'Perfect, that worked!'
  },
  {
    id: '#C005',
    customer: 'Lisa Wong',
    startTime: '14:10',
    duration: '4m 18s',
    messages: 9,
    status: 'resolved',
    resolution: 'unconfirmed',
    satisfaction: null,
    escalated: false,
    intents: ['general'],
    lastMessage: 'Ok thanks'
  },
  {
    id: '#C006',
    customer: 'David Brown',
    startTime: '14:05',
    duration: '12m 45s',
    messages: 19,
    status: 'resolved',
    resolution: 'confirmed',
    satisfaction: 5,
    escalated: false,
    intents: ['billing', 'payment'],
    lastMessage: 'Excellent service!'
  }
];

export const ConversationsTable: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'escalated':
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default:
        return <MessageSquare className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-700';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      case 'escalated':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getResolutionColor = (resolution: string) => {
    switch (resolution) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'unconfirmed':
        return 'bg-yellow-100 text-yellow-700';
      case 'escalated':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Messages</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Resolution</TableHead>
              <TableHead>Satisfaction</TableHead>
              <TableHead>Intents</TableHead>
              <TableHead>Last Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversations.map((conversation) => (
              <TableRow key={conversation.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{conversation.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        {conversation.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{conversation.customer}</span>
                  </div>
                </TableCell>
                <TableCell>{conversation.startTime}</TableCell>
                <TableCell>{conversation.duration}</TableCell>
                <TableCell>{conversation.messages}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(conversation.status)}>
                    {getStatusIcon(conversation.status)}
                    <span className="ml-1 capitalize">{conversation.status}</span>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getResolutionColor(conversation.resolution)}>
                    {conversation.resolution}
                  </Badge>
                </TableCell>
                <TableCell>
                  {conversation.satisfaction ? (
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">
                        {'★'.repeat(conversation.satisfaction)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({conversation.satisfaction}/5)
                      </span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {conversation.intents.map((intent, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {intent}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate text-sm text-muted-foreground">
                  {conversation.lastMessage}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
