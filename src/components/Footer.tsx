import Image from 'next/image';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

import styles from './Footer.module.css';

interface IFooterLinkGroup {
  title: string;
  items: {
    name: string;
    uri: string;
  }[];
}

const FooterLinkGroups: IFooterLinkGroup[] = [
  {
    title: 'İletişim Bilgileri',
    items: [
      {
        name: 'dergi.aidiyet@gmail.com',
        uri: 'mailto:dergi.aidiyet@gmail.com',
      },
    ],
  },
  {
    title: 'Sosyal Medya',
    items: [
      {
        name: '📸 Instagram - TEB Ankara',
        uri: 'https://instagram.com/tebankara/',
      },
      {
        name: '📸 Instagram - TEB Ankara',
        uri: 'https://www.instagram.com/aidiyetbulten/',
      },
      {
        name: '🔗 LinkedIn',
        uri: 'https://www.linkedin.com/in/teb-ankara-62160422a/',
      },
    ],
  },
];

function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <footer id={styles.footer}>
      <div id={styles['logo-wrapper']} className={styles['footer-element']}>
        <Image
          id={styles.logo}
          src={'/footer/logo.png'}
          alt={'TEB Ankara Aidiyet Logosu.'}
          fill
        />
      </div>

      {FooterLinkGroups.map((lg, idx) => (
        <div
          className={
            styles['footer-link-group'] + ' ' + styles['footer-element']
          }
          key={idx}
        >
          <h4>{lg.title}</h4>
          {lg.items.map((lgi, idy) => (
            <Link key={idy} href={lgi.uri}>
              {lgi.name}
            </Link>
          ))}
        </div>
      ))}

      <div className={styles['footer-element']}>
        <h4>Aidiyet Nedir?</h4>
        <p>
          Vizyonumuz; Aidiyet ekibi olarak TED ile yolları kesişmiş her yaştan
          insana ulaşmak ve kendimizi tanıtmak, bilgilerimizi paylaşmak.
        </p>
      </div>

      <div id={styles['scroll-widget-wrapper']} onClick={scrollToTop}>
        <ChevronUpIcon id={styles['scroll-icon']} />
        <p>Sayfanın başına dönmek için tıklayın</p>
      </div>

      <span>&copy; 2022 - {new Date().getFullYear()} TEB Ankara Aidiyet </span>
    </footer>
  );
}

export default Footer;
