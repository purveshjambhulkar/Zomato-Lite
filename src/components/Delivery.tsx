import "../App.css";
import { GiSettingsKnobs } from "react-icons/gi";
import Filters from "./Filters";
import DeliveryCollections from "./DeliveryCollections";
import Restaurents from "./Restaurents";

const deliveryFilters = [
  {
    id: 1,
    icon: <GiSettingsKnobs />,
    title: "Filters",
  },
  {
    id: 2,
    icon: "",
    title: "Pure Veg",
  },
  {
    id: 3,
    icon: "",
    title: "Delivery Time",
  },
  {
    id: 4,
    icon: "",
    title: "Rating",
  },
  {
    id: 5,
    icon: "",
    title: "Price",
  },
  {
    id: 6,
    icon: "",
    title: "Cuisine",
  },
];

const deliveryItems = [
  {
    id: 1,
    name: "Idli",
    image:
      "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  },
  {
    id: 2,
    name: "Dose",
    image:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 3,
    name: "Vada",
    image:
      "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
  },
  {
    id: 4,
    name: "Poha",
    image:
      "https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png",
  },
  {
    id: 5,
    name: "Cake",
    image:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 6,
    name: "Sandwich",
    image:
      "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id: 7,
    name: "Healthy Salad",
    image:
      "https://b.zmtcdn.com/data/o2_assets/94d3d2045e5f75fe2e6f49ba9f72fe641686120346.png",
  },
  {
    id: 8,
    name: "Cookies",
    image:
      "https://b.zmtcdn.com/data/dish_photos/e8b/1385411f4c63c4463344647a742bee8b.jpg",
  },
];

const restaurantList = [
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/19058604/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
    name: "Kwality Wall's Ice Cream",
    category: "Ice Cream, Desserts",
    rating: 4.2,
    price: "₹200 for one",
    deliveryTime: "30 mins",
  },
];
const Delivery: React.FC = () => {
  return (
    <div>
      <Filters filters={deliveryFilters}></Filters>
      <DeliveryCollections deliveryItems={deliveryItems}></DeliveryCollections>
      <Restaurents restaurents={restaurantList}></Restaurents>
    </div>
  );
};

export default Delivery;
