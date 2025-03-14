import React from "react";
import styles from './css/Header.module.css';
import logo from '../assets/img/logo-white.png';

import HeaderButton from "./HeaderButton";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>Outdoors</span>
                    <span className={styles.headingPrimarySub}>is where life happens</span>
                </h1>
                <HeaderButton 
                    text="Discover our tours" 
                    href="#" 
                    isAnimated={true} 
                    />
            </div>
        </header>
    )
}

export default Header;
