import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    name: "Apple",
    price: "₹100",
    img: "/images/fruits/apple.jpg",
  },
  {
    id: 1,
    name: "Banana",
    price: "₹100",
    img: "/images/fruits/banana.jpg",
  },
  {
    id: 2,
    name: "Grapes",
    price: "₹100",
    img: "/images/fruits/grapes.jpg",
  },
  {
    id: 3,
    name: "Kiwi",
    price: "₹100",
    img: "/images/fruits/kiwi.jpg",
  },
  {
    id: 4,
    name: "Orange",
    price: "₹100",
    img: "/images/fruits/orange.jpg",
  },
];

const FruitsSection = () => {
  return (
    <div id="fruits" className="container pt-16 px-9">
      <div className="flex gap-2 flex-col">
        <p className="text-2xl font-bold pl-3">Fruits</p>
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

export default FruitsSection;
