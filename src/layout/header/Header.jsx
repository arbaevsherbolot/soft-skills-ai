import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";

const Header = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsOpen(false);
    }
  });

  const navLinks = [
    {
      path: "/soft-skills-ai",
      title: "Soft-Skill AI",
    },
  ];

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} alt="WEDEVX" />
          </div>
        </Link>

        <div className={styles.right}>
          <div className={styles.links}>
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                <span>{link.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={styles.burger_menu}>
          <div className={styles.menu_icon}>
            <input
              className={
                isOpen
                  ? `${styles.button} ${styles.active}`
                  : `${styles.button}`
              }
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className={
              isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
            }>
            <div className={styles.links}>
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.active_link}`
                      : styles.link
                  }>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
