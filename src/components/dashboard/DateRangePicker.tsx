
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DateRangePickerProps {
  onRangeChange?: (from: Date | undefined, to: Date | undefined) => void;
  onPresetChange?: (preset: string) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onRangeChange,
  onPresetChange
}) => {
  const [from, setFrom] = React.useState<Date>();
  const [to, setTo] = React.useState<Date>();
  const [selectedPreset, setSelectedPreset] = React.useState("24h");

  const handlePresetChange = (value: string) => {
    setSelectedPreset(value);
    onPresetChange?.(value);
    
    if (value !== "custom") {
      setFrom(undefined);
      setTo(undefined);
      onRangeChange?.(undefined, undefined);
    }
  };

  const handleDateSelect = (date: Date | undefined, type: 'from' | 'to') => {
    if (type === 'from') {
      setFrom(date);
      onRangeChange?.(date, to);
    } else {
      setTo(date);
      onRangeChange?.(from, date);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Select value={selectedPreset} onValueChange={handlePresetChange}>
        <SelectTrigger className="w-32">
          <CalendarIcon className="w-4 h-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1h">Last Hour</SelectItem>
          <SelectItem value="24h">Last 24h</SelectItem>
          <SelectItem value="7d">Last 7 days</SelectItem>
          <SelectItem value="30d">Last 30 days</SelectItem>
          <SelectItem value="custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>

      {selectedPreset === "custom" && (
        <>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[140px] justify-start text-left font-normal",
                  !from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {from ? format(from, "MMM dd") : "From date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={from}
                onSelect={(date) => handleDateSelect(date, 'from')}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[140px] justify-start text-left font-normal",
                  !to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {to ? format(to, "MMM dd") : "To date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={to}
                onSelect={(date) => handleDateSelect(date, 'to')}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </>
      )}
    </div>
  );
};
