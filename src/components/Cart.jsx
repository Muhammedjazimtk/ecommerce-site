import { useCartContext } from "../context/ContextCard";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
/* eslint-disable react/prop-types */
const Cart = ({ setShowCart }) => {
  const { product } = useCartContext();
  return (
    <div
      className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
      onClick={() => {
        setShowCart(false);
      }}
    >
      <div
        className="max-w-[400px] w-full h-full bg-white absolute top-0 right-0 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="top-0 right-0 absolute cursor-pointer m-6 text-[22px]"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
        <div className="mt-6">
          {product?.map((el) => (
            <CartProduct
              key={el.name}
              price={el.price}
              img={el.img}
              name={el.name}
            />
          ))}
        </div>

        <button className="bg-green-600 text-white text-center w-full rounded-xl py-2 hover:bg-green-800 mb-4 mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
