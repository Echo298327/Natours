// React imports
import React from "react";
// Components imports
import AboutButtonSection from "./AboutButtonSection";
// Assets imports
import photo1 from '../assets/img/nat-1-large.jpg';
import photo2 from '../assets/img/nat-2-large.jpg';
import photo3 from '../assets/img/nat-3-large.jpg';
// Styles imports
import styles from './css/AboutSection.module.css';
import utilsStyles from './css/Utils.module.css';
// Types
interface AboutSectionProps {
}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
    return (
        <main>
            <section className={styles.sectionAbout}>
                <div className={`${utilsStyles.CenterText} ${utilsStyles.marginBottomBig}`}>
                    <h2 className={styles.headingSecondary}>
                        Exciting tours for adventurous people
                    </h2>
                </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className={`${utilsStyles.headingTertiary} ${utilsStyles.marginBottomSmall}`}>You're going to fall in love with nature</h3>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                    <h3 className={`${utilsStyles.headingTertiary} ${utilsStyles.marginBottomSmall}`}>Live adventures like you never have before</h3>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero.
                    </p>
                    <AboutButtonSection text={`Learn more`} />
                    </div>
                    <div className="col-1-of-2">
                        <div className={styles.composition}>
                            <img src={photo1} alt="Photo 1" className={`${styles.composition__photo} ${styles.composition__photo__p1}`}/>
                            <img src={photo2} alt="Photo 2" className={`${styles.composition__photo} ${styles.composition__photo__p2}`} />
                            <img src={photo3} alt="Photo 3" className={`${styles.composition__photo} ${styles.composition__photo__p3}`} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutSection;
