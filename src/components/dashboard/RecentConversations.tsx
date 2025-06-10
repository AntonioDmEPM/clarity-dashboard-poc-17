
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const conversations = [
  {
    id: 1,
    customer: 'Sarah Johnson',
    issue: 'Account login problem',
    status: 'resolved',
    time: '2 min ago',
    satisfaction: 5,
    duration: '3m 45s'
  },
  {
    id: 2,
    customer: 'Mike Chen',
    issue: 'Billing inquiry',
    status: 'in-progress',
    time: '5 min ago',
    satisfaction: null,
    duration: '8m 12s'
  },
  {
    id: 3,
    customer: 'Emma Davis',
    issue: 'Feature request',
    status: 'escalated',
    time: '12 min ago',
    satisfaction: 4,
    duration: '15m 30s'
  },
  {
    id: 4,
    customer: 'John Smith',
    issue: 'Technical support',
    status: 'resolved',
    time: '18 min ago',
    satisfaction: 5,
    duration: '6m 22s'
  },
];

export const RecentConversations: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'escalated':
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default:
        return <MessageCircle className="w-4 h-4 text-gray-600" />;
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3 flex-1">
                <Avatar>
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    {conversation.customer.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {conversation.customer}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.issue}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <Badge variant="secondary" className={getStatusColor(conversation.status)}>
                  {getStatusIcon(conversation.status)}
                  <span className="ml-1 capitalize">{conversation.status}</span>
                </Badge>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{conversation.time}</p>
                  <p className="text-xs text-muted-foreground">{conversation.duration}</p>
                </div>
                {conversation.satisfaction && (
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">
                      {'★'.repeat(conversation.satisfaction)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
