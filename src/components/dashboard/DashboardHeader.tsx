
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Download, RefreshCw } from 'lucide-react';
import { DateRangePicker } from './DateRangePicker';
import { ThemeToggle } from '@/components/ThemeToggle';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Agenti Customer Service</h1>
            <p className="text-muted-foreground">Conversational Chat Agent Dashboard</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Online
        </Badge>
      </div>
      
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <DateRangePicker />
        
        <Button variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
        
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};
