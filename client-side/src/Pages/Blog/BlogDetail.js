import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams(); // Extract the blog ID from the URL parameters
    const [blog, setBlog] = useState(null);
    console.log(id,"id")
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://eduverse-zcxl.onrender.com/blog/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, []);
  
  return (
   <>
   {blog &&
    <div className="min-h-auto bg-gray-100 flex justify-center">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-y-scroll">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">{blog.tittle}</h1>
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://imgs.search.brave.com/MNXiO3VpQufZ12KUZMZqJPY3-GWm2DnEu-9537GWYiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/My8zZC9TYXR1cm9f/R29qby5wbmcvNTEy/cHgtU2F0dXJvX0dv/am8ucG5n"
              alt="Author"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{blog.user.fName}</p>
              <p className="text-gray-600">{new Date(blog.updatedAt).toDateString()}</p>
            </div>
          </div>
          <div className="mb-4">
            <img
              className="w-full h-64 object-cover"
              src="https://imgs.search.brave.com/U1vGQnNWEkpCxyz1T2V1-oZmOVqsaSBrddgq3jcNFl0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMy8wNS91c2Vz/dGF0ZS0tLWhvb2st/Mi5qcGc"
              alt="4 useState Mistakes in React"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="text-gray-700 text-base">
            {blog.description}
            </p>
          </div>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDevelopment</span>
        </div>
      </div>
    </div>
   }
    </>
  );
}

export default BlogDetail;
