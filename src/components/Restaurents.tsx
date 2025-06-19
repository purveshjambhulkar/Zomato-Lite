interface RestaurentItem {
  id: number;
  image: string;
  name: string;
  category: string;
  rating: number;
  price: string;
  deliveryTime: string;
}
interface RestaurentsProps {
  restaurents: RestaurentItem[];
}
const Restaurents: React.FC<RestaurentsProps> = ({ restaurents }) => {
  return (
    <div className="restaurant-list">
      {restaurents.map((restaurent) => (
        <div key={restaurent.id} className="restaurant-item">
          <img
            src={restaurent.image}
            alt={restaurent.name}
            className="restaurant-image"
          />
          <h3 className="restaurant-name">{restaurent.name}</h3>
          <p className="restaurant-category">{restaurent.category}</p>
          <p className="restaurant-rating">Rating: {restaurent.rating}</p>
          <p className="restaurant-delivery-time">
            Delivery Time: {restaurent.deliveryTime}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Restaurents;
