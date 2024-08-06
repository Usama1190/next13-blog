import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from 'next/link'

import { posts } from "../data/posts";

type Post = {
  id: string,
  title: string,
  date: string
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Home</h2>
      </div> 
      <div>{posts.map(({id, title, date}: Post) => (
        <>
          <Link href="/posts">{title}</Link>
          <br />
          <p>{date}</p>
          <br />
        </>
      ))}</div>
      <Link href="/posts">Posts</Link>
      <Link href="/account">Accounts</Link>
    </main>
  );
}
