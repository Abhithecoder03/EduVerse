import { Box, Spacer } from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <flex>
        <Box display='flex' className='h-20 w-screen '>
          <Box bg='#FFFFFF' p={4} color='Black' className='flex justify-between items-center overflow-hidden'>
            <h1 className="text-2xl font-semibold text-black ml-2"> <Link to="/"><span>Edu</span><span className='text-blue'>Verse</span> </Link></h1>
          </Box>

          <div className='list-none sm:flex hidden justify-end items-center flex-1 ml-25" ' >
            <a className="text-lg hover:text-blue mr-10  " href="/about-us">About us</a>
            <Link
              to="/blog"
              className="text-lg hover:text-blue mr-10  "
              href=""
            >
              Blog
            </Link>
            <a className="text-lg hover:text-blue mr-10  " href="">Career</a>
            <a className="text-lg hover:text-blue mr-8  " href=""> Contact us</a>


            <Link className="mr-4 ml-3 pl-3 pr-3 pt-1 pb-1 text-lg border border-transparent hover:text-blue" to="/login"> <PersonIcon className='mr-1' />Login  </Link>
            <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-lg border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Signup">
              Sign Up
            </Link>
          </div>
          {/*  //!Mobile screen */}

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Link className="mr-4 ml-[-20px]  pl-3 pr-3 pt-1 pb-1 text-sm border border-transparent hover:text-blue" to="/login"> <PersonIcon className='mr-1' />Login </Link>
            <Link className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 text-sm border bg-yellow text-black hover:bg-blue hover:text-white rounded font-semibold transition duration-300 ease-in-out" to="Signup">
              Sign Up
            </Link>
            <div className='text-red-500 text-xl mr-5' onClick={() => setToggle(!toggle)}>
              {toggle ? <CloseIcon /> : <MenuIcon className='' />}
            </div>

            <div
              className={`${!toggle ? "hidden" : "flex"
                }  bg-black-gradient absolute top-20 mt-0 mr-0 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <div className='list-none items-start grid grid-cols-1 divide-y p-4 pt-1 rounded-bl-lg bg-white ' >
                <a className="text-lg hover:text-blue mr-10  " href="">About us</a>
                <Link to="/blog" className="text-lg hover:text-blue mr-10 ">Blog </Link>
                <a className="text-lg hover:text-blue mr-10  " href="">Career</a>
                <a className="text-lg hover:text-blue mr-10  " href=""> Contact us</a>



              </div>
            </div>
          </div>
        </Box>
      </flex>

    </>
  );
};

export default Navbar;
