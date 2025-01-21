import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Header /> */}
      <div className={styles.heroText}>
        <h1>Business Integrations for the 21st century</h1>
      </div>
    </div>
  );
}
