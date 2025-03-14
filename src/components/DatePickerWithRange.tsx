"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DatePickerWithRangeProps {
  value: DateRange | undefined;
  onChange: (date: DateRange | undefined) => void;
  className?: string;
}

const PRESET_RANGES = [
  { label: "Today", range: { from: new Date(), to: new Date() } },
  {
    label: "Yesterday",
    range: {
      from: addDays(new Date(), -1),
      to: addDays(new Date(), -1),
    },
  },
  {
    label: "Last 7 days",
    range: { from: addDays(new Date(), -7), to: new Date() },
  },
  {
    label: "Last 30 days",
    range: { from: addDays(new Date(), -30), to: new Date() },
  },
  {
    label: "Last 90 days",
    range: { from: addDays(new Date(), -90), to: new Date() },
  },
  {
    label: "Last month",
    range: {
      from: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      to: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
    },
  },
  {
    label: "Last year",
    range: {
      from: new Date(new Date().getFullYear() - 1, 0, 1),
      to: new Date(new Date().getFullYear() - 1, 11, 31),
    },
  },
];

export function DatePickerWithRange({
  value,
  onChange,
  className,
}: DatePickerWithRangeProps) {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState<"preset" | "custom">("preset");

  return (
    <div className={cn("grid gap-2", className)}>
      {/* Pop-up Trigger */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, y")} -{" "}
                  {format(value.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>

        {/* Pop-up Content */}
        <PopoverContent className="w-[400px] p-0 rounded-lg shadow-md">
          {/* Tabs: Preset | Custom */}
          <div className="flex border-b bg-gray-100">
            <Button
              variant={tab === "preset" ? "default" : "ghost"}
              className="flex-1 rounded-none"
              onClick={() => setTab("preset")}
            >
              Preset
            </Button>
            <Button
              variant={tab === "custom" ? "default" : "ghost"}
              className="flex-1 rounded-none"
              onClick={() => setTab("custom")}
            >
              Custom
            </Button>
          </div>

          {/* Preset Dates */}
          {tab === "preset" ? (
            <ScrollArea className="max-h-[250px] p-2">
              {PRESET_RANGES.map((preset) => (
                <Button
                  key={preset.label}
                  variant="ghost"
                  className="w-full justify-start hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    onChange(preset.range);
                    setOpen(false);
                  }}
                >
                  {preset.label}
                </Button>
              ))}
            </ScrollArea>
          ) : (
            /* Custom Calendar Picker */
            <div className="p-4 flex justify-center items-center">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={value?.from}
                selected={value}
                onSelect={onChange}
                numberOfMonths={2}
                className="rdp-with-year-dropdown w-full"
              />
            </div>
          )}
        </PopoverContent>
      </Popover>

      <style jsx>{`
        .rdp-with-year-dropdown {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .rdp {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .rdp-day {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: background 0.2s ease-in-out;
        }
        .rdp-day:hover {
          background: #e5e7eb;
        }
        .rdp-day-selected {
          background: #2563eb;
          color: white;
          font-weight: bold;
        }
        .rdp-caption {
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
          padding-bottom: 0.5rem;
        }
        .rdp-nav_button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s ease-in-out;
        }
        .rdp-nav_button:hover {
          background: #f3f4f6;
        }
      `}</style>
    </div>
  );
}
