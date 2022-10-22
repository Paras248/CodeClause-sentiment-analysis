import React from "react";
import styles from "./App.module.css";
import Sentiment from "./components/body/Sentiment";
import Header from "./components/UI/Header";

function App() {
    return (
        <div>
            <Header />
            <p className={styles.heading}>
                Analyze emotions within text with our sentiment analyzer
            </p>
            <Sentiment />
        </div>
    );
}

export default App;
