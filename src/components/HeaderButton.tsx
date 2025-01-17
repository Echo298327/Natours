import React from 'react';
import styles from './css/HeaderButton.module.css';

interface HeaderButtonProps {
}

const HeaderButton: React.FC<HeaderButtonProps> = ({  }) => {
    return (
        <a href="#" className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>
            Discover our tours
        </a>
    )
}

export default HeaderButton;