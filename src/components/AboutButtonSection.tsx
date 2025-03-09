import React from "react";
import styles from './css/AboutButtonSection.module.css';

interface AboutButtonSectionProps {
    text: string;
}

const AboutButtonSection: React.FC<AboutButtonSectionProps> = ({ text }) => {
    return (
        <a href="#" className={styles.btnText}>
            {text} &rarr;
        </a>
    )
}

export default AboutButtonSection;