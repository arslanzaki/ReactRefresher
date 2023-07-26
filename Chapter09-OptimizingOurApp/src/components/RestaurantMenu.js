import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resCode } = useParams();
  const restaurant = useRestaurant(resCode);

  return (
    <>
      <div>RestaurantMenu: {resCode}</div>

      {!restaurant ? (
        <Shimmer />
      ) : (
        restaurant?.map((category) => {
          return (
            <div>
              <h2>{category?.name}</h2>
              {category?.products.map((item) => {
                return (
                  <div className="menu">
                    <img src={item?.logo_path} style={{ width: "200px" }} />
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>
          );
        })
      )}
      <div></div>
    </>
  );
};

export default RestaurantMenu;
