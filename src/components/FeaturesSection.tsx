// React imports
import React from 'react';
// Components imports
// Styles imports
import styles from './css/FeaturesSection.module.css';
import FeatureBox from './FeatureBox';

const FeaturesSection: React.FC = () => {

    const features = [
        {
            iconClassName: "icon-basic-world",
            heading: "Explore the world",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
            iconClassName: "icon-basic-compass",
            heading: "Meet nature",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
            iconClassName: "icon-basic-map",
            heading: "Find your way",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
            iconClassName: "icon-basic-heart",
            heading: "Live a healthier life",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        }
    ]



    return (
        <section className={styles.sectionFeatures}>
            <div className={"row"}>
              {features.map((feature) => (
                <div className={"col-1-of-4"}>
                    <FeatureBox 
                        key={feature.heading}
                        iconClassName={feature.iconClassName}
                        heading={feature.heading}
                        text={feature.text}
                    />
                </div>
              ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
