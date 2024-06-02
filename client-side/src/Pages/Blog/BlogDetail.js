import React from 'react';

function BlogDetail() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20 mt-24">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">4 <span className="text-gray-800">useState</span> Mistakes You Should Avoid in React <span className="text-red-600">🚫</span></h1>
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://imgs.search.brave.com/MNXiO3VpQufZ12KUZMZqJPY3-GWm2DnEu-9537GWYiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/My8zZC9TYXR1cm9f/R29qby5wbmcvNTEy/cHgtU2F0dXJvX0dv/am8ucG5n"
              alt="Author"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Gojo Babu</p>
              <p className="text-gray-600">Jan 25, 2024</p>
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
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p className="text-gray-700 text-base">
              React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, <code className="bg-gray-200 rounded px-2 py-1">useState</code>, is fundamental but often misused. Understanding and avoiding these common mistakes is crucial for both beginners and experienced developers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat vero quibusdam et iusto aspernatur, sapiente maxime? Fuga id magnam nostrum obcaecati itaque quas qui, assumenda culpa enim autem possimus mollitia labore ipsum adipisci, animi, omnis dolores! Amet molestias aliquam, facilis quo asperiores ut nihil eius vel ipsa placeat optio dolores, quae esse at ipsam quod quam quibusdam quas accusamus nulla? Ipsum, repudiandae. Ratione aut laboriosam animi repudiandae fuga ea corrupti asperiores ex aliquam necessitatibus sapiente sint, maiores porro, suscipit nulla, culpa quidem tenetur? Labore repudiandae beatae atque amet est facere, veniam corporis animi accusantium culpa voluptatem, magni, voluptas eum?
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
  );
}

export default BlogDetail;
