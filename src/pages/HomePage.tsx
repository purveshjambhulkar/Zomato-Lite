import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TabOptions from "../components/TabOptions";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import "../index.css";
import "../App.css";
const HomePage = () => {
  const [currentScreen, setCurrentScreen] = useState("Delivery");

  const getCurrentScreen = (currentScreen: string) => {
    switch (currentScreen) {
      case "Delivery":
        return <Delivery></Delivery>;
      case "Dining":
        return <Dining></Dining>;
      case "Nightlife":
        return <NightLife></NightLife>;
      default:
        return <Delivery></Delivery>;
    }
  };

  return (
    <>
      <div className="max-width">
        <Header></Header>
        <TabOptions
          currentTab={currentScreen}
          setActiveTab={setCurrentScreen}
        ></TabOptions>
        {getCurrentScreen(currentScreen)}
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
