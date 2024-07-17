import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewStory = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    

    const handlePublish = async () => {
        if (!user) {
            toast.error('User not logged in');
            return;
        }

        const newBlog = {
            tittle: title,
            description: content,
            user: user
        };

        try {
            const response = await axios.post('https://eduverse-zcxl.onrender.com/new-blog', newBlog, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                toast.success('Blog published successfully!');
                setTimeout(() => navigate('/blog'), 2000); // Navigate to /blog after 2 seconds
            } else {
                toast.error('Failed to publish blog: ' + response.statusText);
            }
        } catch (error) {
            toast.error('Error publishing blog: ' + error.message);
        }
    };

    return (
        <div className='flex justify-center bg-gray-100'>
            <div className='bg-white h-screen p-6 flex flex-col w-full max-w-2xl shadow-lg rounded-lg'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='text-3xl font-bold text-gray-800'><img src='/90.png' className='w-10 '></img></div>
                    <div className='text-gray-600'>
                        <span>Draft in {user?.fname}</span>
                    </div>
                    <div>
                        <button 
                            onClick={handlePublish} 
                            className='bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300'
                        >
                            Publish
                        </button>
                    </div>
                </div>
                <div className='border-b border-gray-300 mb-6'></div>
                <div>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                        className='w-full text-4xl font-semibold text-gray-800 mb-4 p-2 border-b border-gray-300 focus:outline-none'
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Tell your story...'
                        className='w-full text-gray-600 p-2 h-64 border-b border-gray-300 focus:outline-none'
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default NewStory;
