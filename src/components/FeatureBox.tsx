// React imports
import React from 'react';
// Styles imports
import styles from './css/FeatureBox.module.css';
import utilsStyles from './css/Utils.module.css';

interface FeatureBoxProps {
    iconClassName: string;
    heading: string;
    text: string;
}


const FeatureBox: React.FC<FeatureBoxProps> = ({iconClassName, heading, text}) => {
    return (
        <div className={styles.featureBox}>
        <i className={`${styles.featureBox__icon} ${iconClassName}`}></i>
        <h3 className={`${utilsStyles.headingTertiary} ${styles.featureBoxHeading} ${utilsStyles.marginBottomSmall}`}>{heading}</h3>
        <p className={styles.featureBoxParagraph}>
            {text}
        </p>
    </div>
    );
};

export default FeatureBox;
