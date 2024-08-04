import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Home</h2>
      </div> 
      <Link href="/posts">Posts</Link>
    </main>
  );
}
