import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    name: "Fresh fruits",
    price: "₹100",
    img: "/images/fruits.jpg",
  },
  {
    id: 1,
    name: "Fresh vegetables",
    price: "₹100",
    img: "/images/veg.jpg",
  },
  {
    id: 2,
    name: "Canned goods",
    price: "₹100",
    img: "/images/can.jpg",
  },
  {
    id: 3,
    name: "Fresh Meats",
    price: "₹100",
    img: "/images/meat.jpg",
  },
  {
    id: 4,
    name: "Bakery",
    price: "₹100",
    img: "/images/fruits.jpg",
  },
];

const FruitsSection = () => {
  return (
    <div className="container pt-16 px-9">
      <div className="flex gap-2 flex-col">
        <p className="text-2xl font-bold pl-3">Fruits</p>
        <div className="grid grid-cols-5 gap-10">
          {data.map((ele) => {
            return <ProductCard key={ele.id} ele={ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FruitsSection;
