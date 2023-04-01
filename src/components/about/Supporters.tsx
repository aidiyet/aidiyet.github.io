import Image from 'next/image';
import styles from './Supporters.module.css';

const SupportersData: {
  externalLink?: string;
  name: string;
  pictureURI: string;
}[] = [
  {
    externalLink: 'https://www.ted.org.tr/',
    name: 'Türk Eğitim Derneği',
    pictureURI: '/about/supporters/ted.png',
  },
];

function Supporters() {
  return (
    <section id={styles.root}>
      <h2 lang="tr-TR">DESTEKÇİLERİMİZ VE SPONSORLARIMIZ</h2>

      <div id={styles.grid}>
        {SupportersData.map((supporter, idx) => (
          <div key={idx} className={styles.item}>
            <a title={supporter.name} href={supporter.externalLink}>
              <Image
                src={supporter.pictureURI}
                alt={`Picture for ${supporter.name}`}
                fill
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Supporters;
