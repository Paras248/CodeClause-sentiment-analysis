import React from "react";
import styles from "./SentimentResult.module.css";

const SentimentResult = () => {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Results</p>
            <div>
                <div className={styles["heading-sub-container"]}>
                    <p>TAG</p>
                    <p>CONFIDENCE</p>
                </div>
                <div className={styles["value-sub-container"]}>
                    <p>Positive</p>
                    <p>68%</p>
                </div>
            </div>
        </div>
    );
};

export default SentimentResult;
