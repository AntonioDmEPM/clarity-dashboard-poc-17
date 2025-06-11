
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { DateRangePicker } from './DateRangePicker';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AgentSelector } from './AgentSelector';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
      <AgentSelector />
      
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
