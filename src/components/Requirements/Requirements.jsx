import React from "react";
import dxf_icon from '../../assets/DXF.png'
import dwg_icon from '../../assets/DWG.png'
import cdr_icon from '../../assets/CDR.png'
import eps_icon from '../../assets/EPS.png'
import ai_icon from '../../assets/AI.png'
import styles from './requirementsStyle.module.scss'

const Requirements = () => {
  return (
    <div className={styles.requirements}>
      <p className={styles.title}>Требования для присылаемых макетов</p>
      <p className={styles.text}>
        Файлы, присылаемые для фрезеровки, предпочтительны в
        формате *.cdr (программа CorelDRAW)
      </p>
      <p className={styles.text}>Также приветствуются форматы *.eps, *.ai.</p>
      <p className={styles.text}>
        Объекты, предназначенные для резки, должны быть переведены в кривые, не
        должны содержать разомкнутых кривых, растровых изображений, двойных
        линий и наложений контуров друг на друга.
      </p>
      <div className={styles.format_img}>
        <img src={dxf_icon} alt="error" />
        <img src={dwg_icon} alt="error" />
        <img src={cdr_icon} alt="error" />
        <img src={eps_icon} alt="error" />
        <img src={ai_icon} alt="error" />
      </div>
    </div>
  );
};

export default Requirements;
