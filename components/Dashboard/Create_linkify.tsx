"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CreateLinkifyProps {
  data: any[];
  setData: (newData: any[]) => void;
}

interface Linkify {
  id: number;
  title: string;
  description?: string;
}

const Create_linkify = ({ data, setData }: CreateLinkifyProps) => {
  const [title, setTitle] = useState<string>("");
  const [isOff, setIsOff] = useState(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<{
        id: number;
        title: string;
        description: string;
      }>("/api/linkify/create", { title });
      const newData = res.data;
      setData([...data, newData]);
      toast.success("Linkify created");
      setIsOff(true);
    } catch (error) {
      toast.error("something went wrong");
      setIsOff(true);
    }
  };

  if (!isOff) {
    return (
      <div
        onClick={() => setIsOff(true)}
        className="absolute w-full h-full left-0 top-0 flex justify-center items-center backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-10 md:rounded-lg shadow-2xl font-light scale-95 transition-transform"
        >
          <form onSubmit={submitHandler}>
            <input
              className="w-full px-5 py-2 rounded-lg border border-gray-300 shadow-sm focus::ring outline-none"
              type="text"
              name="title"
              placeholder="title"
              autoComplete="off"
              maxLength={50}
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button
              className="w-full mt-6 text-center py-3 rounded hover:scale-105 transition-transform font-medium hover:bg-zinc-200 hover:font-bold border"
              type="submit"
            >
              continue
            </button>
          </form>
        </div>
      </div>
    );
  }
  return null;
};

export default Create_linkify;
