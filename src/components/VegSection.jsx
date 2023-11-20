import ProductCard from "./ProductCard";
const data = [
  {
    id: 0,
    name: "Brinjal",
    price: "₹100",
    img: "/images/vegetable/brinjal.jpg",
  },
  {
    id: 1,
    name: "Carrot",
    price: "₹100",
    img: "/images/vegetable/carrot.jpg",
  },
  {
    id: 2,
    name: "Onion",
    price: "₹100",
    img: "/images/vegetable/onion.jpg",
  },
  {
    id: 3,
    name: "Potato",
    price: "₹100",
    img: "/images/vegetable/potato.jpg",
  },
  {
    id: 4,
    name: "Tomato",
    price: "₹100",
    img: "/images/vegetable/tomato.jpg",
  },
];

const VegSection = () => {
  return (
    <div className="container py-16 px-9">
      <div className="flex gap-2 flex-col">
        <p className="text-2xl font-bold pl-3">Vegetables</p>
        <div className="grid grid-cols-5 gap-10">
          {data.map((ele) => {
            return (
              <ProductCard
                key={ele.id}
                name={ele.name}
                img={ele.img}
                price={ele.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VegSection;
