import React, { useEffect, useState } from "react";
import NewSentiment from "../Sentiment/NewSentiment";
import SentimentResult from "../Sentiment/SentimentResult";
import styles from "./Sentiment.module.css";

const Sentiment = ({ text, setText }) => {
    const [response, setResponse] = useState({ result: "", confidencePercentage: "" });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log(response);
    }, [response]);

    return (
        <div className={styles.container}>
            <NewSentiment
                text={text}
                setText={setText}
                setResponse={setResponse}
                setIsLoading={setIsLoading}
            />
            <SentimentResult response={response} isLoading={isLoading} />
        </div>
    );
};

export default Sentiment;
