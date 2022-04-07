import React from 'react';
import styles from '../styles/Global';

interface FeatureCardProps {
    iconUrl: string;
    iconText: string
}
 
const FeatureCard: React.FC<FeatureCardProps> = ({ iconUrl, iconText }) => {
    return ( 
        <div className={styles.featureCard}>
            <img src={iconUrl} alt='icon' className={styles.featureImg}/>
            <p className={styles.featureText}>{iconText}</p>
        </div>
    );
}
 
export default FeatureCard;