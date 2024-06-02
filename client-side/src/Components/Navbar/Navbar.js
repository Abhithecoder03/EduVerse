// import { Box, Spacer } from "@chakra-ui/react";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import MenuIcon from "@mui/icons-material/Menu";
// import { MdLogout } from "react-icons/md";
// import CloseIcon from "@mui/icons-material/Close";
// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useDispatch, useSelector } from "react-redux";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const User = useSelector((state) => state.user.currentUser);
//   return (
//     <>
//       <flex>
//         <Box display='flex' className='h-20 w-screen '>
//           <Box bg='#FFFFFF' p={4} color='Black' className='flex justify-between items-center overflow-hidden'>
//             <h1 className="text-2xl font-semibold text-black ml-2"> <Link to="/"><span>Edu</span><span className='text-blue'>Verse</span> </Link></h1>
//           </Box>

//           <div className='list-none sm:flex hidden justify-end items-center flex-1 ml-25" ' >
//             <a className="text-lg hover:text-blue mr-10  " href="/about-us">About us</a>
//             <Link
//               to="/blog"
//               className="text-lg hover:text-blue mr-10  "
//               href=""
//             >
//               Blog
//             </Link>
//             <a className="text-lg hover:text-blue mr-10  " href="">Career</a>
//             <a className="text-lg hover:text-blue mr-8  " href=""> Contact us</a>

//             <div className="flex flex-row hidden">
//             <Link className="mr-4 ml-3 pl-3 pr-3 pt-1 pb-1 text-lg border border-transparent hover:text-blue rounded-full" to="/login"> <PersonIcon className='mr-1' />Login  </Link>
//             <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-lg border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Signup">
//               Sign Up
//             </Link>
//             </div>
//             <div className="flex">
//             <Link className="mr-4 ml-[-20px]  pl-3 pr-3 pt-1 pb-1 text-lg border border-transparent hover:text-blue" to="/login"> <LogoutIcon className='mr-1' />Logout </Link>
//             <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-l border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Student/profile">
//             <PersonIcon /> Profile
//               </Link>
//               </div>
             



//           </div>
//           {/*  //!Mobile screen */}

//           <div className="sm:hidden flex flex-1 justify-end items-center">
//           <div className="">
//             <Link className="mr-4 ml-[-20px]  pl-3 pr-3 pt-1 pb-1 text-sm border border-transparent hover:text-blue" to="/login"> <LogoutIcon className='mr-1' />Logout </Link>
//             <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-l border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Student/profile">
//             <PersonIcon /> Profile
//               </Link>
//               </div>
//             <div className="hidden">
//             <Link className="mr-4 ml-[-20px]  pl-3 pr-3 pt-1 pb-1 text-sm border border-transparent hover:text-blue" to="/login"> <PersonIcon className='mr-1' />Login </Link>
//             <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-sm border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Signup">
//               Sign Up
//               </Link>
//               </div>
//             <div className='text-red-500 text-xl mr-5' onClick={() => setToggle(!toggle)}>
//               {toggle ? <CloseIcon /> : <MenuIcon className='' />}
//             </div>

//             <div
//               className={`${!toggle ? "hidden" : "flex"
//                 }  bg-black-gradient absolute top-20 mt-0 mr-0 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//             >
//               <div className='list-none items-start grid grid-cols-1 divide-y p-4 pt-1 rounded-bl-lg bg-white ' >
//                 <a className="text-lg hover:text-blue mr-10  " href="">About us</a>
//                 <Link to="/blog" className="text-lg hover:text-blue mr-10 ">Blog </Link>
//                 <a className="text-lg hover:text-blue mr-10  " href="">Career</a>
//                 <a className="text-lg hover:text-blue mr-10  " href=""> Contact us</a>



//               </div>
//             </div>
//           </div>
//         </Box>
//       </flex>

//     </>
//   );
// };

// export default Navbar;

import { Box } from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector,useDispatch} from "react-redux";
import { logout } from "../../Redux/loginRedux";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch=useDispatch()
  const User = useSelector((state) => state.user.currentUser);

  const handleLogout=async(e)=>{
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <>
      <div className="flex h-20 w-screen">
        <Box bg="#FFFFFF" p={4} color="Black" className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-semibold text-black ml-2">
            <Link to="/">
              <span>Edu</span><span className="text-blue">Verse</span>
            </Link>
          </h1>
          <div className="hidden sm:flex justify-end items-center flex-1 ml-25">
            <Link to="/about-us" className="text-lg hover:text-blue mr-10" >About us</Link>
            <Link to="/blog" className="text-lg hover:text-blue mr-10">Blog</Link>
            <Link to="/" className="text-lg hover:text-blue mr-10" href="">Career</Link>
            <Link to="/Contactus" className="text-lg hover:text-blue mr-8">Contact us</Link>

            {User ? (
              <div className="flex">
                <button className="mr-4 ml-3 pl-3 pr-3 pt-1 pb-1 text-lg border border-transparent hover:text-blue" onClick={handleLogout}>
                  <LogoutIcon className="mr-1" />Logout
                </button>
                <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-lg border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="/student/profile">
                  <PersonIcon /> Profile
                </Link>
              </div>
            ) : (
              <div className="flex">
                <Link className="mr-4 ml-3 pl-3 pr-3 pt-1 pb-1 text-lg border border-transparent hover:text-blue" to="/login">
                  <PersonIcon className="mr-1" />Login
                </Link>
                <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-lg border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="/signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile screen */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div className="text-red-500 text-xl mr-5" onClick={() => setToggle(!toggle)}>
              {toggle ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`${!toggle ? "hidden" : "flex"} bg-black-gradient absolute top-20 mt-0 mr-0 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <div className="list-none items-start grid grid-cols-1 divide-y p-4 pt-1 rounded-bl-lg bg-white">
              <Link to="/about-us" className="text-lg hover:text-blue mr-10" >About us</Link>
            <Link to="/blogs" className="text-lg hover:text-blue mr-10">Blog</Link>
            <Link to="/" className="text-lg hover:text-blue mr-10" href="">Career</Link>
            <Link to="/Contactus" className="text-lg hover:text-blue mr-8">Contact us</Link>

                {User ? (
                  <>
                    <button className="text-lg hover:text-blue mr-10"onClick={handleLogout}>
                      <LogoutIcon className="mr-1" />Logout
                    </button>
                    <Link className="text-lg hover:text-blue mr-10" to="/student/profile">
                      <PersonIcon className="mr-1" /> Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="text-lg hover:text-blue mr-10" to="/login">
                      <PersonIcon className="mr-1" />Login
                    </Link>
                    <Link className="text-lg hover:text-blue mr-10" to="/signup">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Navbar;

