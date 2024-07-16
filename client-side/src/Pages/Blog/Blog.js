import React, { useEffect, useState } from "react";
import Category from "../../Components/Category/Category";
import {
  AccountCircle,
  BookmarkBorder,
  Comment,
  FiberManualRecord,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-blogs");
        setBlogs(response.data);

      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className="flex bg-grey overflow-hidden">
      <div className="w-full flex flex-col lg:flex flex-col w-2/3 h-full border-r-2 border-gray-400 overflow-y-auto">
        <div className="flex w-full justify-center">
          <Category />
        </div>
        {blogs && blogs.map((blog) => (
        <Link to={`/blog/${blog._id}`}>
          <div className="flex w-full mb-4 justify-center">
            
            <div className="flex w-full md:w-4/5 border-b-2 border-gray-400">
              <div className="flex flex-col w-2/3 md:w-3/4">
                <div className="flex p-4 items-center">
                  <span className="mr-4">
                    <AccountCircle sx={{ fontSize: 40 }} className="" />
                  </span>
                  <span className="text-sm mr-2 line-clamp-2 truncate md:text-base mr-4 align-middle">{blog.user.fName}</span>
                  <span className="hidden md:block mr-4">
                    <FiberManualRecord sx={{ fontSize: 12 }} />
                  </span>
                  <span className="hidden md:block text-base mr-4">Updated At {new Date(blog.updatedAt).toDateString()}</span>
                </div>
                <div className="text-sm md:text-base px-4 py-2 ">
                  <h4>
                    {blog.tittle}
                  </h4>
                </div>
                <div className="hidden md:block px-4 py-2">
                  <p>
                    {blog.description}
                  </p>
                </div>
                <div className="flex justify-between px-4 py-2">
                  <div className="flex">
                    <button className="text-sm truncate md:text-base bg-yellow p-2 rounded-full text-center font-semibold mr-4">
                      Carrer Advice
                    </button>
                    <span className="hidden md:block mr-4 pt-2">Time Read</span>
                    <span className="hidden md:block mr-4 pt-2">
                      <FiberManualRecord sx={{ fontSize: 12 }} />
                    </span>
                    <span className="hidden md:block mr-4 pt-2">Selected for you</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 pt-2">
                      <Comment />
                    </span>
                    <span className="mr-4 pt-2">
                      <BookmarkBorder />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w1/3 md:w-1/4 items-center">
                <img
                  src="https://media.istockphoto.com/id/1189860501/photo/traveler-with-a-backpack-standing-on-a-mountain-peak-above-clouds-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=Qt5zlTdkGoXp2S9hkB2Nu-OiY_Q-uzNhLbxvRWPrO6o="
                  className="w-36 h-auto md:w-48 md:h-40 p-4 object-fit"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Link>))}



      </div>
      <div className="hidden lg:flex flex-col w-1/3 h-screen">
        <div className="w-full">
          <h4 className="mx-4 mt-4">Most Read</h4>
          <div className="mx-6 my-4">
            <div className="">
              <span className="mr-4">
                <AccountCircle sx={{ fontSize: 40 }} />
              </span>
              <span>Tony Stark</span>
            </div>
            <div className="w-96">
              <h4 className="text-sm mt-2">
                The Genius Behind Ultron: Decoding Tony Stark's Marvelous
                Creation !
              </h4>
            </div>
          </div>
          <div className="mx-6 my-4">
            <div className="">
              <span className="mr-4">
                <AccountCircle sx={{ fontSize: 40 }} />
              </span>
              <span>Tony Stark</span>
            </div>
            <div className="w-96">
              <h4 className="text-sm mt-2">
                The Genius Behind Ultron: Decoding Tony Stark's Marvelous
                Creation !
              </h4>
            </div>
          </div>
          <div className="mx-6 my-4">
            <a href="#" className="text-blue text-sm">
              See the full list
            </a>
          </div>
        </div>
        <div className="w-full mt-2">
          <div className="flex flex-col bg-blue w-96 ml-4">
            <h4 className="text-white text-sm px-4 pt-4 pb-2">
              Want to write your own Blog?
            </h4>
            <p className="text-white px-4 py-2 w-80">
              Explore Your Passion: Dive into Blogging. Share ideas. Inspire
              Others. Start Your Writing Journey Now!{" "}
            </p>
            <Link to='/blog/newStory'>
              <button className="bg-yellow p-2 rounded-full text-center ml-4 my-4 w-28 font-semibold">
                Write here
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="w-96 ml-4 border-t-2 border-gray-400">
            <h4 className="mt-4">Recommended Topics</h4>
            <div className="flex flex-wrap w-96 ">
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Technology
              </button>
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Writing
              </button>
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Relationship
              </button>
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Machine Learning
              </button>
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Self Improvment
              </button>
              <button className="bg-yellow p-2 rounded-full text-center mt-4 mr-4 font-semibold text-sm">
                Politics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
