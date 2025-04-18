"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AllHomeSections = () => {
  return (
    <>
      <div className="z-50" onClick={() => console.log()}>
        <section className="w-full h-[90vh] flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold ">Linkify</h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600">
              Simplify Your Flow
            </h2>
            <p className="text-lg text-gray-600">
              Organize and share your favorite links, all in one place.
            </p>
          </div>
          <Button
            variant={"outline"}
            className="mt-8 rounded-lg px-8 py-6 text-lg font-medium transition duration-200 flex items-center gap-2"
          >
            <Link href={"/register"}>Get Started</Link>
            <ArrowRight size={20} />
          </Button>
        </section>

        {/* Features Section */}
        <section className="w-full h-[80vh] flex flex-col items-center justify-center">
          <div className="flex items-center mb-8">
            <h1 className="pl-10 font-light text-4xl text-gray-800">
              Features
            </h1>
          </div>
          <p className="font-light mt-5 text-center md:w-1/3 text-gray-700">
            Save, organize, and share your links effortlessly. Access them
            anytime, anywhere, and keep everything in one convenient spot.
          </p>
          <div className="flex flex-col md:flex-row justify-evenly w-full px-10 mt-20 gap-8">
            {/* Feature Card 1 */}
            <div className="w-full md:w-1/5 bg-indigo-500 p-5 rounded-md text-white shadow-lg">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
                <h2 className="font-semibold">Link Customization</h2>
              </div>
              <p className="mt-5 text-sm">
                Personalize your links with custom titles and icons for easy
                recognition and better organization.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="w-full md:w-1/5 bg-purple-500 p-5 rounded-md text-white shadow-lg">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
                <h2 className="font-semibold">Link Categorization</h2>
              </div>
              <p className="mt-5 text-sm">
                Group your links into customizable categories for effortless
                navigation and management.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="w-full md:w-1/5 bg-cyan-500 p-5 rounded-md text-white shadow-lg border border-indigo-300">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
                <h2 className="font-semibold">Analytics Dashboard</h2>
              </div>
              <p className="mt-5 text-sm">
                Track the performance of your shared links with real-time
                analytics, including click counts and engagement data.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full h-[50vh] flex flex-col items-center justify-center">
          <div className="mt-10 flex items-center justify-center md:w-1/2 bg-white p-10 text-xl md:rounded-lg italic font-light shadow">
            <p className="text-center">
              Created by{" "}
              <a
                className="text-blue-500 ml-1"
                href="https://github.com/oreninjas"
                target="_blank"
                rel="noopener noreferrer"
              >
                oreninjas
              </a>
              , a passionate developer dedicated to simplifying how people
              manage and share their links!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default AllHomeSections;
