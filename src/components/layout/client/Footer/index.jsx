import React from "react";
import Container from "../../../common/Container";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div className={styles.footer_row}>
            <div className={styles.logo}>
              <h5>Digital Agency</h5>
              <span>Building digital products, brands &amp; experience</span>
            </div>
            <div className={`${styles.resources}" ${styles.menu_footer}`}>
              <h5>Resources</h5>
              <ul>
                <li>Guides</li>
                <li>Blog</li>
                <li>Cuistomer Stories</li>
                <li>Glossery</li>
              </ul>
            </div>
            <div className={`${styles.company}" ${styles.menu_footer}`}>
              <h5>Company</h5>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={`${styles.social_media}" ${styles.menu_footer}`}>
              <h5>Social Media</h5>
              <ul>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <p className={styles.copyright}>
            © Matheus. Todos os direitos reservados
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
