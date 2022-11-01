/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import customeImg from "../../../img/businessman-analyzing-data.png";
import arrow from "../../../img/Arrow 1.png";
import cm from "../../../common.module.css";
import styles from "./Custome.module.css";

const Custome = () => {
  return (
    <section className={`${styles.custome_section} ${cm.common_section}`}>
      <div className={`${styles.custome_img} ${cm.common_img}`}>
        <img src={customeImg} />
      </div>
      <div className={styles.custome_content}>
        <h2>Custome &amp; Plugin Development</h2>
        <p>
          Commonly used in the graphic, print &amp; publishing industris for
          previewing visual layout and mockups
        </p>
        <img className={cm.arrow} src={arrow} />
      </div>
    </section>
  );
};

export default Custome;
