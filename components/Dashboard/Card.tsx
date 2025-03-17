const Card = () => {
  return (
    <div className="flex flex-col w-full md:w-1/4 h-52 p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Hello Title</h3>
      <p className="text-gray-600 text-medium">Hmm, description</p>
    </div>
  );
};

export default Card;
