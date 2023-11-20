/* eslint-disable react/prop-types */
const Cart = ({ setShowCart }) => {
  return (
    <div className="container w-full h-full">
      <p>Your Cart</p>
      <button>Checkout </button>
      <p onClick={setShowCart(false)}>close</p>
    </div>
  );
};

export default Cart;
