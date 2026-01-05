import React from 'react'
import styles from './Footer.module.css';

type Props = {}

function Footer({}: Props) {
  return (
     <footer className={styles.footer}>
        <p>
          <span>React + Ts Todo</span> @ {new Date().getFullYear()}
        </p>
      </footer>
  )
}

export default Footer