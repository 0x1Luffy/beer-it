"use client"

import React, { useState } from 'react';
import BeerCard from './BeerCard';

const Header = () => {

  const [searchBeer, setSearchBeer] = useState("");
  return (
    <>
        <div className='flex justify-between header-container border-solid border-b-4 border-b-red-950 rounded-sm m-5 p-5'>
        <h1 className='text-6xl font-extrabold'>BeerIT</h1>

        <div className='menu-container flex justify-center content-center'>
            <span className='text-3xl font-extrabold mr-28'>News</span>
            <p className='text-3xl font-extrabold'>How We Brew</p>
            </div>

            <div className='Location flex'>
            <h2 className='text-3xl font-extrabold'>WHERE TO BUY</h2>
            </div>
            
        </div>
    </>
    
  )
}

export default Header