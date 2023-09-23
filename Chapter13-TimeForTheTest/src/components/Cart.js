import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // Subscribe To Only Cart Items

  // const cartItems = useSelector(store => store) // Subscribe To Store
  // Can Cause Major Performance Issue

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Cart Items - {cartItems.length}</h2>
      <button
        className="bg-red-500 text-white font-bold text-sm py-1 px-2 rounded"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return (
            <div className="w-52 h-60 p-3 m-3 border shadow-lg" key={item?.id}>
              <img
                src={item?.logo_path}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="text-sm">{item?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
