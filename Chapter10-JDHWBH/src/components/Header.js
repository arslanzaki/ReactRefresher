import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 id="title" key="title">
      Food Villa
    </h1>
  );
};

const Header = function () {
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
          <li className="p-3">Cart</li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
