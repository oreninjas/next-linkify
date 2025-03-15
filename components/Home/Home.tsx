import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* <div className="bg-grid w-full h-[90vh] flex justify-center items-center flex-col border-b border-zinc-800"> */}
      <div className="relative">
        <svg className="w-full h-full absolute inset-0 size-full stroke-gray-200 -z-10">
          <defs>
            <pattern
              id="my-pattern"
              height="50"
              width="50"
              x="0"
              y="0"
              patternUnits="userSpaceOnUse"
            >
              <path d="M -1 50 L 101 50" />
              <path d="M 50 -1 L 50 101" />
            </pattern>
          </defs>

          <rect
            height="100%"
            width="100%"
            fill="url(#my-pattern)"
            strokeWidth="1"
          />
        </svg>
        <div className="bg-grid w-full h-[90vh] flex justify-center items-center flex-col border-b border-zinc-800 z-10">
          <div className="flex text-4xl md:text-5xl items-center gap-5 font-light text-gray-800">
            <h1>Level Up Your</h1>
            <h1>Learning</h1>
          </div>
          <div className="flex text-3xl items-center gap-5 font-light mt-8 text-gray-800">
            <h1>Simplify Your Flow</h1>
          </div>
          <p className="mt-6 text-sm md:text-base font-light text-gray-600">
            Organize and share your favorite links, all in one place.
          </p>
          <button className="mt-10 font-light hover:font-normal hover:px-10 text-xl border border-green-500 px-8 py-5 rounded hover:bg-green-500 hover:text-white transition-all duration-350">
            <Link href="/register">Get Started</Link>
          </button>
        </div>

        <div className="feature-section w-full h-[100vh] flex items-center justify-center flex-col border-b border-zinc-800">
          <div className="flex items-center">
            {/* <div className="p-3 bg-zinc-800 rounded-md">
            <img className="w-8" src="/images/web_logo.png" alt="logo" />
          </div> */}
            <h1 className="pl-10 font-light text-4xl">Features</h1>
          </div>
          <p className="font-light mt-5 text-balance text-center md:w-1/3">
            Save, organize, and share your links effortlessly. Access them
            anytime, anywhere, and keep everything in one convenient spot.
          </p>
          <div className="flex flex-col md:flex-row justify-evenly w-full px-10 mt-20 text-white">
            <div className="w-full md:w-1/5 border-[#1ABCFE]/20 bg-[#42c1ebd2] p-5 rounded-md">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clipboard-check"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
                <h2>Link Customization</h2>
              </div>
              <p className="mt-5">
                Personalize your links with custom titles and icons for easy
                recognition and better organization.
              </p>
            </div>
            <div className="w-full md:w-1/5 bg-[#975bec] p-5 rounded-md">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clipboard-check"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
                <h2>Link Categorization</h2>
              </div>
              <p className="mt-5">
                Group your links into customizable categories for effortless
                navigation and management.
              </p>
            </div>
            <div className="w-full md:w-1/5 border-2 lg:w-[300px] border-[#1ABCFE]/20 bg-[#1ABCFE] p-5 rounded-md">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clipboard-check"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
                <h2>Analytics Dashboard</h2>
              </div>
              <p className="mt-5">
                Track the performance of your shared links with real-time
                analytics, including click counts and engagement data.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section w-full h-[50vh] flex items-center justify-center flex-col">
          <div className="flex items-center">
            <h1 className="pl-10 font-semibold text-3xl md:text-5xl">About</h1>
          </div>
          <div className="full h-1/2 md:h-fit mt-10 flex items-center justify-center md:w-1/2 bg-blue-200 p-10 text-xl md:rounded-lg italic font-light">
            <p>
              Created by
              <a
                className="text-blue-500"
                href="https://github.com/oreninjas"
                target="_blank"
              >
                <span> oreninjas</span>
              </a>
              , a passionate developer dedicated to simplifying how people
              manage and share their links!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
