
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Bot } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'busy' | 'maintenance';
}

const agents: Agent[] = [
  { id: 'agent-001', name: 'Agenti Customer Service', status: 'online' },
  { id: 'agent-002', name: 'Agenti Sales Support', status: 'online' },
  { id: 'agent-003', name: 'Agenti Technical Help', status: 'busy' },
  { id: 'agent-004', name: 'Agenti Billing Assistant', status: 'offline' },
  { id: 'agent-005', name: 'Agenti Product Guide', status: 'maintenance' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'busy':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    case 'offline':
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    case 'maintenance':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

const getStatusDotColor = (status: string) => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'busy':
      return 'bg-yellow-500';
    case 'offline':
      return 'bg-gray-500';
    case 'maintenance':
      return 'bg-orange-500';
    default:
      return 'bg-gray-500';
  }
};

export const AgentSelector: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-2xl">
      <div className="flex items-center space-x-2 flex-1">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Bot className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <Select value={selectedAgent.id} onValueChange={(value) => {
            const agent = agents.find(a => a.id === value);
            if (agent) setSelectedAgent(agent);
          }}>
            <SelectTrigger className="w-full bg-background border-input">
              <SelectValue>
                <div className="flex items-center justify-between w-full">
                  <div className="truncate">
                    <div className="text-sm sm:text-lg font-bold text-foreground truncate">{selectedAgent.name}</div>
                  </div>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {agents.map((agent) => (
                <SelectItem key={agent.id} value={agent.id} className="focus:bg-accent">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium truncate">{agent.name}</span>
                    <Badge variant="secondary" className={`ml-2 flex-shrink-0 ${getStatusColor(agent.status)}`}>
                      <div className={`w-2 h-2 ${getStatusDotColor(agent.status)} rounded-full mr-2`}></div>
                      {agent.status}
                    </Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Badge variant="secondary" className={`${getStatusColor(selectedAgent.status)} flex-shrink-0 self-start sm:self-center`}>
        <div className={`w-2 h-2 ${getStatusDotColor(selectedAgent.status)} rounded-full mr-2`}></div>
        {selectedAgent.status}
      </Badge>
    </div>
  );
};
