import styles from "./page.module.css";
import About from "./about/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <About />
    </div>
  );
}
