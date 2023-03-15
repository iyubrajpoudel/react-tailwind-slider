import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import slides from "./data/slides";

function App() {

  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown)
    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, [])

  const [index, setIndex] = useState(0);


const handleKeyDown = (event) => {
    // console.log("Clicked Key:", event.key)
    if (event.keyCode === 37){
        document.querySelector('.prev-button').click();
    }
    if (event.keyCode === 39){
    document.querySelector('.next-button').click();
    }
}

  function nextSlide(){
    if(index===(slides.length - 1)){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }

  function prevSlide(){
    if(index===0){
      setIndex((slides.length - 1));
    }
    else{
      setIndex(index-1);
    }
  }

  function showDots(slideIndex){
    if (index===slideIndex){
      return(
        <div key={slideIndex}>
          <BsFillCircleFill />
        </div>
      )
    }
    else{
      return(
        <div key={slideIndex} onClick={() => setIndex(slideIndex)}>
          <BsCircle />
        </div>
      )
    }
  }


  return (
    <div className="App">
      <div className='w-full max-w-[1400px] h-[700px] mx-auto py-10 px-4 relative group'>
        <div 
        style={{ backgroundImage: `url(${slides[index].url})`}} 
        className="w-full h-full bg-center bg-cover ease-in duration-500"
        >

        <div 
        onClick={prevSlide} 
        className='prev-button absolute top-[50%] left-4 hidden group-hover:block text-2xl rounded-[50%] p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactLeft size={40}/>
        </div>
        <div 
        onClick={nextSlide}
        className='next-button absolute top-[50%] right-4 hidden group-hover:block text-2xl rounded-[50%] p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactRight size={40}/>
        </div>
        </div>
        <div className='mt-4 flex justify-center gap-2'>
          {slides.map(function(slide, slideIndex){return showDots(slideIndex)})}
        </div>
      </div>
    </div>
  );
}

export default App;
