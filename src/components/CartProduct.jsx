/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

const CartProduct = ({ img, price, name }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={img} className="h-[100px]"></img>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">1x{price}</p>
        </div>
      </div>

      <RxCross1 />
    </div>
  );
};

export default CartProduct;
