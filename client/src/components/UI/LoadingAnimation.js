import React from "react";
import styles from "./LoadingAnimation.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../lotties/circle-animation.json";

const LoadingAnimation = () => {
    return (
        <div className={styles.container}>
            <Player src={Animation} loop autoplay style={{ width: 150 }} />
        </div>
    );
};

export default LoadingAnimation;
