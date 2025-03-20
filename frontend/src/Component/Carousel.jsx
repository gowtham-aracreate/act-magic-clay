import React, { useState, useEffect } from 'react';
import rightArrow from "../assets/images/rightarrow.svg";

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => setCurrentSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
  const next = () => setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [])

  return (
    <div className="overflow-hidden relative">

      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides}
      </div>

      <div className='absolute inset-0 flex items-center justify-between'>

        <button onClick={prev} className=''>
          <img src={rightArrow} />
        </button>

        <button onClick={next} className=''>
          <img src={rightArrow} />
        </button>
      </div>

      <div className=' absolute bottom-4 right-0 left-0'>
        <div className='flex justify-center items-center gap-2'>
          {slides.map((s, i) => (
            <div key={i} className={` transition-all w-2 h-2 bg-black rounded-full ${currentSlide === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Carousel;
