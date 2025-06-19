import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface DeliveryItem {
  id: number;
  name: string;
  image: string;
  // add other properties if needed
}

interface DeliveryCollectionsProps {
  deliveryItems: DeliveryItem[];
}

var settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow></NextArrow>,
  prevArrow: <PrevArrow></PrevArrow>,
};

const DeliveryCollections: React.FC<DeliveryCollectionsProps> = ({
  deliveryItems,
}) => {
  return (
    <div className="delivery-collections-container">
      <div className="delivery-heading">Inspiration for your first order</div>
      <Slider {...settings} className="delivery-slider">

        {deliveryItems.map((item: any) => {
          return (
            
              <div className="slider-item" style={{ alignItems: "center" }} key={item.id}>
                <img src={item.image} alt=""  className="delivery-item"/>
                <div className="slider-item-name">{item.name}</div>
              </div>
            
          );
        })}
      </Slider>
    </div>
  );
};

export default DeliveryCollections;
