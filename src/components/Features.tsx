import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import FeatureCard from './FeatureCard';

interface FeaturesProps {
    
}
 
const Features: React.FC<FeaturesProps> = () => {
    return ( 
        <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
                    <p className={`${styles.pText} ${styles.whiteText}`}>
                        ProNef has been developed using cross-platform technology, React Native.
                    </p>
                </div>
                <div className={styles.flexWrap}>
                    <FeatureCard iconUrl={assets.react} iconText='React Native'/>
                    <FeatureCard iconUrl={assets.javascript} iconText='Javascript'/>
                </div>
            </div>
        </div>
    );
}
 
export default Features;