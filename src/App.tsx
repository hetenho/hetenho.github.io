import React from "react";
import { Logo } from "./components/logo/logo";
import { Nav } from "./components/nav/nav";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <main>
        <header className={styles.header}>
          <Logo />
          <Nav />
        </header>
      </main>
    </div>
  );
}

export default App;
