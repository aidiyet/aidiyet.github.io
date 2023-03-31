import styles from './FrontMatter.module.css';

import { josefinSans } from '@/styles/fonts';

const TeamMembers: string[] = [
  'Abdullah Mert Dinçer',
  'Aslı Yalçınkaya',
  'Baturalp Kızıltan',
  'Dilara Demircioğlu',
  'Elif Elbir',
  'Emre Yıldız',
  'Eren Karagül',
  'İlker Mete Takkaç',
  'Melisa Öztürk',
  'Ozan Ali Altundal',
  'Öykü Yavuz',
  'Salih Burak Gülen',
  'Sefa Barış',
  'Semiha Ömür',
  'Şeyma Sayar',
  'Sıla Kurğa',
  'Sonat Kalkan',
  'Toprak Altunay',
];

function Intro() {
  return (
    <section id={styles.root}>
      <div id={styles['bg-wrapper']}>
        <div id={styles.intro} className={styles.container}>
          {' '}
          <h2 lang="tr-TR">
            {
              'Gün geçtikçe büyüyen ve gelişen ailemizin de katkılarıyla AİDİYET çatısı altında hep beraber emek vermenin ve fikir üretmenin keyfi, bu ailenin kazandırdığı ve elbette tüm aileye daima kazandırmaya devam edeceği o duygu çok tatmin edici.'
            }
          </h2>
          <p className={josefinSans.className} lang="tr-TR">
            {
              "Aidiyet Projesi, 2021 yılında TED Tam Eğitim Burslular Ankara Bölge Yönetim Kurulu’nun öncülüğünde ortaya çıkmıştır. Aidiyet Projesi'nin genel amacı, film analizlerinden fantastik hikayelere, bulmacalardan edebi eser eleştirilerine kadar birbirinden ilginç ve özenle hazırlanmış içerikler ile tanınırlığını arttırmak ve tüm Türkiye'deki burslu öğrencilerin kendini geliştirebileceği bir ortam oluşturmaktır. Bu doğrultuda bağımsız bir şekilde yoluna devam eden Aidiyet, dönemlik çıkardığı Aidiyet Bülten, içeriklerine ve bültenlerine yer verdiği internet sitesi ve paylaşımlarını yaptığı instagram sayfasından oluşmaktadır. Gün geçtikçe büyüyen ve gelişen ekibimizin de katkılarıyla uzun yıllar bu vizyonu sürdürebilmek ve üzerine eklenerek yeni başarılara imza atılmasını sağlamak için çalışıyoruz. Aktif olarak 18 kişiden oluşan bir ekibin yürüttüğü bu proje hakkında ayrıntılı bilgi almak için e-posta adresimizden bizlere ulaşabilirsiniz."
            }
          </p>
        </div>

        <div id={styles.team} className={styles.container}>
          <h2>Aidiyet Bülten Kadrosu:</h2>
          <ul>
            {TeamMembers.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;
