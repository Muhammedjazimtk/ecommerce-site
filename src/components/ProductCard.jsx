/* eslint-disable react/prop-types */

const ProductCard = ({ ele }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg hover:scale-[1.02] py-8 min-h-[400px] border">
      <div className="h-[80%] bg-white">
        {" "}
        <img src={ele.img} className="object-cover " />
      </div>

      <p className="text-lg font-medium">{ele.name}</p>
      <p className="text-red-600 font-bold">{ele.price}</p>
    </div>
  );
};

export default ProductCard;
