
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ConversationVolumeChart } from '@/components/dashboard/ConversationVolumeChart';
import { SentimentChart } from '@/components/dashboard/SentimentChart';
import { ResponseTimeChart } from '@/components/dashboard/ResponseTimeChart';
import { RecentConversations } from '@/components/dashboard/RecentConversations';
import { 
  MessageCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Bot, 
  CheckCircle,
  Star,
  ArrowUpRight,
  Shuffle,
  Target
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        <DashboardHeader />
        
        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Conversations"
            value="2,847"
            change={12.5}
            changeType="increase"
            description="vs last week"
            icon={<MessageCircle className="h-5 w-5" />}
          />
          <MetricCard
            title="Avg Response Time"
            value="0.9"
            change={8.2}
            changeType="decrease"
            suffix="s"
            description="Target: <1s"
            icon={<Clock className="h-5 w-5" />}
          />
          <MetricCard
            title="Resolution Rate"
            value="94.3"
            change={3.1}
            changeType="increase"
            suffix="%"
            description="Auto-resolved"
            icon={<CheckCircle className="h-5 w-5" />}
          />
          <MetricCard
            title="Customer Satisfaction"
            value="4.6"
            change={2.4}
            changeType="increase"
            suffix="/5"
            description="Average rating"
            icon={<Star className="h-5 w-5" />}
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <MetricCard
            title="Bot Accuracy"
            value="96.8"
            change={1.2}
            changeType="increase"
            suffix="%"
            description="Intent recognition"
            icon={<Bot className="h-5 w-5" />}
          />
          <MetricCard
            title="Escalation Rate"
            value="5.7"
            change={0.8}
            changeType="decrease"
            suffix="%"
            description="To human agents"
            icon={<ArrowUpRight className="h-5 w-5" />}
          />
          <MetricCard
            title="Active Users"
            value="1,324"
            change={18.7}
            changeType="increase"
            description="Currently online"
            icon={<Users className="h-5 w-5" />}
          />
          <MetricCard
            title="Uptime"
            value="99.9"
            change={0}
            changeType="neutral"
            suffix="%"
            description="Last 30 days"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <MetricCard
            title="Intent Hopping"
            value="2.3"
            change={15.4}
            changeType="decrease"
            suffix="avg"
            description="Intent switches per conversation"
            icon={<Shuffle className="h-5 w-5" />}
          />
          <MetricCard
            title="Convergence Score"
            value="87.2"
            change={4.6}
            changeType="increase"
            suffix="%"
            description="Conversations reaching agreement"
            icon={<Target className="h-5 w-5" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ConversationVolumeChart />
          <SentimentChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponseTimeChart />
          <RecentConversations />
        </div>
      </div>
    </div>
  );
};

export default Index;
