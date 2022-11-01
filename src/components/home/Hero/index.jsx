/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import businessImg from "../../../img/business-people-discussing-business-idea.png";
import Button from "../../common/Button";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1>Building Digital Products, Brands &amp; Experience</h1>
        <p>
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <Button>Contact Us</Button>
      </div>
      <div className={styles.hero_img}>
        <img src={businessImg} />
      </div>
    </section>
  );
};

export default Hero;
