import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CardCount from "./CardCount";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="container hidden lg:block">
        <div className="flex justify-between  items-center p-8 ">
          <p className="text-4xl font-bold">Logo</p>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="rounded-3xl outline-none bg-[#f2f4f5] px-6 py-3 w-full "
              placeholder="Search products..."
            />
            <IoIosSearch
              className="absolute top-0 right-0 mr-5 mt-3 text-gray-500"
              size={26}
            />
          </div>
          <div className="flex gap-2">
            <div className=" rounded-full border border-gray-400 w-[50px] h-[50px] grid place-items-center text-[22px] ">
              <AiOutlineUser />
            </div>
            <div className="relative rounded-full border border-gray-400 w-[50px] h-[50px] grid place-items-center text-[22px] ">
              <AiOutlineShoppingCart />
              <CardCount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
