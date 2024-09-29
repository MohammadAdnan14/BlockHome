import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';

function Landingpage() {
  return (
    
    <div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-[var(--background)] p-8">
      {/* Main Layout */}
      {/* <Navbar/>  */}
      <div className="relative flex flex-col md:flex-row w-full max-w-6xl justify-between items-center h-full z-10">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col gap-6 max-w-md h-full justify-center md:mt-[-100px]">
          <h1 className="font-extrabold text-7xl text-[var(--primary)] dark:text-[var(--accent)]">
            IQChain
          </h1>
          <span className="text-2xl font-light text-gray-700 dark:text-[var(--foreground)]">
            "Where Knowledge Meets the Blockchain"
          </span>
          <div className="space-y-4">
            <button className="px-6 py-3 bg-[var(--primary)] dark:bg-[var(--accent)] text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side: Spline Scene (Adjusted 20px down) */}
        <div className="w-full md:w-auto h-full flex justify-end items-center mt-[20px]"> {/* Move down by 20px */}
          <div className="w-full h-full max-w-[700px]"> {/* Set max width but keep full height */}
            <Spline scene="https://prod.spline.design/64buftY0pHtSHrcH/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
