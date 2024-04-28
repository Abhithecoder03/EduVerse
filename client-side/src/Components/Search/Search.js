import React, { useState } from "react";

const Search = ({ onSearch ,context}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // onSearch(searchTerm);
    if (context === 'BooksSearch') {
      // Call function specific to BooksSearch
      onSearch(searchTerm);}
    else{
      onSearch(searchTerm)
    }

  };

  return (
    <form className="w-3/4 md:w-1/2" onSubmit={handleSearchSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-12 p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-1.5 bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;


// import React from "react";

// const Search = () => {
//   return (
//     <form className="w-3/4 md:w-1/2">
//       <label
//         for="default-search"
//         class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//       >
//         Search
//       </label>
//       <div class="relative">
//         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg
//             class="w-4 h-4 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           type="search"
//           id="default-search"
//           class="block w-full h-12 p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Search here..."
//           required
//         />
//         <button
//           type="submit"
//           class="text-white absolute right-2.5 bottom-1.5 bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Search;
