import React from 'react'
import whatsapp_icon from '../../assets/whatsapp.png'
import file_icon from '../../assets/file.png'
import email_icon from '../../assets/email.png'
import map_icon from '../../assets/map.png'
import styles from './contactsStyle.module.scss'

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.title}>Контактная информация</p>
        <div className={styles.contacts}>
            <div className={styles.column}>
                <div className={styles.contact}>
                    <img src={whatsapp_icon} alt="error" />
                    <p>+7 915 006 81 88</p>
                </div>
                <div className={styles.contact}>
                    <img src={file_icon} alt="error" />
                    <p>Требования для макетов</p>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.contact}>
                    <img src={email_icon} alt="error" />
                    <p>GuildFrezer@mail.ru</p>
                </div>
                <div className={styles.contact}>
                    <img src={map_icon} alt="error" />
                    <p>Адрес: ул.пенькова д17</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts