import Image from "next/image"
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import LogoIcon from "../public/LogoIcon.png"
import LogoText from "../public/LogoText.png"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { debug } from "console";

const Navbar = (props: any) => {
    const router = useRouter()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const condition = show ? styles.active : styles.hidden

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
                
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    const activeButton = () => {
        console.debug(props.title)
        const active = document.getElementById(props.title)
        if(active != null||undefined){
            active!.className = active!.className + " " + styles.active
        }
        
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            activeButton()
            window.addEventListener('scroll', controlNavbar);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    function buttonClick(){

    }

    return (

        <nav className={`${condition} ${styles.topbar} `}>
            {/* These are the logo images, idealy for mobile, deactivate the second one */}
            <Image src={LogoIcon} className={styles.navbarLogoIcon} alt='/'/>
            <Image src={LogoText} className={styles.navbarLogoIcon} alt='/'/>
            <a className={`${styles.navbutton} ${styles.contact}`} href="contact">Devis Gratuit</a>
            <a className={`${styles.navbutton}`} id="faq" href="/faq">Renseignements</a>
            <a className={`${styles.navbutton}`} id="past" href="/realisations">Nos Réalisations</a>
            <a className={`${styles.navbutton}`} id="service" href="/services">Nos Services</a>
            <a className={`${styles.navbutton}`} id="home" href="/">Page Principale</a>
        </nav>
    );
};

export default Navbar;
