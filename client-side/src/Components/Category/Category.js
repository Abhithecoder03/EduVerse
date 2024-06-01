// Category.js
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";

const Category = ({ searchBooks ,context}) => {
  const handleCategoryClick = (category) => {
    // Call the searchBooks function with the category text
    if (context === 'BooksSearch') {
      // Call function specific to BooksSearch
      searchBooks(category);}
      
    else{
      searchBooks(category)
    }
  };

  return (
    <div className="w-full flex justify-center relative md:w-4/5 md:h-14 whitespace-nowrap border-b-2 border-gray-400 m-4">
      <span className="flex-none absolute left-2">
        <NavigateBefore />
      </span>
      <div className="flex-initial text-sm w-4/5 h-10 md:w-[90%] md:text-base md:h-12 overflow-x-auto mt-1">
        <span className="mr-4 hover:text-blue hover:cursor-default" onClick={() => handleCategoryClick("For you")}>For you</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("Web Development")}>Web Development</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("App Development")}>App Development</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("Game Development")}>Game Development</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("Python")}>Python</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("Data Structure")}>Data Structure</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("JavaScript")}>JavaScript</span>
        <span className="mr-4 hover:text-blue hover:cursor-pointer" onClick={() => handleCategoryClick("Data Science")}>Data Science</span>
      </div>
      <span className="flex-none absolute right-2">
        <NavigateNext />
      </span>
    </div>
  );
};

export default Category;
