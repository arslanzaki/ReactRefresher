import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resCode } = useParams();
  const restaurant = useRestaurant(resCode);

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
              <div className="flex flex-wrap">
                {category?.products.map((item) => {
                  return (
                    <div className="w-52 h-60 p-3 m-3 border shadow-lg">
                      <img src={item?.logo_path} style={{ width: "200px" }} />
                      <p>{item?.name}</p>
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
