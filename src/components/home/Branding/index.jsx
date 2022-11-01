/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import brandingImg from '../../../img/designer-team-working-on-creative-design.png';
import arrow from '../../../img/Arrow 1.png';
import cm from '../../../common.module.css';
import styles from './Branding.module.css';
const Branding = () => {
  return (
    <section className={`${styles.branding_section} ${cm.common_section}`}>
      <div className={`${styles.branding_img} ${cm.common_img}`}>
        <img src={brandingImg} />
      </div>
      <div className={styles.branding_content}>
        <h2>Branding &amp; Design system</h2>
        <p>
          Commonly used in the graphic, print &amp; publishing industris for
          previewing visual layout and mockups
        </p>
        <img className={cm.arrow} src={arrow} />
      </div>
    </section>
  );
};

export default Branding;
