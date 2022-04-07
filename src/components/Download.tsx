import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';


interface DownloadProps {
    
}
 
const Download: React.FC<DownloadProps> = () => {

    const handleOpenCode = () => {
        window.open('https://github.com/ashoaghajan/react_native_nft', '_blank');
    }

    return ( 
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the cource code</h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on Github</p>
                </div>
                <button className={styles.btnPrimary} onClick={handleOpenCode}>Source Code</button>
                <div className={styles.flexCenter}>
                    <img src={assets.scene} alt="download_png" className={styles.fullImg}/>
                </div>
            </div>
        </div>
    );
}
 
export default Download;