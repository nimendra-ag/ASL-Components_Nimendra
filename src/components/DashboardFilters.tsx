"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "./DatePickerWithRange";

export default function DashboardFilters() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 items-center justify-between">
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="AIESEC SRI LANKA" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sri_lanka">AIESEC Sri Lanka</SelectItem>
          <SelectItem value="global">Global AIESEC</SelectItem>
        </SelectContent>
      </Select>

      <DatePickerWithRange value={dateRange} onChange={setDateRange} />

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Functions" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All </SelectItem>
          <SelectItem value="product1">Product 1</SelectItem>
          <SelectItem value="product2">Product 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Project" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Projects</SelectItem>
          <SelectItem value="project1">Project 1</SelectItem>
          <SelectItem value="project2">Project 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Home MC" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mc1">MC 1</SelectItem>
          <SelectItem value="mc2">MC 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Home LC" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lc1">LC 1</SelectItem>
          <SelectItem value="lc2">LC 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="short">Short</SelectItem>
          <SelectItem value="long">Long</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
