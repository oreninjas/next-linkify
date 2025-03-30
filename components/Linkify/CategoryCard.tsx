import { Plus } from "lucide-react";
import { useState } from "react";
import AddComponent from "./AddComponent";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  linkifyId: string;
  title: string;
  categoryId: string;
}

interface ILinks {
  id: string;
  url: string;
}

const CategoryCard = ({ linkifyId, title, categoryId }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [links, setLinks] = useState<ILinks[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toast.loading("hold a sec...");
    if (!isFetched) {
      try {
        const response = await axios.get(
          `/api/linkify/categories/link/fetch/${categoryId}`
        );
        setLinks(response.data);
        console.log(response.data);
        toast.remove();
        setIsFetched(true);
      } catch (error) {
        toast.remove();
        toast.error("something went wrong");
      }
    }
    toast.remove();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-full sm:w-1/3 h-fit bg-slate-100 hover:bg-slate-200 p-5 rounded cursor-pointer"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <Plus
            size="36px"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="cursor-pointer hover:bg-slate-100"
          />
        </div>
        <ul className="space-y-2" onClick={(e) => e.stopPropagation()}>
          {links.length > 0 &&
            links.map((link, key) => (
              <li key={link.id}>
                <a href={link.url} target="_blank" className="text-blue-600">
                  {link.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
      {isModalOpen && (
        <AddComponent
          linkifyId={linkifyId}
          categoryId={categoryId}
          onClose={() => setIsModalOpen(false)}
          setLinks={setLinks}
        />
      )}
    </>
  );
};
export default CategoryCard;
