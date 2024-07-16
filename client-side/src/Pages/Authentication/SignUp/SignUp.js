import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../../Redux/apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function InitialFocus() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure(); // Changed variable names here
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [toggle, setToggle] = useState(false);

  //register bcakend calling using redux
  const [fName,setFname]=useState('')
  const [lName,setLname]=useState('')
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('')
  const navigate=useNavigate()
  const dispatch = useDispatch()

  //
  const handleRegister=(e)=>{
    console.log("Clicked",role);
    e.preventDefault();
    register(dispatch,{fName,lName,userName,email,password,role})
    navigate('/Student/profile');
    
  }
  

  return (
    <>
      <div className="w-full h-screen bg-[#F8F6F2]  ">
        <Box className="flex flex-col md:flex-row w-full h-full items-center justify-center">
          <Box className=" flex flex-col lg:w-1/4 h-1/2  bg-yellow items-center justify-around overflow-hidden">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-black ml-2">
                Sign up as Tutor
              </h2>
            </div>
            <div className="align-middle justify-center items-center text-l py-2 px-10 text-justify">
              <span>
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, repellendus? ipsum dolor sit amet consectetur
                adipisicing elit. Impedit, earum?
              </span>
            </div>
            <div>
              <Button
                className="mb-4"
                bg="#2EB8CB"
                color="white"
                _hover={{ bg: "#FFE143", color: "#ffff" }}
                onClick={() => {
                  onOpen2();
                  setRole("teacher");
                }}
              >
                Sign up
              </Button>
            </div>
          </Box>
          <Box className="flex flex-col lg:w-1/4 h-1/2 bg-blue items-center justify-around overflow-hidden">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-white ml-2">
                Sign up as Student
              </h2>
            </div>
            <div className="align-middle justify-center items-center py-2 px-10 text-justify text-white">
              <span>
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, repellendus? ipsum dolor sit amet consectetur
                adipisicing elit. Impedit, earum?
              </span>
            </div>
            <div>
              <Button
                className=" mb-4"
                bg="#FFE143"
                _hover={{ bg: "#2EB8CB", color: "#ffff" }}
                onClick={() => {
                  onOpen1();
                  setRole("studnet");
                }}
              >
                Sign up
              </Button>
            </div>
          </Box>
        </Box>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen1} // Corrected to use isOpen1
        onClose={onClose1} // Corrected to use onClose1
        isCentered
      >
        <div className="flex align-middle justify-center items-center mt-10 bottom-2">
          <ModalOverlay />
          <ModalContent className="">
            <ModalHeader>
              <div className=" w-full flex flex-col align-center justify-center items-center text-center ">
                <h4 className="text-l font-semibold"> Sign up as a Student</h4>
                <p className="text-sm">
                  Welcome Back, Please login to continue
                </p>
                <hr className="color-black" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className="flex">
                <FormControl className="">
                  <FormLabel>First name</FormLabel>
                  <Input
                    ref={initialRef}
                    type="name"
                    placeholder="Enter Here..."
                    onChange={(e)=>setFname(e.target.value)}
                  />
                </FormControl>

                <FormControl className="mx-2">
                  <FormLabel>Last name</FormLabel>
                  <Input type="name" placeholder="Enter Here..."
                  onChange={(e)=>setLname(e.target.value)} />
                </FormControl>
              </div>

              <FormControl mt={4}>
                <FormLabel>User Name</FormLabel>
                <Input type="name" placeholder="Enter Here..."
                onChange={(e)=>setUserName(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter Here..."
                onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>

              <div className="flex">
                <FormControl className="" mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={toggle ? "text" : "password"}
                      placeholder="******"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? <VisibilityIcon /> : <VisibilityOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl className="mx-2" mt={4}>
                  <FormLabel> Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={toggle ? "text" : "password"}
                      placeholder="******"
                    
                    />
                    <InputRightElement>
                      <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? <VisibilityIcon /> : <VisibilityOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </div>
            </ModalBody>
            <div className=" w-full flex flex-col align-center items-center justify-center px-7 text-center">
              <p className="text-s font-semibold px-4 ">
                
                By creating an account, you agree EduVerse’s
                <span className="text-s text-blue">
                  
                  <Link to="/termConsitions">all Terms & Conditions</Link>
                </span>
                and
                <span className="text-s text-blue">
                  
                  <Link to="/privacy">Privacy Policy</Link>
                </span>
              </p>
            </div>

            <div className="px-4 pt-3">
              <Button
                className="w-full"
                _hover={{ bg: "#2EB8CB", color: "#ffff" }}
                bg="#FFE143"
                onClick={handleRegister}
              >
                Continue
              </Button>
            </div>
            <ModalFooter className="flex">
              <div className="w-full flex align-middle items-center align-center justify-center text-center h-auto p-3 border hover:border-blue ">
                <p>Already Have an Account? </p>
                <Link className="text-s text-blue pl-1" to="/login">
                  Login
                </Link>
              </div>
            </ModalFooter>
          </ModalContent>
        </div>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen2} // Corrected to use isOpen2
        onClose={onClose2} // Corrected to use onClose2
        isCentered
      >
        <div className="flex align-middle justify-center items-center mt-10 bottom-2">
          <ModalOverlay />
          <ModalContent className="">
            <ModalHeader>
              <div className=" w-full flex flex-col align-center justify-center items-center text-center ">
                <h4 className="text-l font-semibold"> Sign up as a Tutor</h4>
                <p className="text-sm">
                  Welcome Back, Please login to continue
                </p>
                <hr className="color-black" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className="flex">
                <FormControl className="">
                  <FormLabel>First name</FormLabel>
                  <Input
                    ref={initialRef}
                    type="name"
                    placeholder="Enter Here..."
                    onChange={(e)=>setFname(e.target.value)}
                  />
                </FormControl>

                <FormControl className="mx-2">
                  <FormLabel>Last name</FormLabel>
                  <Input type="name" placeholder="Enter Here..."  onChange={(e)=>setLname(e.target.value)} />
                </FormControl>
              </div>

              <FormControl mt={4}>
                <FormLabel>Username</FormLabel>
                <Input type="name" placeholder="Enter Here..." 
                onChange={(e)=>setUserName(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter Here..." 
                onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>

              <div className="flex">
                <FormControl className="" mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={toggle ? "text" : "password"}
                      placeholder="******"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? <VisibilityIcon /> : <VisibilityOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl className="mx-2" mt={4}>
                  <FormLabel> Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={toggle ? "text" : "password"}
                      placeholder="******"
                    />
                    <InputRightElement>
                      <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? <VisibilityIcon /> : <VisibilityOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </div>
            </ModalBody>
            <div className=" w-full flex flex-col align-center items-center justify-center px-7 text-center">
              <p className="text-s font-semibold px-4 ">
                
                By creating an account, you agree EduVerse’s
                <span className="text-s text-blue">
                  
                  <a href="">all Terms & Conditions</a>
                </span>
                and
                <span className="text-s text-blue">
                  
                  <a href="">Privacy Policy</a>
                </span>
              </p>
            </div>

            <div className="px-4 pt-3">
              <Button
                className="w-full"
                _hover={{ bg: "#2EB8CB", color: "#ffff" }}
                bg="#FFE143"
                
                onClick={handleRegister}
              >
                Continue
              </Button>
            </div>
            <ModalFooter className="flex">
              <div className="w-full flex align-middle items-center align-center justify-center text-center h-auto p-3 border hover:border-blue ">
                <p>Already Have an Account? </p>
                <Link className="text-s text-blue pl-1" to="/login">
                  Login
                </Link>
              </div>

              {/*  <Button colorScheme="blue" mr={3}>
              SignUp
            </Button> */}
            </ModalFooter>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}

export default InitialFocus;
