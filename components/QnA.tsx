import Image from "next/image"
import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Home.module.css';
import LogoIcon from "../public/LogoIcon.png"
import LogoText from "../public/LogoText.png"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { debug } from "console";
import Link from "next/link";

const QnA = (props: any) => {
  const [expand, setExpand] = useState(false);
  const conditionBar = expand ? styles.QnaBar : styles.CardHidden
  const conditionAnswer = expand ? styles.QnaAnswer : styles.QnaAnswerHidden

  function onClickQuestion() {
    setExpand(!expand);
    console.log(expand);
  }

  return (
    <div className={styles.QnaQuestionContainer} onClick={onClickQuestion}>
        <div className={styles.QnaQuestion} >
          [Big + Icon] -{props.question} icon will be a minus when opened
        </div>
        <div className={conditionBar} />
        <div className={conditionAnswer}>-{props.answer}</div>
    </div>
  );
};

export default QnA;
