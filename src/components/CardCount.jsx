import { useCartContext } from "../context/ContextCard";

const CardCount = () => {
  const { product } = useCartContext();
  return (
    <div
      className={`absolute bg-red-500 text-[14px] text-white w-[25px] h-[25px] -top-1 -right-3 grid place-items-center  rounded-full`}
    >
      {product.length}
    </div>
  );
};
export default CardCount;
