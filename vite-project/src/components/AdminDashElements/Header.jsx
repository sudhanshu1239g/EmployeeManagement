import React from 'react'
import styles from './Header.module.css'

const Header = ({onLogout}) => {
  return (
    <div>
        <button className={styles.logoutbutton} onClick={onLogout}>Log Out</button>
      
    </div>
  )
}

export default Header
