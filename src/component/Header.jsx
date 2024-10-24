import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [select, setSelect] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <h1>
          F<span>oo</span>dy Z<span>o</span>ne
        </h1>
        <input type="text" placeholder="Search food..." />
      </div>
      <ul className={styles.bottombar}>
        <li
          onClick={() => {
            setSelect(!select);
          }}
          className={select ? styles.selected : styles.notselected}
        >
          All
        </li>
        <li className={select ? styles.selected : styles.notselected}>
          Breakfast
        </li>
        <li className={select ? styles.selected : styles.notselected}>Lunch</li>
        <li className={select ? styles.selected : styles.notselected}>
          Dinner
        </li>
      </ul>
    </header>
  );
};

export default Header;
