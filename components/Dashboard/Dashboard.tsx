"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Create_Button from "./Create_Button";
import axios from "axios";

interface DashboardProps {
  userId: string | null;
}

interface Linkify {
  id: number;
  title: string;
  description?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userId }) => {
  const [data, setData] = useState<Linkify[]>([]);
  const fetchLinkifies = async () => {
    const response = await axios.get<Linkify[]>("/api/linkify/fetch/all");
    setData(response.data);
  };

  useEffect(() => {
    fetchLinkifies();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex gap-10 p-10 flex-wrap">
      {data && data.length > 0
        ? data.map((linkify) => (
            <Card
              title={linkify.title}
              description={linkify.description}
              key={linkify.id}
            />
          ))
        : null}
      <Create_Button data={data} setData={setData} />
    </div>
  );
};

export default Dashboard;
