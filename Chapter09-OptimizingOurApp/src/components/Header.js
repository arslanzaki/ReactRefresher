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
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
