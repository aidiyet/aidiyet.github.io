import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { montserrat } from '@/styles/fonts';

import styles from './BaseLayout.module.css';

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className={montserrat.className}>
      <Header />
      <main className={styles.main}>{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default BaseLayout;
