
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ConversationVolumeChart } from '@/components/dashboard/ConversationVolumeChart';
import { SentimentChart } from '@/components/dashboard/SentimentChart';
import { ResponseTimeChart } from '@/components/dashboard/ResponseTimeChart';
import { IntentFrequencyChart } from '@/components/dashboard/IntentFrequencyChart';
import { ConversationsTable } from '@/components/dashboard/ConversationsTable';
import { 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Star,
  ThumbsDown,
  ArrowUpRight,
  Shuffle,
  Target,
  MessageSquare,
  ArrowDown,
  ArrowUp,
  Shield
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <DashboardHeader />
        
        {/* Primary KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Conversations"
            value="2,847"
            change={12.5}
            changeType="increase"
            description="vs last period"
            icon={<MessageCircle className="h-5 w-5" />}
          />
          <MetricCard
            title="Total Messages"
            value="24,392"
            change={18.3}
            changeType="increase"
            description="All messages exchanged"
            icon={<MessageSquare className="h-5 w-5" />}
          />
          <MetricCard
            title="Customer Confirmed Resolution"
            value="87.2"
            change={4.1}
            changeType="increase"
            suffix="%"
            description="Customer confirmed fixes"
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

        {/* Secondary KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="ThumbDown Messages"
            value="243"
            change={12.7}
            changeType="decrease"
            description="Negative feedback received"
            icon={<ThumbsDown className="h-5 w-5" />}
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

        {/* Tertiary KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Interjected Messages (Validator)"
            value="156"
            change={8.2}
            changeType="increase"
            description="Validator interventions"
            icon={<Shield className="h-5 w-5" />}
          />
          <MetricCard
            title="Total Input Tokens"
            value="2.4M"
            change={22.1}
            changeType="increase"
            description="Tokens processed"
            icon={<ArrowDown className="h-5 w-5" />}
          />
          <MetricCard
            title="Total Output Tokens"
            value="1.8M"
            change={18.9}
            changeType="increase"
            description="Tokens generated"
            icon={<ArrowUp className="h-5 w-5" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ConversationVolumeChart />
          <SentimentChart />
        </div>

        {/* Response Time and Intent Frequency Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ResponseTimeChart />
          <IntentFrequencyChart />
        </div>

        {/* Recent Conversations Table - Full Width */}
        <ConversationsTable />
      </div>
    </div>
  );
};

export default Index;
