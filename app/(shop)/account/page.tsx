'use client';

import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Account() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}><h1>Account</h1></div>
      <Link href="/">Back to Home</Link>  

      {/* <button type="button" onClick={() => router.push('/')}>
        Back to Home
      </button> */}
    </main>
  );
}
