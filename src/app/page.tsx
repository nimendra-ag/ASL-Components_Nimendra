"use client";

import * as React from "react";
import { EntityChart } from "@/components/EntityChart";
import LcChart from "@/components/LcChart";
import { McChart } from "@/components/McChart";
import RatioTable from "@/components/RatioTable";
import PieChart from "@/components/PieChart";
import EntityStats from "@/components/EntityStats";
import ProjectApplications from "@/components/ProjectApplications";
import DashboardFilters from "@/components/DashboardFilters";
import EntityRanking from "@/components/EntityRanking";
import FunnelChart from "@/components/FunnelChart";
import Navbar from "@/components/Navbar";
import WorldMap from "@/components/WorldMap";
import DashboardFooter from "@/components/DashboardFooter";

export default function Home() {
  // Sample data for FunnelChart
  const funnelStages = [
    { stage: "Visitors", value: 10000 },
    { stage: "Sign-ups", value: 5000 },
    { stage: "Subscriptions", value: 2000 },
    { stage: "Paid Users", value: 1000 },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md text-center">
        <Navbar />
      </div>

      {/* Filters Section */}
      <DashboardFilters />

      {/* First Row: Entity Stats */}
      <EntityStats />

      {/* Second Row: Entity Ranking + Pie Chart + Funnel Chart */}
      <div className="grid grid-cols-3 gap-6">
        <div className=" p-4 rounded-lg ">
          <EntityRanking />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <div className=" p-4 rounded-lg flex items-center justify-center h-full">
            <PieChart />
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center h-full">
            <WorldMap geoJson={null} width={0} height={0} />
          </div>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
            <FunnelChart stages={funnelStages} />
          </div>
        </div>
      </div>

      {/* Third Row: Adjusted Sizes and Order */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
          <ProjectApplications />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
          <McChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
          <RatioTable />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
          <LcChart />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
