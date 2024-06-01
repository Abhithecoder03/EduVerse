import React from 'react';
import { AccountCircle, FiberManualRecord, Comment, BookmarkBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample data for books
  const books = [
    { title: 'Book Title 1', authors: 'Author 1', link: '/book1', image: 'book1.jpg' },
    { title: 'Book Title 2', authors: 'Author 2', link: '/book2', image: 'book2.jpg' },
    { title: 'Book Title 3', authors: 'Author 3', link: '/book3', image: 'book3.jpg' },
    { title: 'Book Title 4', authors: 'Author 4', link: '/book4', image: 'book4.jpg' },
  ];

  return (
    <div className="w-screen mx-auto py-8 px-4">

      {/* Blogs Section */}

      <div className='flex w-full flex-col items-center'>
        <div className='flex justify-between'>
          <h2 className="text-xl font-bold left-4">My Blogs</h2>
          <button className="text-sm truncate md:text-base bg-yellow p-2 rounded-full text-center font-semibold">
            See All
          </button>
        </div>


        <div className="flex w-4/5  mb-4 ">
          <div className="flex w-1/2 border-b-2 border-gray-400">
            <div className="flex flex-col w-2/3 md:w-3/4 ">
              <div className="flex p-4 items-center">
                <span className="mr-4">
                  <AccountCircle sx={{ fontSize: 40 }} className="" />
                </span>
                <span className="text-sm line-clamp-2 truncate md:text-base mr-4 align-middle">Tony Stark</span>
                <span className="hidden md:block mr-4">
                  <FiberManualRecord sx={{ fontSize: 12 }} />
                </span>
                <span className="hidden md:block text-base mr-4">Updated 2h ago</span>
              </div>
              <div className="text-sm md:text-base px-4 py-2 ">
                <h4>
                  Advice From a Software Engineer With 8 Years of Experience.
                </h4>
              </div>
              <div className="hidden md:block px-4 py-2">
                <p>
                  Practical tips for those who want to advance in their careers
                  — Hello, and welcome! My name is Benoit. I have been a
                  software engineer for
                </p>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="flex">
                  <button className="text-sm truncate md:text-base bg-yellow p-2 rounded-full text-center font-semibold mr-4">
                    Career Advice
                  </button>

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
            <div className="flex w-1/3 md:w-1/4 items-center">
              <img
                src="https://media.istockphoto.com/id/1189860501/photo/traveler-with-a-backpack-standing-on-a-mountain-peak-above-clouds-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=Qt5zlTdkGoXp2S9hkB2Nu-OiY_Q-uzNhLbxvRWPrO6o="
                className="w-36 h-auto md:w-48 md:h-40 p-4 object-fit"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-1/2 border-b-2 border-gray-400">
            <div className="flex flex-col w-2/3 md:w-3/4">
              <div className="flex p-4 items-center">
                <span className="mr-4">
                  <AccountCircle sx={{ fontSize: 40 }} className="" />
                </span>
                <span className="text-sm mr-2 line-clamp-2 truncate md:text-base mr-4 align-middle">Tony Stark</span>
                <span className="hidden md:block mr-4">
                  <FiberManualRecord sx={{ fontSize: 12 }} />
                </span>
                <span className="hidden md:block text-base mr-4">Updated 2h ago</span>
              </div>
              <div className="text-sm md:text-base px-4 py-2 ">
                <h4>
                  Advice From a Software Engineer With 8 Years of Experience.
                </h4>
              </div>
              <div className="hidden md:block px-4 py-2">
                <p>
                  Practical tips for those who want to advance in their careers
                  — Hello, and welcome! My name is Benoit. I have been a
                  software engineer for
                </p>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="flex">
                  <button className="text-sm truncate md:text-base bg-yellow p-2 rounded-full text-center font-semibold mr-4">
                    Career Advice
                  </button>
                  <button className="text-sm truncate md:text-base bg-yellow p-2 rounded-full text-center font-semibold">
                    See All
                  </button>
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
            <div className="flex w-1/3 md:w-1/4 items-center">
              <img
                src="https://media.istockphoto.com/id/1189860501/photo/traveler-with-a-backpack-standing-on-a-mountain-peak-above-clouds-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=Qt5zlTdkGoXp2S9hkB2Nu-OiY_Q-uzNhLbxvRWPrO6o="
                className="w-36 h-auto md:w-48 md:h-40 p-4 object-fit"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recently Watched Videos Section */}
      <div className="flex justify-center mb-8">
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
      </div>

      {/* Recently Viewed Books Section */}
      <div className="flex w-4/5 flex-wrap items-center justify-center overflow-y-auto mx-auto">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col w-40 mx-2 mt-1 mb-4">
            <Link to={book.link} className="text-center text-sm">
              <div className="object-contain">
                <img
                  src={book.image}
                  alt=""
                  className="h-64"
                />
              </div>
              <div>
                <h2 className="text-center text-sm font-semibold">{book.title}</h2>
              </div>
              <div>
                <h1 className="text-center text-sm">{book.authors}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Dashboard;
