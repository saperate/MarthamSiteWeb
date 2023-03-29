import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './navbar'
import Reviews from './reviews'
import ImageSlideShow from "./imgSlideShow"
import PlaceholderImg from "../public/ImgSldShow1.png"

/**
      PLANNING:
      Hamburger menu to keep the menu small on mobile
      put logo on there
      keep it slim
      button to scroll back to top
      */
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Martham Construction</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar title="home" />

      <main className={styles.main}>

        <ImageSlideShow />
        <title className={styles.title}>Martham Construction: Qualité, Fiabilité; Notre Spécialitée.</title>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
        <div className={styles.articleContainer} style={{flexDirection:"row-reverse"}}>
        <Image src={PlaceholderImg} alt='/' className={styles.articleImg}></Image>
          <div className={styles.articleBodyContainer}>
            <div className={styles.articleTitle}>Notre Histoire</div>
            <article className={styles.articleBody} style={{paddingBottom:"50px"}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              quia illum quam minima dolorum illo ad consequuntur earum inventore ratione,
              iste minus rerum, ex vero molestiae corporis atque sapiente voluptatem? 
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quia illum quam minima dolorum illo ad consequuntur earum inventore ratione, (+- 50 mots)
              
            </article>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={styles.articleButton}>Des Questions?</a>
          </div>
        </div>

        <div className={styles.articleContainer} style={{alignSelf: "last baseline", backgroundColor: "#0b0b0b" }}>
          <Image src={PlaceholderImg} alt='/' className={styles.articleImg}></Image>
          <div className={styles.articleBodyContainer}>
            <div className={styles.articleTitle}>Nos Services</div>
            <article className={styles.articleBody}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              quia illum quam minima dolorum illo ad consequuntur earum inventore ratione,
              iste minus rerum, ex vero molestiae corporis atque sapiente voluptatem? (+- 30 mots)
              <br />
              <br />* Service 1
              <br />* Service 2
              <br />* Service 3
            </article>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={styles.articleButton}>En savoir plus</a>
          </div>
        </div>
        
        <Reviews></Reviews>

      </main>


      <script>

      </script>
    </>
  )
}
