/* eslint-disable react/prop-types */
import { TbShoppingBagPlus } from "react-icons/tb";
const ProductCard = ({ ele }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg py-8  min-h-[400px] border ">
      <div className="h-[80%] bg-white grid place-items-center ">
        {" "}
        <img src={ele.img} className="object-cover " />
      </div>

      <div className="flex w-full justify-between pr-4">
        <div className="">
          <p className="text-lg pl-4 font-medium">{ele.name}</p>
          <p className="text-red-600 pl-4 font-bold">{ele.price}</p>
        </div>
        <div className="rounded-full border border-gray-400 w-[50px] bg-green-500 text-white h-[50px] grid place-items-center text-[22px]   ">
          <TbShoppingBagPlus className="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
