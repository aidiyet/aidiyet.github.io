import styles from './Hero.module.css';

import Link from 'next/link';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToRef = () =>
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <section id={styles.root}>
        <h1>
          {
            "Aidiyet, 7'den 70'e herkesin ilgisini çekecek içeriklerle sizlere ulaşmayı amaçlar."
          }
        </h1>
        <div id={styles.links}>
          <Link href={'/yayinlarimiz'}>Yayınlarımız</Link>
          <Link href={'/blog'}>İçeriklerimiz</Link>
        </div>
        <ChevronDoubleDownIcon onClick={scrollToRef} />
      </section>
      <div ref={ref}></div>
    </>
  );
}

export default Hero;
