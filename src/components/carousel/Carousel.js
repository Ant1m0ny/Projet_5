import { useState } from 'react';
import './Carousel.scss';
import Arrow from '../../assets/images/arrowSide.svg'

export function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) {
    return null;
  }

  function goToPrev() {
    setCurrentIndex((currentIndex) => 
      (currentIndex === 0) ? images.length - 1 : currentIndex - 1
    );
  }

  function goToNext() {
    setCurrentIndex((currentIndex) => 
      (currentIndex === images.length - 1) ? 0 : currentIndex + 1
    );
  }

  return (
      <div className="carousel">

        <div className="carouselInner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
              />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button className='prevArrow' onClick={goToPrev}>
              <img src={Arrow}/>
            </button>
            <button className='nextArrow' onClick={goToNext}>
              <img src={Arrow}/>
            </button>
            <div className='carouselPagination'>
              {currentIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>
  );
}