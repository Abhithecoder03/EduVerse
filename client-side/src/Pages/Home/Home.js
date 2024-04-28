import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex-col overflow-x-hidden p-0 m-0">
        <div className="flex flex-col w-screen overflow-y-auto p-0 m-0 ">
          <div className="w-screen h-720 flex flex-col bg-blue">
            <div className="ml-16 h-full flex flex-col justify-center items-start tracking-wide font-extrabold ">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl pb-2 tracking-widest">
                Revolutionize your
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl pb-2 tracking-widest font-extrabold">
                learning with the best
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl tracking-widest font-bold">
                resources!
              </h1>
            </div>
          </div>

          {/* //!============================== */}
          <div className="h-387 sm:h-320 lg:h-240 xl:h-192 bg-white w-full text-black flex flex-col justify-center items-start tracking-wide">
            <div className="h-1/2 sm:w-3/4 lg:w-1/2 xl:w-1/2 ml-4 sm:ml-16 lg:ml-20 text-black flex flex-col justify-center items-start tracking-wide">
              <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                Dive into our book collection or explore curated YouTube courses,
                what are you waiting for?
              </h1>
              <div className="flex flex-row mt-6 font-semibold text-sm">
                <Link to="student/books" className="bg-yellow text-black px-4 py-3 rounded-lg" href="#">
                  Browse Books
                </Link>
                <Link to="student/videoCourse"
                  className="bg-blue ml-4 text-white px-4 py-3 rounded-lg"
                >
                  Watch Courses
                </Link>
              </div>
            </div>
          </div>

          {/*  //!=============================== */}
          <div className="md:h-616 md:p-8 lg:p-0 w-full bg-blue text-black">
            <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center mt-4">
              <div className="flex flex-col sm:w-1/2 h-full lg:w-1/3 p-4 items-center ">
                <img
                  src="/Assets/Home/Book.jpg"
                  alt=""
                  className="w-96 h-3/6 sm:w-96 sm:h-3/6 md:h-4/6 object-fit rounded"
                />

                <h4 className="text-xl sm:text-2xl font-semibold mt-8">
                  Book Selection
                </h4>
                <p className="text-sm sm:text-base mt-4">
                  Our handpicked books will change the way you learn and grow.
                  Curate your personalized reading list today.
                </p>
              </div>

              <div className="flex flex-col sm:w-1/2 h-full lg:w-1/3 p-4 items-center">
                <img
                  src="/Assets/Home/Girl.jpg"
                  alt=""
                  className="w-96 h-3/6 sm:h-3/6 md:h-4/6 object-fit  rounded"
                />

                <h4 className="text-xl sm:text-2xl font-semibold mt-8">
                  Courses Galore
                </h4>
                <p className="text-sm sm:text-base mt-4">
                  Get access to a vast selection of YouTube courses carefully
                  curated by our team of educational enthusiasts, ready to make
                  your learning efficient and fun.
                </p>
              </div>
            </div>
          </div>

          {/* //!=================================== */}
          <div className="h-500 sm:h-387 lg:h-240 xl:h-192 bg-white text-black flex flex-col justify-center">
            <div className="h-1/2 sm:w-3/4 lg:w-1/2 xl:w-1/2 ml-4 sm:ml-20 lg:ml-20 text-black flex flex-col justify-center items-start tracking-wide">
              <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                Having Doubts? Ask our Experts!
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-normal mt-4 mb-6">
                Introducing our Expert Q&A section featuring ChatGPT, Bard
                chat-based AI tools from Google, and our experienced Tutors. You
                can ask questions in text or simply upload photos/videos for
                detailed queries. Get precise, professional answers from our
                experts.
              </p>
              <div className="flex flex-row font-semibold text-sm">
                <a
                  className="bg-yellow text-black px-4 py-3 rounded-lg hover:bg-yellow-dark hover:text-white"
                  href="#">
                  Doubt Solve
                </a>
              </div>
            </div>
          </div>

          {/* //!================================= */}
          <div className="md:h-616 w-full bg-blue text-black justify-center">
            <div className="ml-4 mr-4 mt-8 sm:mr-20 sm:ml-20 lg:ml-20">
              <div className=" text-black flex flex-col justify-center items-start tracking-wide">
                <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                  Got Questions?
                </h1>
              </div>
              <div className="mt-10 w-full">
                <div className="flex flex-col sm:flex-row w-full border-black">
                  <div className="w-full sm:w-1/2 p-4 sm:mr-2">
                    <h1 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-bold">
                      How do you curate the books?
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-normal mt-4 mb-6">
                      Our dedicated team of bibliophiles carefully selects each
                      book, based on quality, relevance, and reader feedback to
                      ensure you have the best reading experience.
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 p-4">
                    <h1 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-bold">
                      Are all courses free?
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-normal mt-4 mb-6">
                      Yes, our platform provides access to free, high-quality
                      YouTube courses to ensure education is both fun and
                      affordable for everyone.
                    </p>
                  </div>
                </div>
                <div className="mt-0 sm:mt-10 w-full">
                  <div className="flex flex-col sm:flex-row w-full border-black">
                    <div className="w-full sm:w-1/2 p-4 sm:mr-2">
                      <h1 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-bold">
                        How often is content updated?
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-normal mt-4 mb-6">
                        We're constantly on the lookout for new books and courses,
                        so you can expect our platform to be updated frequently
                        with fresh content.
                      </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-4">
                      <h1 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-bold">
                        Can I suggest new content?
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-normal mt-4 mb-6">
                        Absolutely! We love hearing your suggestions and actively
                        engage with our users' feedback to improve and expand our
                        platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
