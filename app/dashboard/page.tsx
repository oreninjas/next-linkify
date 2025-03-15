"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {session?.user?.name}
      </div>
    </>
  );

  // return <Dashboard />;
};

export default DashboardPage;
