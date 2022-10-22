import React from "react";
import styles from "./NewSentiment.module.css";

const NewSentiment = () => {
    return (
        <div className={styles["container"]}>
            <p className={styles.heading}>Test with your own text</p>
            <form className={styles.form}>
                <textarea className={styles.input} />
                <button className={styles.button}>Classify Text</button>
            </form>
        </div>
    );
};

export default NewSentiment;
