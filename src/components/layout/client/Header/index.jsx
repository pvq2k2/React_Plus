/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
// import React, { useState } from "react";
import Container from "../../../common/Container";
import styles from "./Header.module.css";
import menu from "../../../../img/menu.svg"
// const Header = () => {
//   const [isNav, setIsNav] = useState(false);
//   return (
//     <header>
//       <Container>
//         <h3 className={styles.logo}>Digital Agency</h3>
//         <ul className={`${(isNav ? styles.active : '')} ${styles.nav}`}>
//           <li>Home</li>
//           <li>About</li>
//           <li>Testimonials</li>
//           <li>Contact</li>
//         </ul>
//         <img className={styles.menu} src={menu} onClick={() => setIsNav(!isNav)} />
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React, { PureComponent } from "react";

export default class Header extends PureComponent {
  // Mounting
  constructor () {
    super();
    this.state = { isActive: false };
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  }
  
  // componentDidMount() {} //useEffect
  // componentWillUnmount() {} //Cleanup useEffect
  // componentDidUpdate() {} // Dependencies useEffect
  render() {
    const isActive = this.state.isActive;
    return (
      <header>
        <Container>
          <h3 className={styles.logo}>Digital Agency</h3>
          <ul className={`${isActive ? styles.active : ""} ${styles.nav}`}>
            <li>Home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <img
            className={styles.menu}
            src={menu}
            onClick={this.handleToggle}
          />
        </Container>
      </header>
    );
  }
}
