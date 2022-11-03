/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { HomeContext } from "../../../context/HomeProvider";
import styles from './Testimonial.module.css';
const Testimonial = () => {
  const { userData } = useContext(HomeContext);
  return (
    <section className={styles.testimonial_section}>
      <span>TESTIMONIALS</span>
      <h3>Read What Other have to Say</h3>
      <div className={styles.testimonial_row}>
        {userData.map(user => (
                <div key={user.id} className={styles.testimonial_item}>
                <img src={user.avatar} />
                <h4>{user.name}</h4>
                <p>{user.comment}</p>
              </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
