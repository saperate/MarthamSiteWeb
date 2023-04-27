import Image from "next/image"
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import ImgSldShow0 from "../public/ImgSldShow1.png"
import ImgSldShow1 from "../public/ImgSldShow2.png"
import ImgSldShow2 from "../public/ImgSldShow3.png"


const BeforeAfter = (props: any) => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [widthValue, setWidthValue] = useState("0px")
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (event: any) => {
    setSliderValue(Math.min(Math.max(event.target.value, 1), 99));

  };

  useEffect(() => {
    if (containerRef.current) {
      setImagesSize(containerRef.current);
    }
    console.log("bb")
  }, [containerRef]);

  const setImagesSize = (container: HTMLElement) => {
    console.log(container.offsetWidth)
    setWidthValue(container.offsetWidth.toLocaleString() + "px");
  };


  const onClickSlideChange = (index: number) => {
    let nextIndex = activeSlideIndex + index;
    const nbsImgs = document.getElementsByClassName(styles.ImgSldShow).length
    if (nextIndex < 0) {
      setActiveSlideIndex(nbsImgs - 1);
    }
    else if (nextIndex > nbsImgs - 1) {
      setActiveSlideIndex(0);
    }
    else {
      setActiveSlideIndex(nextIndex);
    }
  };


  return (

    <div className={`${styles.BeforeAfterTopLevelContainer} `} ref={containerRef}>

      <input type="range" className={styles.BeforeAfterRange} value={sliderValue} onChange={handleSliderChange}
        style={{ background: "linear-gradient(to right, #BDB23D " + sliderValue.toLocaleString() + "%,black " + sliderValue.toLocaleString() + "%)" }}>
      </input>

      <div className={styles.BeforeAfterContainer} style={{ zIndex: "5", display: "flex" }}>
        <div className={styles.BeforeAfterLeftArrow} onClick={() => onClickSlideChange(-1)} />
        <div className={styles.BeforeAfterRightArrow} onClick={() => onClickSlideChange(1)} />
      </div>

      <div className={`${styles.BeforeAfterContainer}`}
        style={{
          opacity: activeSlideIndex === 0 ? 1 : 0,
          zIndex: activeSlideIndex === 0 ? 2 : 0,
        }}>
        <div className={styles.BeforeAfterContainerSlide} style={{ zIndex: "1", width: `${sliderValue}%` }}>
          <Image src={ImgSldShow0} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
        </div>
        <Image src={ImgSldShow0} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
      </div>

      <div className={`${styles.BeforeAfterContainer}`}
        style={{
          opacity: activeSlideIndex === 1 ? 1 : 0,
          zIndex: activeSlideIndex === 1 ? 2 : 0,
        }}>
        <div className={styles.BeforeAfterContainerSlide} style={{ zIndex: "1", width: `${sliderValue}%` }}>
          <Image src={ImgSldShow1} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
        </div>
        <Image src={ImgSldShow1} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
      </div>


      <div className={`${styles.BeforeAfterContainer}`}
        style={{
          opacity: activeSlideIndex === 2 ? 1 : 0,
          zIndex: activeSlideIndex === 2 ? 2 : 0,
        }}>
        <div className={styles.BeforeAfterContainerSlide} style={{ zIndex: "1", width: `${sliderValue}%` }}>
          <Image src={ImgSldShow2} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
        </div>
        <Image src={ImgSldShow2} alt="/" style={{ width: widthValue }} className={styles.BeforeAfterImage} />
      </div>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={styles.BeforeAfterButton}> Toutes les réalisations</a>

    </div>

  );


};

export default BeforeAfter;
