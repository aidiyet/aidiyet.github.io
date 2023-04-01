import styles from './TED.module.css';

function TED() {
  return (
    <section id={styles.root}>
      <h2 lang="tr-TR">
        Sevgiyle Kalın, Eğitimle Kalın, <span>AİDİYET</span> ile Kalın.
      </h2>

      <div id={styles.info}>
        <p lang="tr-TR">
          <span>Türk Eğitim Derneği</span> ve Sağladığı Burslar Hakkında
          Ayrıntılı Bilgi İçin:
        </p>
        <a href="https://www.ted.org.tr/">TED Anasayfa</a>
        <a href="https://www.ted.org.tr/burslar/">TED Burslar</a>
      </div>
    </section>
  );
}

export default TED;
