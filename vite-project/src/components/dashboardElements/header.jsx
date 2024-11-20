
import React from 'react'
import styles from './header.module.css'

function Header({ data, onLogout }) {
  // Get logged-in user details from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  let firstName = "User"; // Default fallback

  const currentEmployee = data.employeeData.find(
    (e) => e.email === loggedInUser.email
  );
  // Check if employee exists before accessing firstName
  firstName = currentEmployee?.firstName || "Employee";

  return (
    <div className={styles.head}>
      <h1>
        Hello <br /> <span>{firstName} 👋</span>
      </h1>
      <button className={styles.logoutbutton} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Header;


