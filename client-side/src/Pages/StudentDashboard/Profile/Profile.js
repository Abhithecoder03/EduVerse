import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Image } from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import CommunicationDetails from "./CommunicationDetails";
import SocialLinks from "./SocialLinks";
const Profile = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const items = [
    "Personal Information",
    "Communication Details",
    "Social Links",
  ];
  return (
    <div className="w-full flex flex-col md:w-4/5 bg-grey h-screen overflow-y-hidden">
      {/* upper side profile */}
      <div className="flex flex-col">
        <div className="flex flex-row px-10 pt-16 mx-20 justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Welcome back,</span>
            <span className="text-xl font-semibold text-center mt-2">
              @userName
            </span>
          </div>
          <div style={{ position: "relative", textAlign: "center" }}>
            <PersonIcon
              style={{
                position: "absolute",
                top: "75%",
                left: "75%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "4px",
              }}
            />
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </div>
        </div>
        <div className="border-b-2 mt-10 border-black w-4/5 self-center"></div>
      </div>
      {/* upper side end  */}
      {/* form for updating */}
      {/* option */}
      <div className="flex flex-col w-full h-auto overflow-y-hidden">
        <div className="w-4/5 px-10 pt-10 mx-20">
          <ul className="mr-2 flex flex-row text-sm font-medium text-center text-black dark:border-black dark:text-black">
            {items.map((item, index) => (
              <li
                key={index}
                className={` w-1/3 inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:bg-[#D9D9D9] dark:hover:text-black ${
                  activeItem === index ? "bg-[#D9D9D9] dark:bg-[#D9D9D9]" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <a href="#">{item}</a>

                <div className="border-b-2 mt-2 ml-6 border-black w-4/5 self-center"></div>
              </li>
            ))}
          </ul>
          {/* options end */}
        </div>
        <div className="w-4/5 bg-[#D9D9D9]  px-10 pt-10 mx-20 rounded-t-lg pb-10 h-auto overflow-y-scroll ">
          {activeItem === 0 && <PersonalInfo />}{" "}
          {/* Render the component based on activeItem */}
          {activeItem === 1 && <CommunicationDetails />}
          {activeItem === 2 && <SocialLinks />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
