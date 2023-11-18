import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="container px-10">
      <div className="grid grid-cols-3 grid-rows-2 h-[500px]  gap-8">
        <div className="col-span-2 row-start-1 row-end-[-1] relative hover:scale-[1.01] shadow-xl">
          <img
            src="/images/hero1.jpg"
            className="rounded-lg object-cover w-full h-full "
          />
          <div className="absolute top-[20%] left-8">
            <p className="text-xl text-gray-700 font-medium">
              100% original fruits with 0 preservaties
            </p>
            <h1 className="text-4xl font-black">Healthy Fruits</h1>

            <p className=" mt-4 font-bold text-gray-700">starting at </p>

            <p className="mt-4 font-black text-red-700 text-2xl">₹300</p>

            <button className="mt-4 bg-green-800 hover:bg-green-600 rounded-full w-[150px] text-white font-medium h-[40px] flex items-center justify-center gap-2">
              Shop now <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="relative hover:scale-[1.01] shadow-xl">
          {" "}
          <img
            src="/images/hero2.jpg"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute top-[10%] left-8">
            <h1 className="text-xl text-white font-black">Yummy pizzas</h1>

            <p className=" mt-4 font-bold text-white text-sm">starting at </p>

            <p className="mt-4 font-black text-red-700 text-2xl">₹500</p>

            <button className="mt-4 bg-green-800 text-xs hover:bg-green-600 rounded-full w-[130px] text-white font-medium h-[40px] flex items-center justify-center gap-2">
              Shop now <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="relative hover:scale-[1.01] shadow-xl">
          {" "}
          <img
            src="/images/hero3.jpg"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute top-[10%] left-8">
            <h1 className="text-xl font-black">Freshley baked chips</h1>

            <p className=" mt-4 font-bold text-gray-700">starting at </p>

            <p className="mt-4 font-black text-red-700 text-2xl">₹50</p>

            <button className="mt-4 bg-green-800 hover:bg-green-600 text-xs rounded-full w-[130px] text-white font-medium h-[40px] flex items-center justify-center gap-2">
              Shop now <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
