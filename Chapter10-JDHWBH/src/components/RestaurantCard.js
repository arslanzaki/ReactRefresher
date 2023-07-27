const RestaurantCard = ({
    hero_listing_image,
    name,
    characteristics,
    rating,
  }) => {
    // const {} = restaurant;
    return (
      <div className="w-52 h-60 p-3 m-3 border shadow-lg">
        <img alt="restaurant" src={hero_listing_image} className="w-full h-3/2" />
        <h2 className="font-bold text-sm mt-2">{name}</h2>
        <h3 className="text-sm">{characteristics?.cuisines[0]?.name}</h3>
        <h4 className="text-purple-500 font-bold">{rating} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;