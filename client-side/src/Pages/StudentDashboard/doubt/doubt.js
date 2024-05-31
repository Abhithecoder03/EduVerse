import React from 'react';

const NewStory = () => {
    return (
        <div className='flex items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 flex flex-col w-1/2 self-center  shadow-lg rounded-lg'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='text-2xl font-bold text-indigo-600'>OOO</div>
                    <div className='ml-4 text-gray-700'>
                        <span className='font-medium'>Draft in PrateekMishra</span>
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300'>
                        Publish
                    </button>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-800 mt-4'>Title</h3>
                    <p className='text-gray-600 mt-2'>Tell your story</p>
                </div>
            </div>
        </div>
    );
}

export default NewStory;
