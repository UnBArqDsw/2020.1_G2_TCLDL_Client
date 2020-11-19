import React from 'react';
import styles from '../../styles/components/Home/Domain.module.css'
import Link from 'next/link'

const Domain = ({ name, description, onClick }) => {
  return (
    <Link href={onClick}>
      <div className={styles.domain}>
        <h4 className={styles.domainsBoard} >{name}</h4>
        <p className={styles.domainsBoard} >{description}</p>
      </div>
    </Link>
  )
}

export default Domain;
