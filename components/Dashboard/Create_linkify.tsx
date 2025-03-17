"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
useRouter;
const Create_linkify = () => {
  const [title, setTitle] = useState<string>("");
  const [isOff, setIsOff] = useState(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await fetch("/api/linkify/create", {
        method: "POST",
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        return router.refresh();
      }
      setIsOff(true);
    } catch (error) {
      return router.refresh();
    }
  };

  if (isOff === false) {
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