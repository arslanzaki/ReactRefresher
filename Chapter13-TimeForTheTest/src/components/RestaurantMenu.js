import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resCode } = useParams();
  const restaurant = useRestaurant(resCode);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {!restaurant ? (
        <Shimmer />
      ) : (
        restaurant?.map((category) => {
          return (
            <div className="mt-8">
              <h2 className="ml-3 font-bold text-purple-500 text-2xl">
                {category?.name}
              </h2>
              <div className="flex flex-wrap" data-testid="menu">
                {category?.products.map((item) => {
                  return (
                    <div
                      className="w-52 h-60 p-3 m-3 border shadow-lg"
                      key={item?.id}
                    >
                      <img
                        src={item?.logo_path}
                        style={{ width: "200px", height: "150px" }}
                      />
                      <p className="text-sm">{item?.name}</p>
                      <button
                        data-testid="addBtn"
                        className="font-bold bg-purple-500 text-white text-xs px-2 py-1 rounded"
                        onClick={() => handleAddItem(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
