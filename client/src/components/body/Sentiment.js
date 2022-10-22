import React, { useEffect, useState } from "react";
import NewSentiment from "../Sentiment/NewSentiment";
import SentimentResult from "../Sentiment/SentimentResult";
import styles from "./Sentiment.module.css";

const Sentiment = ({ text, setText }) => {
    const [response, setResponse] = useState({ result: "", confidencePercentage: "" });

    useEffect(() => {
        console.log(response);
    }, [response]);

    return (
        <div className={styles.container}>
            <NewSentiment text={text} setText={setText} setResponse={setResponse} />
            <SentimentResult response={response} />
        </div>
    );
};

export default Sentiment;
