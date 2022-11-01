/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import user1 from '../../../img/western-man-4975942-4159828 1.png';
import user2 from '../../../img/asian-woman-4975939-4159825 1.png';
import user3 from '../../../img/black-woman-4975941-4159827 1.png';
import styles from './Testimonial.module.css';
const Testimonial = () => {
  return (
    <section className={styles.testimonial_section}>
      <span>TESTIMONIALS</span>
      <h3>Read What Other have to Say</h3>
      <div className={styles.testimonial_row}>
        <div className={styles.testimonial_item}>
          <img src={user1} />
          <h4>Andrew Rathore</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
        <div className={styles.testimonial_item}>
          <img src={user2} />
          <h4>Vera Duncan</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
        <div className={styles.testimonial_item}>
          <img src={user3} />
          <h4>Mark Smith</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
