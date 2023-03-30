import Link from 'next/link';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section id={styles.root}>
      <h2>{"🔥 Aidiyet Bülten'in 2. Sayısı Çıktı !"}</h2>
      <div>
        <Link href={'/yayinlarimiz'}>Yayınlarımız</Link>
        <Link href={'/#'}>Bülten 2. Sayı</Link>
      </div>
    </section>
  );
}

export default CallToAction;
