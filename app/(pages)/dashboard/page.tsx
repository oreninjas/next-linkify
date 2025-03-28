"use client";
import { useSession } from "next-auth/react";
import Dashboard from "@/components/Dashboard/Dashboard";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Linkify {
  id: number;
  title: string;
  description?: string;
}

const DashboardPage = () => {
const { data: session, status } = useSession();

  const [data, setData] = useState<Linkify[]>([]);
  const fetchLinkifies = async () => {
    const response = await axios.get<Linkify[]>("/api/linkify/fetch/all");
    setData(response.data);
  };

  useEffect(() => {
    fetchLinkifies();
  }, []);

  if (status === "loading" || !data) {
    return <div>Loading...</div>;
  }

  // return (
  //   <>
  //     <div className="w-full h-screen flex items-center justify-center">
  //       {session?.user?.name}
  //     </div>
  //   </>
  // );

  return <Dashboard data={data} setData={setData} />;
};

export default DashboardPage;
