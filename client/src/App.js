import React, { useState } from "react";
import styles from "./App.module.css";
import Sentiment from "./components/body/Sentiment";
import Header from "./components/UI/Header";

function App() {
    const [text, setText] = useState("");

    return (
        <div>
            <Header />
            <p className={styles.heading}>
                Analyze emotions within text with our sentiment analyzer
            </p>
            <Sentiment text={text} setText={setText} />
        </div>
    );
}

export default App;
