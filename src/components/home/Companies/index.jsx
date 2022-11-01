/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import companyLogo1 from '../../../img/Company logo.png';
import companyLogo2 from '../../../img/Company logo (1).png';
import companyLogo3 from '../../../img/Company logo (2).png';
import companyLogo4 from '../../../img/Company logo (3).png';
import styles from './Companies.module.css';
const Companies = () => {
  return (
<section className={styles.companies_section}>
  <span>Trusted by 4,000+ companies</span>
  <div className={styles.logo_container}>
    <img src={companyLogo1} />
    <img src={companyLogo2} />
    <img src={companyLogo3} />
    <img src={companyLogo4} />
  </div>
</section>

  )
}

export default Companies