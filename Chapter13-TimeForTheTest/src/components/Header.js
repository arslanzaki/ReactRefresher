import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" src={Logo} className="w-48" />
    </a>
  );
};

const Header = function () {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center px-4 bg-purple-300 shadow-xl">
      <Title />
      <div className="">
        <ul className="flex py-10">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About</Link>
          </li>

          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/cart" data-testid="cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>

        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default Header;
