"use client"
import React, { useEffect, useState } from 'react'
import ShimmerUI from './ShimmerUI';
import { Cagliostro } from 'next/font/google';

const BeerCard = () => {

     const [beer, setBeer] = useState([]);
     const [searchBeer, setSearchBeer] = useState([]);
   

    const beerApiData = async () =>{
      const response = await fetch("https://api.punkapi.com/v2/beers");
      setBeer(await response.json());
    }

  useEffect(() =>{
      beerApiData();
  },[]);

  if(beer.length===0){
        return <ShimmerUI/>
  }

    return(

      <>

                  <div className='search-container m-5 p-5 flex justify-center'>

                  <input type='text' placeholder='Brew A Beer' className='text-center rounded-md h-10' value={searchBeer} onChange={(e) => {
                    setSearchBeer(e.target.value)
                  }}  ></input>
                  <button className='btn  ml-5 w-36 hover:scale-50 font-extrabold text-xl border-solid border-2 border-sky-500 rounded-md' 

                  onClick={() =>{

                    const newSearch = beer.filter((elem) => elem.name.toLowerCase().includes(searchBeer.toLowerCase()));

                    setBeer(newSearch);
                    console.log("clicked");


                  }}

                  >Search</button>

                  </div>






        <div className='main-cardConatiner flex flex-wrap m-5 p-5'>

            {
              beer.map((curElem) =>{
        return(
          <div className="card w-80 cursor-pointer h-96 border-solid border-2 border-sky-500 m-5 p-5 rounded-md text-center font-semibold overflow-hidden hover:shadow-2xl" key={curElem.id}>
          <div className='beerlogo flex justify-center content-center'>
            <img src={curElem.image_url} className='w-20 h-60'/>
          </div>

          <div className='detail-container inline-block'>

          <div className='beer-nm text-lg font-extrabold text-red-500'><h1>{curElem.name}</h1></div>
          <div className='beer-tagline text-lg bg-gradient-to-r from-black via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text '><h2>{curElem.tagline}</h2></div>
          <div className='beer-brewdate font-extrabold text-blue-700'><h3>Brewed:{curElem.first_brewed}</h3></div>
          


          </div>
          
                
                
        </div>
        ) 
      })
            }
        </div>
      </>
      
    )

  
}
export default BeerCard