import { useState } from "react";
import Create_linkify from "./Create_linkify";
import Image from "next/image";

interface CreateLinkifyProps {
  data: any[];
  setData: (newData: any[]) => void;
}

const Create_Button = ({ data, setData }: CreateLinkifyProps) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOn((prev) => !prev)}
        className="create-linkify cursor-pointer w-full sm:w-52 h-52 shadow-lg flex justify-center items-center bg-gray-100 rounded-lg hover:shadow-xl hover:scale-105 transition-transform"
      >
        <Image
          src="/images/plus-svg.svg"
          alt="button"
          width={60}
          height={60}
          priority={true}
        />
      </div>
      {isOn && <Create_linkify data={data} setData={setData} />}
    </>
  );
};

export default Create_Button;
