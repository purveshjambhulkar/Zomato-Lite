import "../App.css";

interface TabProps {
  currentTab: string;
  setActiveTab: (tab: string) => void;
}

const TabOptions: React.FC<TabProps> = ({ currentTab, setActiveTab }) => {
  const tab = [
    {
      id: 1,
      name: "Delivery",
      active_icon:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "rgb(252, 238, 192)",
      inactive_icon:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: "Dining",
      active_icon:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "rgb(229, 243, 243)",
      inactive_icon:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: "Nightlife",
      active_icon:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "rgb(237, 244, 255)",
      inactive_icon:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];

  return (
    <div className="tab-options max-width">
      {tab.map((tab) => {
        return (
          <div
            onClick={() => setActiveTab(tab.name)}
            style={{
              borderBottom: `${
                currentTab === tab.name ? "2px solid rgb(239, 79, 95)" : ""
              }`,
            }}
            className={`tab-options absolute-center ${
              currentTab === tab.name ? "active-tab" : ""
            }`}
          >
            <div
              className="absolute-center tab-icon-container"
              style={{
                backgroundColor: `${
                  currentTab === tab.name
                    ? tab.backdrop
                    : "rgb(211, 200, 200)  "
                }`,
              }}
            >
              <img
                src={`${
                  currentTab === tab.name ? tab.active_icon : tab.inactive_icon
                }`}
                alt="tab icon"
                className={`tab-icon`}
              />
            </div>

            <div
              style={{
                color: `${currentTab === tab.name ? "rgb(239, 79, 95)" : ""}`,
              }}
              className="tab-name"
            >
              {tab.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabOptions;
