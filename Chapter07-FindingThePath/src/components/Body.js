import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import FakeStoreCard from "./FakeStoreCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  // searchText Is A Local State Variable.
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [fakeStore, setFakeStore] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fakeStoreApi() {
    setLoading(true);
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setFakeStore(products);
    setLoading(false);
  }
  useEffect(() => {
    fakeStoreApi();
    //console.log("RE-RENDERING");
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(data);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-list">
        {/* {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })} */}
        {loading ? (
          <Shimmer />
        ) : (
          fakeStore.map((product) => {
            return <FakeStoreCard {...product} key={product.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
