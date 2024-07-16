import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Image } from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import CommunicationDetails from "./CommunicationDetails";
import SocialLinks from "./SocialLinks";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const [activeItem, setActiveItem] = useState(0);

  const user = useSelector((state) => state.user.currentUser);


  const handleItemClick = (index) => {
    setActiveItem(index);
  };

    const items = [
        "Personal Information",
        "Communication Details",
        "Social Links",
    ];
    return (
        <div className="flex flex-col bg-grey h-full w-full overflow-x-hidden">
            {/* upper side profile */}
            <div className='flex flex-col overflow-x-hidden'>
                <div className="flex w-full justify-center flex-col-reverse md:flex-row md:px-10 md:pt-16 pt-4 md:mx-20 align-middle md:justify-around ">
                    <div className='flex flex-col'>
                        <span className='md:flex hidden text-3xl font-bold'>
                            Welcome back,
                        </span>
                        <span className='text-xl my-2 font-semibold text-center mt-2'>
                            {user.fname} {user.lname} {user.role}
                        </span>
                    </div>
                    <div className='mt-2 flex justify-center' style={{ position: 'relative', textAlign: 'center' }}>
                        <PersonIcon className='top-20 left-24 px-4'
                            style={{
                                position: 'relative',

                                transform: 'translateX(-50%)',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                padding: '4px',
                            }}
                        />
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                    </div>
                </div>
                <div className='border-b-2 mt-10 border-black w-4/5 self-center'></div>

            </div>
            {/* upper side end  */}
            {/* form for updating */}
            {/* option */}
            <div className='flex flex-col w-full h-3/5 justify-center overflow-y-hidden'>
                <div className="m-2 px-4 pt-10 mx-20 justify-around
                ">
                    <ul className="flex flex-col md:flex-row items-center text-sm font-medium text-center text-black dark:border-black dark:text-black">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={`w-full md:w-1/3 inline-block p-4 rounded-md hover:text-gray-600 dark:hover:bg-[#D9D9D9] dark:hover:text-black ${activeItem === index ? "bg-[#D9D9D9] dark:bg-[#D9D9D9]" : ""
                                    }`}
                                onClick={() => handleItemClick(index)}
                            >
                                <p className='border-b-2 mt-2 border-black pb-2'>{item}</p>

                            </li>
                        ))}
                    </ul>
                    {/* options end */}

                </div>
                <div className='bg-[#D9D9D9] px-10 pt-10 mx-0 md:mx-20 rounded-t-lg pb-10 h-4/5 overflow-y-scroll'>
                    {activeItem === 0 && <PersonalInfo />} {/* Render the component based on activeItem */}
                    {activeItem === 1 && <CommunicationDetails />}
                    {activeItem === 2 && <SocialLinks />}
                </div>
            </div>

        </div>);
}

export default Profile;
