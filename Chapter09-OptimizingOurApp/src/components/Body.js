import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import FakeStoreCard from "./FakeStoreCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  // searchText Is A Local State Variable.
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  //const [fakeStore, setFakeStore] = useState([]);
  const [loading, setLoading] = useState(false);
  const online = useOnline();

  if (!online) return <h1>Check Your Internet</h1>

  // async function fakeStoreApi() {
  //   setLoading(true);
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const products = await data.json();
  //   setFakeStore(products);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fakeStoreApi();
  //   //console.log("RE-RENDERING");
  // }, []);

  // useEffect(() => {}, [restaurants]);

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
        {loading ? (
          <Shimmer />
        ) : (
          // fakeStore.map((product) => {
          //   return <FakeStoreCard {...product} key={product.id} />;
          // })
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.code}
                key={restaurant.id}
              >
                <RestaurantCard {...restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;