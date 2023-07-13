const RestaurantCard = ({
    hero_listing_image,
    name,
    characteristics,
    rating,
  }) => {
    // const {} = restaurant;
    return (
      <div className="card">
        <img alt="restaurant" src={hero_listing_image} />
        <h2>{name}</h2>
        <h3>{characteristics?.cuisines[0]?.name}</h3>
        <h4>{rating} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;