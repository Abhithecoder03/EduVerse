import React, { useState } from "react";

import axios from "axios";

// import React from "react";
import Search from "../../../Components/Search/Search";
import Category from "../../../Components/Category/Category";
import { Link } from "react-router-dom";
const BooksSearch = () => {
  const [books, setBooks] = useState([]);

  const searchBooks = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerm
        )}&maxResults=${20}`
      );
      const bookItems = response.data.items;
      const retrievedBooks = bookItems.map((item) => {
        const volumeInfo = item.volumeInfo;
        return {
          title: volumeInfo.title,
          authors: volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown",
          image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "",
          link: volumeInfo.previewLink
        };
      });
      setBooks(retrievedBooks);
    } catch (error) {
      console.error("Error searching books:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className="flex flex-col w-full bg-grey items-center overflow-hidden">
      <div className="flex w-full justify-center mt-8">
        <Search onSearch={searchBooks} context="BooksSearch" /> </div>
      <div className="flex flex-col w-full items-center mt-4">
        <div className="w-full md:w-4/5 border-b-2 border-gray-400"></div>
        <Category searchBooks={searchBooks} context="BooksSearch" />
      </div>
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
              {/* You can add additional information here */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSearch;



