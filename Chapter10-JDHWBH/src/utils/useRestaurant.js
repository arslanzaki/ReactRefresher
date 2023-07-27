import { useEffect, useState } from "react";

const useRestaurant = (resCode) => {
  const [restaurant, setRestauraunt] = useState(null);

  // Get Data From API
  // Return Restaurant Data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://pk.fd-api.com/api/v5/vendors/${resCode}?include=menus&latitude=30.80552255500003&longitude=73.44493105600004`
    );
    const json = await data.json();
    console.log(json.data.menus[0].menu_categories);
    setRestauraunt(json.data.menus[0].menu_categories);
  }


  return restaurant;
};

export default useRestaurant;
