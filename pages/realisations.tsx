import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './navbar'
import next, { NextApiResponse, NextApiRequest } from 'next'
import getServices from '../lib/getServices'
import { debug } from 'console'
const inter = Inter({ subsets: ['latin'] })
import PlaceholderImg from "../public/ImgSldShow1.png"

//using the service database for now, eventually make own database
export async function getServerSideProps() {
  const response = await getServices()
  const data = response.map(item => ({ id: item.Id.toString(), title: item.Title, image: item.ImageUrl }))

  console.log(console.log(data.map(item => item.title)))
  return {
    props: { data },
  }
}

interface Service {
  id: string;
  title: string;
  image: string;
}

export default function Home({ data }: { data: Service[] }) {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Navbar title="realisations">

      </Navbar>

      <main className={styles.main}>
        <div style={{color:"red"}}>
        WIP this uses the service database and it's old layout. im putting it here cause it would fit more nicely here
        Also this will basically be a photo gallery. Im thinking that Before/after photos would go as such:
        you see the final product , there is an indication or smth to hover it maybe a tag, when you do you see a 
        diagonal line pass over and its like gradually switching to the old pic. It stops in the middle.
        maybe when click it opens a bigger version of it in the screen so that you can "zoom". then you can remove it
        by either clicking off the box or clicking a x idk which
        </div>

        <div className={styles.realisationsBox}>
          {data.map(item => (
            <div key={item.id} className={styles.realisationsCard}>
              <Image src={item.image} alt="/" width={640} height={426} className={styles.realisationsThumbnail}/>
              <div className={styles.realisationsTitle}>
              {item.title}
              </div>
            </div>
          ))}
        </div>

      </main>


      <script>

      </script>
    </>
  )

}



