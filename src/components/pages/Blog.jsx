import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";

const Blog = ({blog}) => {
    const {question, answer, date} = blog;
    return (
        <div className='bg-white p-4 md:mb-12 mb-6 rounded-2xl'>
           <h2 className='text-xl font-bold border-b-2 border-dashed border-gray-200 pb-2'>{question}</h2>
           <p className='md:py-4 py-2 border-b-2 border-dashed border-gray-200'><span className='text-green-400'>Answer:</span> <br />{answer}</p>
           <h6 className=' text-gray-600 py-3'><small className='flex items-center gap-2'><MdOutlineDateRange />Added at: {date}</small></h6>
        </div>
    );
};

export default Blog;