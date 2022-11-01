/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Container from "../../../common/Container";
import styles from "./Header.module.css";
import menu from "../../../../img/menu.svg"
const Header = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <header>
      <Container>
        <h3 className={styles.logo}>Digital Agency</h3>
        <ul className={`${(isNav ? styles.active : '')} ${styles.nav}`}>
          <li>Home</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <img className={styles.menu} src={menu} onClick={() => setIsNav(!isNav)} />
      </Container>
    </header>
  );
};

export default Header;
