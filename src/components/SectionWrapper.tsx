import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import Button from './Button';

interface SectionWrapperProps {
    title: string,
    description: string,
    showBtn?: boolean,
    mockupImg: string
    banner?: string
    reverse?: boolean
}

const nativeAppurl = 'https://expo.dev/@ashojano/react_native_app?serviceType=classic&distribution=expo-go';
 
const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
    return ( 
        <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
            <div className={`flex items-center ${reverse ? styles.boxReverseClass : 
                styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
                <div className={`${styles.descDiv} ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}
                    ${reverse ? styles.textRight : styles.textLeft}`}>
                    <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>
                        {title}
                    </h1>
                    <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>
                        {description}
                    </p>
                    {showBtn && (
                        <Button assetUrl={assets.expo} link={nativeAppurl}/>
                    )}
                </div>
                <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                    <img src={mockupImg} alt="mockup" className={`styles.sectionImg ${reverse ? 'fadeLefttMini' : 'fadeRightMini'}`}/>
                </div>
            </div>
        </div>
    );
}
 
export default SectionWrapper;