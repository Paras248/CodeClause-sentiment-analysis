import React from "react";
import LoadingAnimation from "../UI/LoadingAnimation";
import styles from "./SentimentResult.module.css";

const SentimentResult = ({ response, isLoading }) => {
    let result = response.result;
    let percentage = response.confidencePercentage;
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Results</p>
            <div>
                <div className={styles["heading-sub-container"]}>
                    <p>TAG</p>
                    <p>CONFIDENCE</p>
                </div>
                {isLoading && <LoadingAnimation />}
                {result !== "" && !isLoading && (
                    <div className={styles["value-sub-container"]}>
                        <p>{result}</p>
                        <p>{percentage}%</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentimentResult;
