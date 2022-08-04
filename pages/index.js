import React from 'react';
import Container from '@mui/material/Container'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
    <h1 className={styles.hometext}>QRCODES MAIN MENU</h1>
    <Container maxWidth="lg" className={`${styles.main} ${styles.flex}`}>
      <a href='/scan' className={styles.a}>
        <Container maxWidth="sm" className={`${styles.card} ${styles.card1}`} >
          <h2 className={styles.title}>SCANNER</h2>
        </Container>
      </a>

      <a href='/generator' className={styles.a}>
        <Container maxWidth="sm" className={`${styles.card} ${styles.card2}`} >
          <h2 className={styles.title}>SCANNER</h2>
        </Container>
      </a>
    </Container>
    </>
  )
}
