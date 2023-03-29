import styles from './Statistics.module.css';

const CounterData: { title: string; value: number }[] = [
  {
    title: 'Aktif Okuyucu Sayımız',
    value: 500,
  },
  {
    title: 'İçerik Sayımız',
    value: 10,
  },
  {
    title: 'Aktif Üye Sayımız',
    value: 20,
  },
  {
    title: 'Tıklanma Sayımız',
    value: 2000,
  },
];

function Statistics() {
  return (
    <section id={styles.root}>
      <h2>AİDİYET GÜN GEÇTİKÇE BÜYÜYOR VE GELİŞİYOR!</h2>
      <div id={styles['counter-group']}>
        {CounterData.map((data, idx) => (
          <div key={idx}>
            <p>{data.title}</p>
            <h3>{data.value}+</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
