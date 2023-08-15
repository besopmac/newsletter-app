/**
 * Com a atualização do Next, tudo é renderizado do lado do servidor.
 * Para renderizar do lado do cliente, precisamos utilizar 'use client'.
 **/

"use client";

import Image from "next/image";
import { useState } from "react";
import { useSendMail } from "@/hooks/useSendMail";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import styles from "./page.module.css";

export default function Home() {
  const { mutate } = useSendMail();
  const [email, setEmail] = useState("");

  const submitMail = () => {
    mutate({ email });
  };

  return (
    <main className={styles.main}>
      <Image
        width={150}
        height={150}
        alt="Avatar Banana News"
        src="/banana-avatar.png"
        className={styles.avatar}
      />
      <h1 className={styles.heading}>BananaNews</h1>
      <p className={styles.paragraph}>
        Fique por dentro de tudo que rola no mundo da criatividade.
      </p>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          className={styles.input}
          placeholder="digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} onClick={submitMail}>
          <ArrowIcon />
        </button>
      </div>
    </main>
  );
}
