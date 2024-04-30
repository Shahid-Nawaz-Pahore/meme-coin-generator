"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center">

        <div className="mx-auto">
          <motion.h1 
            className="text-yellow-400 lg:text-[2.875rem] md:text-[1.975rem] mb-[2rem] text-center font-bold "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Generate Meme Coin 🚀
          </motion.h1>
          
          <div 
            className="border-2 p-6 rounded-2xl shadow-2xl border-yellow-400 mx-2 my-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.p 
              className="text-yellow-400 lg:text-[1.875rem] text-[1rem] mb-[1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              MetaData
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                type="text"
                id="token_name"
                className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
                placeholder="Enter Token Name"
                required
              />
              <input
                type="text"
                id="ticker"
                className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
                placeholder="Ticker"
                required
              />
              <motion.p 
                className="text-yellow-400  lg:text-[1.875rem] text-[1.6rem] mb-[1.375rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Tokenomics
              </motion.p>
              <input
                type="text"
                id="decimal"
                className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px]  px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
                placeholder="Enter Token Decimal"
                required
              />
              <input
                type="text"
                id="total_supply"
                className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
                placeholder="Enter Token Total supply"
                required
              />
            </motion.div>

            <motion.button 
              className={`bg-yellow-400 text-black text-[1rem] py-[8px] px-[1.8rem] rounded-full ${isHovered ? 'shadow-lg' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Generate Meme Coin
            </motion.button>

          </div>

        </div>
      </div>
    </>
  );
}
