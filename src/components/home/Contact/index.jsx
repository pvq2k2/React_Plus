/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import contactImg from '../../../img/customer-support.png';
import cm from '../../../common.module.css';
import styles from './Contact.module.css';
import Button from "../../common/Button";
const Contact = () => {
  return (
    <section className={`${styles.contact_section} ${cm.common_section}`}>
      <div className={styles.contact_img}>
        <img src={contactImg} />
      </div>
      <div className={styles.contact_content}>
        <h2>Be a part of the next big thing</h2>
        <p>
          We work with Brans, Startups, to SMEs. Colaborate for more impact and
          growt
        </p>
        <Button>Contact Us</Button>
      </div>
    </section>
  );
};

export default Contact;
