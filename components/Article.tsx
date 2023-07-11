import Image from "next/image"
import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Home.module.css';
import LogoIcon from "../public/LogoIcon.png"
import LogoText from "../public/LogoText.png"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { debug } from "console";
import PlaceholderImg from "../public/ImgSldShow1.png"
import Link from "next/link";

const Article = (props: any) => {
  return (
    <div className={styles.articleContainer} style={props.containerStyle}>
          <Image src={props.image} alt='/' className={styles.articleImg}></Image>
          <div className={styles.articleBodyContainer}>
            <div className={styles.articleTitle}>{props.title}</div>
            <article className={styles.articleBody} style={{ paddingBottom: "50px" }}>
              {props.body}
              <div dangerouslySetInnerHTML={{ __html: props.additionals }}/>
            </article>
            <a href={props.link} className={styles.articleButton}>{props.linkName}</a>
          </div>
        </div>
  );
};

export default Article;
