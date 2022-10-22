import React from "react";
import styles from "./NewSentiment.module.css";
import axios from "axios";

const NewSentiment = ({ text, setText, setResponse }) => {
    const textChangeHandler = (event) => {
        setText(event.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("text", text);

        const options = {
            method: "POST",
            url: "http://localhost:4000/api/analyze",
            headers: {
                "Content-Type": "application/json",
            },
            data: formData,
        };

        axios
            .request(options)
            .then((response) => {
                setResponse({ ...response.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles["container"]}>
            <p className={styles.heading}>Test with your own text</p>
            <form
                className={styles.form}
                onSubmit={onSubmitHandler}
                encType="application/json"
            >
                <textarea
                    className={styles.input}
                    onChange={textChangeHandler}
                    value={text}
                    name="text"
                />
                <button type="submit" className={styles.button}>
                    Classify Text
                </button>
            </form>
        </div>
    );
};

export default NewSentiment;
