"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CategoryCard from "@/components/Linkify/CategoryCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddComponent from "@/components/Linkify/AddComponent";

type Params = {
  id: string;
};

interface ICategory {
  id: string;
  title: string;
}

export default function Linkify({ params }: { params: Promise<Params> }) {
  const [data, setData] = useState<any>(null);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const unwrappedParams = React.use(params) as Params;
  const id = unwrappedParams.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // This will fetch linkify
        const response = await axios.get(`/api/linkify/fetch/${id}`);
        setData(response.data);
        // This will fetch categories inside linkify
        const fetchCategories = await axios.get(
          `/api/linkify/categories/fetch/all/${id}`
        ); // only returns all id's and titles of categories inside linkify
        setCategories(fetchCategories.data || []);
      } catch (err) {
        toast.error("Something went wrong getting linkify!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        loading
      </div>
    );
  }

  return (
    <>
      <div className="w-full p-4 flex gap-5 flex-wrap">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard
              linkifyId={id}
              title={category.title}
              key={category.id}
              categoryId={category.id}
            />
          ))
        ) : (
          <div className="w-full sm:w-full h-fit bg-slate-200 p-5 rounded flex justify-between items-center">
            <h3 className="text-lg font-medium">No categories found!</h3>
            <Plus
              onClick={() => setIsModelOpen(true)}
              size="52px"
              className="cursor-pointer hover:bg-slate-100 rounded-full p-1"
            />
          </div>
        )}
      </div>
      {isModelOpen && (
        <AddComponent linkifyId={id} onClose={() => setIsModelOpen(false)} />
      )}
    </>
  );
}
