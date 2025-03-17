"use client";
import Card from "./Card";
import Create_Button from "./Create_Button";

const Dashboard = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex gap-10 p-10 flex-wrap">
      <Card />
      <Create_Button />
    </div>
  );
};

export default Dashboard;
