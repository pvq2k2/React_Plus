import React, { useContext } from "react";
import { HomeContext } from "../../../../context/HomeProvider";
import Container from "../../../common/Container";
import styles from "./Footer.module.css";
const Footer = () => {
  const { footerData } = useContext(HomeContext);
  return (
    <footer>
      <Container>
        <div>
          <div className={styles.footer_row}>
            <div className={styles.logo}>
              <h5>Digital Agency</h5>
              <span>Building digital products, brands &amp; experience</span>
            </div>
            {footerData.map((data) => (
              <div
                key={data.id}
                className={`${styles.resources}" ${styles.menu_footer}`}
              >
                <h5>{data.title}</h5>
                <ul>
                  {data.items?.map((data) => (
                    <li key={data.name}>{data.name}</li>
                  ))}
                </ul>
              </div>
            ))}
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
