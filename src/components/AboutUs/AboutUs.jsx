import React from "react";
import styles from './aboutUsStyle.module.scss'
import Carousel from "./Carousel";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <p className={styles.title}>О Нас</p>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates cum
        voluptas voluptatibus sed corrupti quasi architecto non aperiam sapiente
        earum labore, velit quaerat esse praesentium impedit expedita, aliquid
        enim exercitationem.
      </p>
      <p className={styles.title}>Примеры Работ</p>
      <div className={styles.gallery}></div>
      <Carousel />
    </div>
  );
};

export default AboutUs;
