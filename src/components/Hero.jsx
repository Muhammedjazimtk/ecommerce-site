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

            <p className="mt-4 font-black text-red-700 text-2xl">₹500</p>

            <button className="mt-4 bg-green-700 rounded-full w-[120px] text-white font-medium h-[40px] flex items-center justify-center gap-2">
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
        </div>
        <div className="relative hover:scale-[1.01] shadow-xl">
          {" "}
          <img
            src="/images/hero3.jpg"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
