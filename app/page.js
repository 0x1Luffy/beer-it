"use client"

import React from 'react';
import Header from './components/Header';
import BeerCard from './components/BeerCard';
// APP LAYOUT
    //main container
      //Header Container
         //Name, Logo, address,etc
      //cards container
        //img, name, dec, price,tagline,etc

const page = () => {
  return (
    <>
    <Header/>
    <BeerCard/>
    </>
   
    
  )
}

export default page