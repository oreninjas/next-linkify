"use client";
import { Linkify } from "@/app/(pages)/dashboard/page";
import Card from "./Card";
import Create_Button from "./Create_Button";

interface DashboardProps {
  data: Linkify[];
  setData: React.Dispatch<React.SetStateAction<Linkify[]>>;
}

const Dashboard: React.FC<DashboardProps> = ({ data, setData }) => {
  return (
    <div className="w-full h-screen flex gap-10 px-6 py-5 flex-wrap">
      {data && data.length > 0
        ? data.map((linkify) => (
            <Card
              title={linkify.title}
              description={linkify.description}
              key={linkify.id}
              id={linkify.id}
            />
          ))
        : null}
      {data.length < 5 ? (
        <Create_Button data={data} setData={setData} />
      ) : null}
    </div>
  );
};

export default Dashboard;
