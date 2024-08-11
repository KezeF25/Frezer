import React, { useState } from 'react';
import styles from './carouselStyle.module.scss';
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/600x400.png?text=Image+1',
    'https://via.placeholder.com/600x400.png?text=Image+2',
    'https://via.placeholder.com/600x400.png?text=Image+3',
    'https://via.placeholder.com/600x400.png?text=Image+4',
    g1,
    g2
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.carousel_control} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.carousel_slide}>
        <img
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt={`Slide ${currentIndex}`}
          className={styles.carousel_image}
        />
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={styles.carousel_image}
        />
      </div>
      <button className={`${styles.carousel_control} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
