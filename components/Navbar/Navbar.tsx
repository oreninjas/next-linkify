import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[10vh] w-full flex justify-between p-10 border-b border-zinc-800">
      <div className="flex items-center">
        <h2 className="font-light text-2xl">
          <Link href="/">Linkify</Link>
        </h2>
      </div>

      <div className="flex items-center">
        <ul className="flex gap-10 font-light">
          <li className="border-b hover:border-gray-500 hover:font-medium cursor-pointer transition duration-500 ease-in-out">
            Home
          </li>
          <li className="feature-section-button border-b hover:border-gray-500 hover:font-medium cursor-pointer transition duration-500 ease-in-out">
            Features
          </li>
          <li className="about-section-button border-b hover:border-gray-500 hover:font-medium cursor-pointer transition duration-500 ease-in-out">
            About
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <Link
          className="px-8 py-3 border border-gray-800 rounded-md"
          href="/login"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
