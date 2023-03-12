import Image from "next/image"
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import ImgSldShow0 from "../public/ImgSldShow1.png"
import ImgSldShow1 from "../public/ImgSldShow2.png"
import ImgSldShow2 from "../public/ImgSldShow3.png"


const SldShow = (props: any) => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(1);


    useEffect(() => {
        const nbsImgs = document.getElementsByClassName(styles.ImgSldShow).length
        const id = setInterval(() => {
          let nextIndex = activeSlideIndex + 1;
          if(nextIndex < nbsImgs) {
            setActiveSlideIndex(nextIndex)
          }
          else{
            setActiveSlideIndex(0)
          }
          console.log(nextIndex, nbsImgs)
          clearInterval(id)
        }, 10000);

      }, [activeSlideIndex]);

    const onClickSlideChange = (index: number) =>{
        setActiveSlideIndex(index);
    };

    return (

        <div className={`${styles.ImgSldShowContain} `}>

            <Image src={ImgSldShow0} className={`${styles.ImgSldShow}`} alt='/' 
            style={{
                opacity: activeSlideIndex === 0 ? 1 : 0,
                zIndex: activeSlideIndex === 0 ? 2 : 0,
                position: "relative"
            }}
            onClick={() => onClickSlideChange(1)}
             />

            <Image src={ImgSldShow1} className={`${styles.ImgSldShow}`} alt='/' 
            style={{
                opacity: activeSlideIndex === 1 ? 1 : 0,
                zIndex: activeSlideIndex === 1 ? 2 : 0
            }}
            
            onClick={() => onClickSlideChange(2)}
             />

            <Image src={ImgSldShow2} className={`${styles.ImgSldShow}`} alt='/' 
            style={{
                opacity: activeSlideIndex === 2 ? 1 : 0, 
                zIndex: activeSlideIndex === 2 ? 2 : 0
            }}
            onClick={() => onClickSlideChange(0)}
             />
        </div>

        
    );


};

export default SldShow;
