import React from "react";
import Category from "../../../Components/Category/Category";
import Search from "../../../Components/Search/Search";
import { Link } from "react-router-dom";
const VideoCourses = () => {
  const handleVideoCoursesCategoryClick = (category) => {
    // Handle category click specific to VideoCourses
    console.log("Clicked on category in VideoCourses:", category);
  };
  return (
    <>
      <div className="flex flex-col w-full bg-grey items-center">
        <div className="flex w-full justify-center mt-8">
          <Search onSearch={handleVideoCoursesCategoryClick} context="VideoCourses"/>
        </div>
        <div className="flex flex-col w-full items-center mt-4">
          <div className="w-full md:w-4/5 border-b-2 border-gray-400"></div>
          <Category searchBooks={handleVideoCoursesCategoryClick} context="VideoCourses" />
        </div>

        <div className="h-full p-2 flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering & Information Technology Courses
            </h4>
            
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
            <Link to="/Student/videoCourse/First">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              </Link>

              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering/Information Technology Courses
            </h4>
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering/Information Technology Courses
            </h4>
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering/Information Technology Courses
            </h4>
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering/Information Technology Courses
            </h4>
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          <div className="flex-col  mt-14 ">
            <h4 className="ml-4">
              Computer Science & Engineering/Information Technology Courses
            </h4>
            <div className="w-full flex flex-wrap mt-5 lg:ml-6 justify-center lg:justify-start hover:b ">
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech First Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded mr-"
                />
                <p className="font-semibold">B.tech Second Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white mr-2 ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-fit rounded"
                />
                <p className="font-semibold">B.tech Third Year(CSE/IT)</p>
              </div>
              <div className="flex flex-col w-72 p-1 items-center border bg-white ">
                <img
                  src="/Assets/VideoCourses/Computer.jpeg"
                  alt=""
                  className="w-96 h-42 object-contain rounded"
                />
                <p className="font-semibold">B.tech Fourth Year(CSE/IT)</p>
              </div>
            </div>
          </div>
          


        </div>
      </div>
    </>
  );
};

export default VideoCourses;
