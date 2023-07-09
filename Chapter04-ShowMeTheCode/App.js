// # Chapter 04 - Talk Is Cheap, Show Me The Code

import React from "react";
import ReactDOM from "react-dom/client";

/**
    Header
        - Logo
        - Nav Items (Right Side)
        - Cart
    Body
        - Search Bar
        - Restaurant List
            - Restaurant Card
                - Image
                - Name
                - Rating
                - Cusines
    Footer
        - Links
        - Copyright
*/

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

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

const restaurantList = [
  {
    id: 68898,
    code: "yzkc",
    budget: 2,
    characteristics: {
      cuisines: [
        {
          id: 110,
          name: "Ice Cream",
          url_key: "ice-cream",
        },
        {
          id: 121,
          name: "Wraps \u0026 Rolls",
          url_key: "wraps-and-rolls",
        },
        {
          id: 253,
          name: "Shakes",
          url_key: "shakes",
        },
        {
          id: 247,
          name: "Savouries",
          url_key: "savouries",
        },
        {
          id: 259,
          name: "Paratha",
          url_key: "paratha",
        },
        {
          id: 139,
          name: "Pakistani",
          url_key: "pakistani",
        },
      ],
      food_characteristics: [],
      primary_cuisine: {
        id: 247,
        name: "Savouries",
        url_key: "savouries",
      },
    },
    accepts_instructions: true,
    customer_type: "all",
    is_active: true,
    is_preorder_enabled: false,
    is_best_in_city: false,
    tag: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
    name: "Mulla Fruit Chat",
    rating: 4.1,
    review_number: 1207,
    address_line2: "",
    latitude: 30.81248111,
    longitude: 73.44813376,
    minimum_order_amount: 149,
    minimum_delivery_fee: 0,
    minimum_delivery_time: 25,
    original_delivery_fee: 0,
    delivery_fee_delta: 0,
    free_delivery_label: null,
    minimum_pickup_time: 10,
    is_vat_visible: false,
    is_vat_included_in_product_price: false,
    hero_listing_image:
      "https://images.deliveryhero.io/image/fd-pk/LH/yzkc-listing.jpg",
    distance: 0.8320177723500983,
    has_delivery_provider: true,
    loyalty_program_enabled: false,
    loyalty_percentage_amount: 0,
    vertical: "restaurants",
    is_premium: false,
    ncr_pricing_model: "",
    ncr_token: "",
    preorder_time_offset: null,
    partner_ids: [],
    metadata: {
      available_in: null,
      timezone: "Asia/Karachi",
      close_reasons: [],
      is_delivery_available: true,
      is_pickup_available: true,
      is_flood_feature_closed: false,
      is_temporary_closed: false,
      has_discount: true,
      events: [],
    },
    tags: [
      {
        code: "DEAL",
        text: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
        origin: "DPS",
        label_metadata: null,
      },
    ],
    chain: {
      code: "",
      name: "",
    },
    discounts_info: [],
    location_event: null,
    favorite_data: null,
    url_key: "mulla-fruit-chat",
    minimum_basket_value_discount: null,
  },
  {
    id: 37484,
    code: "w8oc",
    budget: 1,
    characteristics: {
      cuisines: [
        {
          id: 248,
          name: "Pulao",
          url_key: "pulao",
        },
        {
          id: 193,
          name: "Biryani",
          url_key: "biryani",
        },
        {
          id: 250,
          name: "Haleem",
          url_key: "haleem",
        },
      ],
      food_characteristics: [],
      primary_cuisine: {
        id: 193,
        name: "Biryani",
        url_key: "biryani",
      },
    },
    accepts_instructions: true,
    customer_type: "all",
    is_active: true,
    is_preorder_enabled: false,
    is_best_in_city: false,
    tag: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
    name: "Karachi Al Noorani Biryani",
    rating: 3.9,
    review_number: 1135,
    address_line2: "Ravi Rd, Harni Wala Chok Samadpura Okara",
    latitude: 30.8065834,
    longitude: 73.43975995,
    minimum_order_amount: 149,
    minimum_delivery_fee: 0,
    minimum_delivery_time: 20,
    original_delivery_fee: 0,
    delivery_fee_delta: 0,
    free_delivery_label: null,
    minimum_pickup_time: 5,
    is_vat_visible: false,
    is_vat_included_in_product_price: false,
    hero_listing_image:
      "https://images.deliveryhero.io/image/fd-pk/LH/w8oc-listing.jpg",
    distance: 0.5077634660533067,
    has_delivery_provider: true,
    loyalty_program_enabled: false,
    loyalty_percentage_amount: 0,
    vertical: "restaurants",
    is_premium: false,
    ncr_pricing_model: "",
    ncr_token: "",
    preorder_time_offset: null,
    partner_ids: [],
    metadata: {
      available_in: null,
      timezone: "Asia/Karachi",
      close_reasons: [],
      is_delivery_available: true,
      is_pickup_available: true,
      is_flood_feature_closed: false,
      is_temporary_closed: false,
      has_discount: true,
      events: [],
    },
    tags: [
      {
        code: "DEAL",
        text: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
        origin: "DPS",
        label_metadata: null,
      },
    ],
    chain: {
      code: "",
      name: "",
    },
    discounts_info: [],
    location_event: null,
    favorite_data: null,
    url_key: "karachi-al-noorani-biryani",
    minimum_basket_value_discount: null,
  },
  {
    id: 71979,
    code: "man0",
    budget: 1,
    characteristics: {
      cuisines: [
        {
          id: 248,
          name: "Pulao",
          url_key: "pulao",
        },
        {
          id: 193,
          name: "Biryani",
          url_key: "biryani",
        },
        {
          id: 250,
          name: "Haleem",
          url_key: "haleem",
        },
      ],
      food_characteristics: [],
      primary_cuisine: {
        id: 193,
        name: "Biryani",
        url_key: "biryani",
      },
    },
    accepts_instructions: true,
    customer_type: "all",
    is_active: true,
    is_preorder_enabled: false,
    is_best_in_city: false,
    tag: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
    name: "Karachi Biryani",
    rating: 3.7,
    review_number: 188,
    address_line2: "",
    latitude: 30.8066065,
    longitude: 73.4396489,
    minimum_order_amount: 149,
    minimum_delivery_fee: 0,
    minimum_delivery_time: 20,
    original_delivery_fee: 0,
    delivery_fee_delta: 0,
    free_delivery_label: null,
    minimum_pickup_time: 10,
    is_vat_visible: false,
    is_vat_included_in_product_price: false,
    hero_listing_image:
      "https://images.deliveryhero.io/image/fd-pk/LH/man0-listing.jpg",
    distance: 0.518675898726423,
    has_delivery_provider: true,
    loyalty_program_enabled: false,
    loyalty_percentage_amount: 0,
    vertical: "restaurants",
    is_premium: false,
    ncr_pricing_model: "",
    ncr_token: "",
    preorder_time_offset: null,
    partner_ids: [],
    metadata: {
      available_in: null,
      timezone: "Asia/Karachi",
      close_reasons: [],
      is_delivery_available: true,
      is_pickup_available: true,
      is_flood_feature_closed: false,
      is_temporary_closed: false,
      has_discount: true,
      events: [],
    },
    tags: [
      {
        code: "DEAL",
        text: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
        origin: "DPS",
        label_metadata: null,
      },
    ],
    chain: {
      code: "",
      name: "",
    },
    discounts_info: [],
    location_event: null,
    favorite_data: null,
    url_key: "karachi-biryani-man0",
    minimum_basket_value_discount: null,
  },
  {
    id: 28592,
    code: "v6qk",
    budget: 2,
    characteristics: {
      cuisines: [
        {
          id: 110,
          name: "Ice Cream",
          url_key: "ice-cream",
        },
        {
          id: 121,
          name: "Wraps \u0026 Rolls",
          url_key: "wraps-and-rolls",
        },
        {
          id: 253,
          name: "Shakes",
          url_key: "shakes",
        },
        {
          id: 89,
          name: "Beverages",
          url_key: "beverages-89",
        },
        {
          id: 259,
          name: "Paratha",
          url_key: "paratha",
        },
        {
          id: 84,
          name: "Desserts",
          url_key: "desserts",
        },
        {
          id: 86,
          name: "Fast Food",
          url_key: "fast-food",
        },
      ],
      food_characteristics: [],
      primary_cuisine: {
        id: 110,
        name: "Ice Cream",
        url_key: "ice-cream",
      },
    },
    accepts_instructions: true,
    customer_type: "all",
    is_active: true,
    is_preorder_enabled: false,
    is_best_in_city: false,
    tag: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
    name: "Chaudhary Ice Cream",
    rating: 4.2,
    review_number: 617,
    address_line2:
      "Venus Chowk, Corner, Rail Bazar, Depalpur Rd, Block B, Okara",
    latitude: 30.8073596,
    longitude: 73.4452627,
    minimum_order_amount: 149,
    minimum_delivery_fee: 0,
    minimum_delivery_time: 20,
    original_delivery_fee: 0,
    delivery_fee_delta: 0,
    free_delivery_label: null,
    minimum_pickup_time: 5,
    is_vat_visible: false,
    is_vat_included_in_product_price: false,
    hero_listing_image:
      "https://images.deliveryhero.io/image/fd-pk/LH/v6qk-listing.jpg",
    distance: 0.20671115158530354,
    has_delivery_provider: true,
    loyalty_program_enabled: false,
    loyalty_percentage_amount: 0,
    vertical: "restaurants",
    is_premium: false,
    ncr_pricing_model: "",
    ncr_token: "",
    preorder_time_offset: null,
    partner_ids: [],
    metadata: {
      available_in: null,
      timezone: "Asia/Karachi",
      close_reasons: [],
      is_delivery_available: true,
      is_pickup_available: true,
      is_flood_feature_closed: false,
      is_temporary_closed: false,
      has_discount: true,
      events: [],
    },
    tags: [
      {
        code: "DEAL",
        text: "NEXTGEN_FREE_DELIVERY_NEW_CUSTOMER",
        origin: "DPS",
        label_metadata: null,
      },
    ],
    chain: {
      code: "",
      name: "",
    },
    discounts_info: [],
    location_event: null,
    favorite_data: null,
    url_key: "chaudhary-ice-cream",
    minimum_basket_value_discount: null,
  },
];

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

const Body = () => {
  return (
    <div className="card-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h4>Footer</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
