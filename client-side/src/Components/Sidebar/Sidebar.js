import { useRef, useState } from 'react'
import { Box, Spacer } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TbMessageQuestion } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {

  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)
  
  const user = useSelector((state) => state.user.currentUser);
  const items = [
    { title: 'Dashboard', Icon:MdOutlineDashboardCustomize , href: '/Student' },
    { title: 'Profile', Icon: BiUser, href: '/Student/profile' },
    { title: 'Books', Icon: LiaBookSolid, href: '/Student/books' },
    { title: 'Video Course', Icon: PiVideo, href: '/Student/videoCourse' },
    { title: 'Expert', Icon: HiOutlineChatBubbleBottomCenterText, href: '/Student/doubts' },
    { title: 'Wishlist', Icon: CiBookmarkPlus, href: '#' },
    { title: 'Doubt Solving', Icon: CiBookmarkPlus, href: '/Student/doubts/solver' , hideFor: 'student'},
    { title: 'Ask Doubt', Icon: TbMessageQuestion, href: `/Student/doubt/${user._id}`, hideFor: 'teacher' },
  ]
  return (
    <>
    <button
      onClick={toggleSidebar}
      className="p-3 border-2"
      aria-label="toggle sidebar"
    >
      <GiHamburgerMenu className='relative' />
    </button>
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <>
          <motion.div
            {...framerSidebarBackground}
            aria-hidden="true"
            className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
          ></motion.div>
          <motion.div
            {...framerSidebarPanel}
            className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-gray bg-white"
            ref={ref}
            aria-label="Sidebar"
          >
            <div className="flex items-center justify-between p-5 border-b-2 gray">
              <Box display='flex' className='h-20 '>
                <Box bg='#FFFFFF' p={4} color='Black' className='flex justify-between items-center overflow-hidden'>
                  <h1 className="text-2xl font-semibold text-black ml-2"> <span>Edu</span><span className='text-blue'>Verse</span> </h1>
                </Box>
              </Box>
              <button
                onClick={toggleSidebar}
                className="p-3 hover:text-blue border-2 border-gray rounded-xl"
                aria-label="close sidebar"
              >
                <AiOutlineRollback />
              </button>
            </div>
            <ul>
              {items.filter(item => !(item.hideFor === user.role)).map((item, idx) => {
                const { title, href, Icon } = item;
                return (
                  <li key={title}>
                    <Link to={href}
                      onClick={toggleSidebar}
                      className={"flex items-center justify-between gap-5 p-5 transition-all hover:text-blue  border-b-2 hover:bg-grey border-gray"}
                    >
                      <motion.span {...framerText(idx)}>{title}</motion.span>
                      <motion.div {...framerIcon}>
                        <Icon className="text-2xl" />
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
  )
}



const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
}

export default Sidebar;









//             <Link to="/Student/videoCourse">
//               <li className="pl-8">
//                 <button id="3">
//                   <VideoLibrary className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">Video Courses</span>
//                 </button>
//               </li>
//             </Link>
//             <Link to="/Student/books">
//               <li className="pl-8">
//                 <button id="4">
//                   <LocalLibrary className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">Books</span>
//                 </button>
//               </li>
//             </Link>
//             <li className="pl-8">
//               <button id="1">
//                 <Psychology className="text-blue-500 mr-2" />
//                 <span className="text font-semibold">Expert</span>
//               </button>
//             </li>
//             <li className="pl-8">
//               <button id="1">
//                 <Bookmark className="text-blue-500 mr-2" />
//                 <span className="text font-semibold">Wishlist</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//       </section>
//       <section id="sidebar" className="md:hidden  w-1/5 overflow-hidden">
//       <div className="text-red-500 text-xl" onClick={() => setToggle(!toggle)}>
//         {toggle ? <CloseIcon /> : <MenuIcon className="" />}
//       </div>
//       <div className={`${!toggle ? "hidden" : "flex flex-col"}`}>
//         <a
//           href="stDashbord"
//           className="brand items-center text-blue-500 flex flex-col mt-7"
//         >
//           <i className="bx bxs-smile text-blue-500"></i>

//           <div className="icon-container relative ">
//             <div className="shadow-circle h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
//               <PersonIcon className="text-blue-500 text-4xl" />{" "}
//               {/* Center the icon using flex */}
//             </div>
//           </div>

//           <span className="text mt-4 font-semibold">Abhishek Chaurasia</span>
//           <span className="text-gray-600 mt-2 text-sm ">
//             @AbhishekChaurasia
//           </span>
//         </a>
//         <div className="border-b-2 mt-16 border-grey-600 w-3/4 ml-7"></div>
//         <div className="brand-line absolute top-0 left-0 h-full bg-blue-500 w-1"></div>
//         {/* sidebaritem */}
//         <div className="">
//           <ul className="flex flex-col side-menu top ">
//             <Link to="/Student/">
//               <li className="active flex pl-8 ">
//                 <button id="1">
//                   <DashboardIcon className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">Dashboard</span>
//                 </button>
//               </li>
//             </Link>
//             <Link to="/Student/profile">
//               <li className="pl-8">
//                 <button id="2">
//                   <PersonIcon className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">My Profile</span>
//                 </button>
//               </li>
//             </Link>
//             <Link to="/Student/videoCourse">
//               <li className="pl-8">
//                 <button id="3">
//                   <VideoLibrary className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">Video Courses</span>
//                 </button>
//               </li>
//             </Link>
//             <Link to="/Student/books">
//               <li className="pl-8">
//                 <button id="4">
//                   <LocalLibrary className="text-blue-500 mr-2" />
//                   <span className="text font-semibold">Books</span>
//                 </button>
//               </li>
//             </Link>
//             <li className="pl-8">
//               <button id="1">
//                 <Psychology className="text-blue-500 mr-2" />
//                 <span className="text font-semibold">Expert</span>
//               </button>
//             </li>
//             <li className="pl-8">
//               <button id="1">
//                 <Bookmark className="text-blue-500 mr-2" />
//                 <span className="text font-semibold">Wishlist</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//       </>
//   );
// };

// export default Sidebar;
