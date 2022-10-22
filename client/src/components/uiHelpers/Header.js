import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles["header-text"]}>Sentilysis</p>
        </header>
    );
};

export default Header;
