import { FaPhoneAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container ">
      <div className="flex justify-around gap-10 p-10 bg-green-800">
        <div className="flex gap-2 items-center justify-center">
          <div className="rounded-full border bg-gray-200 w-[50px] h-[50px] grid place-items-center text-[22px]">
            <FaTruck />
          </div>
          <p className="text-md font-medium text-white">Free shipping</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="rounded-full border bg-gray-200 w-[50px] h-[50px] grid place-items-center text-[22px]">
            <FaMoneyBillAlt />
          </div>
          <p className="text-md font-medium text-white">Best prices</p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <div className="rounded-full border bg-gray-200 w-[50px] h-[50px] grid place-items-center text-[22px]">
            <FaPhoneAlt />
          </div>
          <p className="text-md font-medium text-white">24x7 Support</p>
        </div>
      </div>
      <p className="text-center text-sm py-1 text-gray-500">
        ©️Copyright @Muhammed Jazim T K
      </p>
    </div>
  );
};

export default Footer;
