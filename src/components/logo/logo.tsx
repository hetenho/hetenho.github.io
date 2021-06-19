import React from "react";
import styles from "./logo.module.scss";
import logo from "../../logo.png";

function Logo() {
  return <img src={logo} className={styles.logo} />;
}

export { Logo };
