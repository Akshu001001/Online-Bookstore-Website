import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link } from 'react-router-dom';
function Course() {
  return (
    <>
      
      <div className="min-h-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have{" "} 
              <span  className='text-pink-500'>here! :) </span></h1>
          
              <p className='mt-12'>
                At BookVerse Academy, we believe in empowering learners through quality education. 
                Our handpicked courses are crafted by industry experts and designed to bridge the gap  
                between knowledge and application. 
                Whether you’re a beginner or an advanced learner, we’ve got something for everyone.
              </p>
             
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 
            rounded-md hover:bg-pink-700 duration-300'>Back</button>
       
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            list.map((item)=>(
            <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      
    
    </>
  )
}

export default Course;
