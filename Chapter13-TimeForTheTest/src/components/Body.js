import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
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
  const { user, setUser } = useContext(UserContext);

  if (!online) return <h1>Check Your Internet</h1>;

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
      <div className="flex justify-center space-x-2 bg-purple-200 p-4">
        <input
          data-testid="search-input"
          type="text"
          className="p-2 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white px-2 rounded-lg"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            //console.log(data);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <div>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {loading ? (
          <Shimmer />
        ) : (
          // fakeStore.map((product) => {
          //   return <FakeStoreCard {...product} key={product.id} />;
          // })
          restaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.code} key={restaurant.id}>
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
