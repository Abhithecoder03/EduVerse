import React, { useState } from "react";
import {
  Button,
  CustomModal,
  FormControl,
  FormLabel,
  Modal,
  useDisclosure,
  Input,
  InputRightElement,
  InputGroup,
  HStack,
  Radio,
  Checkbox,
} from "@chakra-ui/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = () => {
    setSelectedOption(!selectedOption);
  };

  return (
    <div className="w-screen h-screen md:flex">
      {/* Left Side (Hidden on Small Screens) */}
      <div className="hidden md:flex md:w-1/2 bg-yellow p-6 flex-col text-center justify-center">
          <h2 className="text-2xl font-bold text-black">
            "Unlocking Knowledge, Unleashing Potential"
          </h2>
          <h4 className="text-base text-gray-700 mt-4 p-5 ">
            EduVerse is your key to unlocking a world of knowledge and
            unleashing your full potential. Explore a diverse range of
            educational content and discover your path to success Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officiis maiores
            eligendi illum, fugiat ratione architecto minus odit fugit molestias
            cumque.
          </h4>
      </div>

      <div className="w-full md:w-1/2 bg-blue h-full px-6 flex flex-col text-center justify-center items-center">
        <h4 className="text-3xl font-bold text-white tracking-widest">Login</h4>
        <h2 className="text-xl text-white mt-4 px-5">
          Welcome Back, Please login to continue
        </h2>

        <div className="w-4/5 lg:w-1/2 pt-8 flex flex-col text-center justify-center p-4">
          <FormControl isRequired>
            <FormLabel className="text-white">
              Username / Email Address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter Here..."
              className="placeholder-gray-600"
              bgColor="white"
            />
          </FormControl>
          <FormControl className="" mt={4}>
            <FormLabel textColor="white">Password</FormLabel>
            <InputGroup>
              <Input
                type={toggle ? "text" : "password"}
                placeholder="******"
                className="placeholder-gray-600"
                bgColor="white"
              />
              <InputRightElement>
                <Button bgColor="white" onClick={() => setToggle(!toggle)}>
                  {toggle ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <div className="flex justify-between mt-8 text-white">
            <Checkbox defaultChecked>Reminder me</Checkbox>
            <a href="https://stock.adobe.com/in/images/latex-handschuh-zeigt-mittelfinger-vor-schwarzem-hintergrund-bei-blaulicht-und-rotlicht/342314183">
              Forgot Password?
            </a>
          </div>

          <Button className="mt-6" bg="#FFE143">
            Login
          </Button>

          <p className="hidden md:flex text-white mt-6 justify-center">Don’t Have an Account? </p>

          <div className="hidden md:flex justify-between mt-8 text-white">
            <Link
              className="text-sm md:px-3 md:py-2 bg-white text-black rounded"
              to="/signup"
            >
              Sign up as Tutor
            </Link>
            <Link
              className="text-sm md:px-3 md:py-2 bg-white text-black rounded"
              to="/signup"
            >
              Sign up as Student
            </Link>
          </div>

          {/* Sign up button Mobile Screen */}
          <p className="text-white mt-6 md:hidden justify-center">Don’t Have an Account?<a className="text-custom-yellow" href=""> Sign up now</a></p>

        </div>
      </div>
    </div>
  );
};

export default Login;
