import { useRouter } from "next/navigation";
import { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  description?: string;
  key?: number;
}

const Card: React.FC<CardProps> = ({ title, description, id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = () => {
    router.push(`/linkify/${id}`);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-col w-full md:w-1/4 h-52 p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 cursor-pointer"
      >
        <div
          className="flex justify-between"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        </div>
        <p className="text-gray-600 text-medium">{description}</p>
      </div>
    </>
  );
};

export default Card;
