import React, { useState, useEffect } from "react";
import AI from "../../ai/AI.component";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <AI />
      </div>
    </>
  );
};

export default Home;
