import React from "react";
import NewSentiment from "../Sentiment/NewSentiment";
import SentimentResult from "../Sentiment/SentimentResult";
import styles from "./Sentiment.module.css";

const Sentiment = () => {
    return (
        <div className={styles.container}>
            <NewSentiment />
            <SentimentResult />
        </div>
    );
};

export default Sentiment;
