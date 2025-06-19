import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import "../App.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <FaLocationDot className="absolute-center location-icon" />
              <div>Pune</div>
            </div>
            <FaCaretDown />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
            <CiSearch className="absolute-center search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="header-search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <FaUser className="absolute-center" />
          <div className="profile-name">Purvesh</div>
          <FaAngleDown className="absolute-center" />
        </div>
      </div>
    </div>
  );
};

export default Header;
