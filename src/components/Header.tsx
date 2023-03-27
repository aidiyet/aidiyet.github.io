import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

import styles from './Header.module.css';

const NavigationLinks: {
  name: string;
  path: string;
}[] = [
  {
    name: 'Anasayfa',
    path: '/',
  },
  {
    name: 'Hakkımızda',
    path: '/hakkimizda',
  },
  {
    name: 'Yayınlarımız',
    path: '/yayinlarimiz',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'TED & Burslar',
    path: '/ted',
  },
];

function Header() {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const toggleNavbar = () => setDisplayNavbar(!displayNavbar);

  return (
    <header className={styles.header}>
      <div className={styles['header-frontmatter']}>
        <div className={styles['logo-wrapper']}>
          <Image
            className={styles.logo}
            src={'/header/logo.jpeg'}
            alt={"Aidiyet Logosu. Türkiye'nin Kalbindeki Meşaleler."}
            fill
          />
        </div>
        {displayNavbar ? (
          <XMarkIcon onClick={toggleNavbar} className={styles['nav-icon']} />
        ) : (
          <Bars3BottomRightIcon
            onClick={toggleNavbar}
            className={styles['nav-icon']}
          />
        )}
      </div>
      {displayNavbar && (
        <nav className={styles.nav}>
          <ul>
            {NavigationLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
