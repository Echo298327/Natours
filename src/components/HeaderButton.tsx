import React from 'react';
import styles from './css/HeaderButton.module.css';

interface HeaderButtonProps {
    text: string;
    href: string;
    isAnimated: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, href, isAnimated }) => {
    return (
        <a href={href} className={`${styles.btn} ${styles.btnWhite} ${isAnimated ? styles.btnAnimated : ''}`}>
            {text}
        </a>
    )
}

export default HeaderButton;