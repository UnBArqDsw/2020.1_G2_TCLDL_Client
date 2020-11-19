import React from 'react';
import styles from '../../styles/components/Home/Domain.module.css'

const Domain = ({ name, description }) => {
  return (
    <div className={styles.domain}>
      <h4 className={styles.domainsBoard} >{name}</h4>
      <p className={styles.domainsBoard} >{description}</p>
    </div>
  )
}

export default Domain;
