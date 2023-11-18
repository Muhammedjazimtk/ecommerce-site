/* eslint-disable react/prop-types */
const CategoryCard = ({ item }) => {
  return (
    <div className="flex h-[150px] shadow-xl p-5 justify-around hover:scale-[1.02]  items-center rounded-lg">
      <div className="flex gap-1 flex-col">
        <p className="text-lg font-semibold">{item.name}</p>
        <p className="text-gray-600 text-sm">{item.count}</p>
      </div>
      <img
        className="object-cover w-[80px] h-[80px] rounded-full"
        src={item.img}
      />
    </div>
  );
};

export default CategoryCard;
