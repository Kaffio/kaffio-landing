import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Kaffio App</h1>
        <p>Çok Yakında</p>
      </main>
    </div>
  );
}
