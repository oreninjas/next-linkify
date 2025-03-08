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

  // if (!session) {
  //   router.push("/login");
  //   return null;
  // }

  return <Dashboard />;
};

export default DashboardPage;
