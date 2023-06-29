import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { montserrat } from '@/styles/fonts';

import styles from './EditorLayout.module.css';

function EditorLayout({ children }: PropsWithChildren) {
  return (
    <div className={montserrat.className}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default EditorLayout;
