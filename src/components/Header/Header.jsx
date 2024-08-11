import React from 'react'
import styles from './headerStyle.module.scss'
import logo_img from '../../assets/header_logo.png'
import whatsapp_img from '../../assets/whatsapp.png'
import email_img from '../../assets/email.png'

export const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo_img} alt="error" className={styles.img_logo} />
        <p className={styles.title}>Циркум Флекс</p>
        <nav className={styles.nav}>
            <button className={`${styles.nav_button} ${styles.color_one}`}>О нас</button>
            <button className={`${styles.nav_button} ${styles.color_two}`}>Требования к макетам</button>
            <button className={`${styles.nav_button} ${styles.color_three}`}>Цены на фрезеровку</button>
            <button className={`${styles.nav_button} ${styles.color_one}`}>Примеры Работ</button>
            <button className={`${styles.nav_button} ${styles.color_two}`}>Обрабатываемые материалы</button>
            <button className={`${styles.nav_button} ${styles.color_three}`}>Контакты</button>
        </nav>
        <div className={styles.contacts}>
            <div>
                <img src={whatsapp_img} alt="error" />
                <p>+7 925 006 81 88</p>
            </div>
            <div>
                <img src={email_img} alt="error" />
                <p>frezer@mail.ru</p>
            </div>
        </div>
    </div>
  )
}

export default Header;
