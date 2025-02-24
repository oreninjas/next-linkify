"use client";
import Card from "./Card";
import { useRef } from "react";

const Dashboard = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden">
      <Card ref={ref} />
    </div>
  );
};

export default Dashboard;
