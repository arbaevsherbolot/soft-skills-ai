import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    document.title = "WEDEVX";
  }, []);

  return (
    <>
      <div className={styles.page_wrapper}>
        <h3 className={styles.title}>Hi there, and Welcome!</h3>

        <div className={styles.buttons}>
          <Link to="/soft-skills-ai" className={styles.button}>
            <span>Try Soft-Skills AI</span>
          </Link>

          <a
            href="https://app.wedevx.co/login"
            target="_blank"
            className={`${styles.button} ${styles.active}`}>
            <span>Try Free Lesson</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
