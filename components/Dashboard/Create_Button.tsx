import { useState } from "react";
import Create_linkify from "./Create_linkify";
import Image from "next/image";

const Create_Button = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOn((prev) => !prev)}
        className="create-linkify cursor-pointer w-full sm:w-52 h-52 shadow-lg flex justify-center items-center bg-gray-100 rounded-lg hover:shadow-xl hover:scale-105 transition-transform"
      >
        <Image src="/images/plus-svg.svg" alt="button" className="w-16 h-16" />
      </div>
      {isOn && <Create_linkify />}
    </>
  );
};

export default Create_Button;
