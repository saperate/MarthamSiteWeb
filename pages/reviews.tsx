import Image from "next/image"
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import StarFull from "../public/StarFull.png"
import StarHalf from "../public/StarHalf.png"
import StarEmpty from "../public/StarEmpty.png"

const Navbar = (props: any) => {


    return (

        <div className={styles.reviewsContainer}>
            <div style={{ color: 'red', width: '0%'}}>OUBLIE PAS</div>
            <div className={styles.reviewsIndividual}>
                <div className={styles.reviewsHeaderContainer}>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                </div>
                <div className={styles.reviewsBody}>
                    «Très satisfaite de la réfection du toit de mon cabanon.
                    Personnel poli et consciencieux malgré la grande chaleur (32*C) qui régnait ce jour là.
                    Propreté des lieux après le travail impeccable .»
                </div>

                <div className={styles.reviewsName}>
                    - Client 1
                    
                </div>
            </div>

            <div className={styles.reviewsIndividual}>
                <div className={styles.reviewsHeaderContainer}>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                </div>
                <div className={styles.reviewsBody}>
                «Excellent services et travaux effectués. Tout a été parfait»
                </div>

                <div className={styles.reviewsName}>
                    - Client 2
                    
                </div>
            </div>

            <div className={styles.reviewsIndividual}>
                <div className={styles.reviewsHeaderContainer}>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarFull} alt={'/'} className={styles.reviewsStars}/>
                    <Image src={StarEmpty} alt={'/'} className={styles.reviewsStars}/>
                </div>
                <div className={styles.reviewsBody}>
                    «Rien à redire. M. Martin Hamel est très consciencieux. Bon suivi et respectueux. 
                Il a une bonne écoute et bonne qualité de service. Entrepreneur agréable à encourager. Je le recommande. »
                
                </div>

                <div className={styles.reviewsName}>
                    - Client 3
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
