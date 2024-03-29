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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
