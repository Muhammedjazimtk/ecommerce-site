const data = [
  {
    id: 0,
    name: "Fresh fruits",
    count: "9 Products",
    img: "/images/fruits.jpg",
  },
  {
    id: 1,
    name: "Fresh vegetables",
    count: "7 Products",
    img: "/images/veg.jpg",
  },
  {
    id: 2,
    name: "Canned goods",
    count: "9 Products",
    img: "/images/can.jpg",
  },
  {
    id: 3,
    name: "Fresh Meats",
    count: "5 Products",
    img: "/images/meat.jpg",
  },
  {
    id: 4,
    name: "Bakery",
    count: "9 Products",
    img: "/images/fruits.jpg",
  },
  {
    id: 5,
    name: "Aromatics",
    count: "7 Products",
    img: "/images/veg.jpg",
  },
  {
    id: 6,
    name: "Dairy",
    count: "9 Products",
    img: "/images/can.jpg",
  },
  {
    id: 7,
    name: "Coocking oil",
    count: "5 Products",
    img: "/images/meat.jpg",
  },
];

import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="container p-9">
      <div className="grid grid-cols-4 gap-4">
        {data.map((ele) => {
          return <CategoryCard item={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
};

export default Category;
