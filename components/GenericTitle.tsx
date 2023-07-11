import Image from "next/image"
import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Home.module.css';
import LogoIcon from "../public/LogoIcon.png"
import LogoText from "../public/LogoText.png"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { debug } from "console";
import Link from "next/link";

const GenericTitle = (props: any) => {


  return (
    <div className={styles.IndexGenericTitle} style={props.Style}>
      {props.Title}
      <div className={styles.IndexGenericTitleBar} />
    </div>
  );
};

export default GenericTitle;
