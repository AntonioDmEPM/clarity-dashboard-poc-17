
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
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
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'escalated':
        return <AlertTriangle className="w-4 h-4 text-orange-400" />;
      default:
        return <MessageSquare className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-900/20 text-green-400 border-green-800';
      case 'in-progress':
        return 'bg-blue-900/20 text-blue-400 border-blue-800';
      case 'escalated':
        return 'bg-orange-900/20 text-orange-400 border-orange-800';
      default:
        return 'bg-gray-900/20 text-gray-400 border-gray-800';
    }
  };

  const getResolutionColor = (resolution: string) => {
    switch (resolution) {
      case 'confirmed':
        return 'bg-green-900/20 text-green-400 border-green-800';
      case 'unconfirmed':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-800';
      case 'escalated':
        return 'bg-red-900/20 text-red-400 border-red-800';
      default:
        return 'bg-gray-900/20 text-gray-400 border-gray-800';
    }
  };

  return (
    <Card className="col-span-full bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-100">Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-800 hover:bg-gray-800/30">
              <TableHead className="text-gray-300">ID</TableHead>
              <TableHead className="text-gray-300">Start Time</TableHead>
              <TableHead className="text-gray-300">Duration</TableHead>
              <TableHead className="text-gray-300">Messages</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Resolution</TableHead>
              <TableHead className="text-gray-300">Satisfaction</TableHead>
              <TableHead className="text-gray-300">Intents</TableHead>
              <TableHead className="text-gray-300">Last Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversations.map((conversation) => (
              <TableRow key={conversation.id} className="hover:bg-gray-800/30 border-gray-800">
                <TableCell className="font-medium text-gray-100">{conversation.id}</TableCell>
                <TableCell className="text-gray-300">{conversation.startTime}</TableCell>
                <TableCell className="text-gray-300">{conversation.duration}</TableCell>
                <TableCell className="text-gray-300">{conversation.messages}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(conversation.status)}>
                    {getStatusIcon(conversation.status)}
                    <span className="ml-1 capitalize">{conversation.status}</span>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getResolutionColor(conversation.resolution)}>
                    {conversation.resolution}
                  </Badge>
                </TableCell>
                <TableCell>
                  {conversation.satisfaction ? (
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">
                        {'★'.repeat(conversation.satisfaction)}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({conversation.satisfaction}/5)
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {conversation.intents.map((intent, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-gray-800 text-gray-300 border-gray-700">
                        {intent}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate text-sm text-gray-400">
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
