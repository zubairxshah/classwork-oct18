"use client";

import React, { useEffect } from 'react';
import styles from "../not-found/custom404.module.css";
import Link from 'next/link';

const Custom404: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add(styles.particle);
      
      const size = Math.random() * 5 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const intervalId = setInterval(createParticle, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <div className={styles.errorMessage}>Oops! Page not found</div>
      <p className={styles.description}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className={styles.homeLink}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Custom404;
