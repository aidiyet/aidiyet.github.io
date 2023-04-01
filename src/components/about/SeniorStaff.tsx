import styles from './SeniorStaff.module.css';

import Image from 'next/image';

function SeniorStaff() {
  return (
    <section id={styles.root}>
      <h2 lang="tr-TR">AİDİYET PROJESİ YÖNETİM KADROSU</h2>

      <div id={styles.grid}>
        {StaffData.map(
          ({ name, pictureURI, profession, socialHandles }, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.picture}>
                <Image src={pictureURI} alt={`A photo of ${name}.`} fill />
              </div>

              <h4>{name}</h4>
              <p>{profession}</p>

              <ul>
                {socialHandles?.linkedIn ? (
                  <li>
                    <a
                      href={`https://www.linkedin.com/in/${socialHandles.linkedIn}`}
                    >
                      <Image
                        src={'/LinkedIn.svg'}
                        alt={'LinkedIn Brand Logo'}
                        fill
                      />
                    </a>
                  </li>
                ) : (
                  <></>
                )}

                {socialHandles?.instagram ? (
                  <li>
                    <a
                      href={`https://www.instagram.com/${socialHandles.instagram}`}
                    >
                      <Image
                        src={'/Instagram.svg'}
                        alt={'Instagram Brand Logo'}
                        fill
                      />
                    </a>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}

const StaffData: {
  pictureURI: string;
  name: string;
  profession: string;
  socialHandles?: {
    linkedIn?: string;
    instagram?: string;
  };
}[] = [
  {
    pictureURI: '/about/staff/ozan.jpg',
    name: 'OZAN ALİ ALTUNDAL',
    profession: 'Proje Sorumlusu',
    socialHandles: {
      linkedIn: 'ozan-ali-altundal',
      instagram: 'ozan.altundal_',
    },
  },
  {
    pictureURI: '/about/staff/asli.jpg',
    name: 'ASLI YALÇINKAYA',
    profession: 'Sayı Sorumlusu',
    socialHandles: {
      linkedIn: 'asl%C4%B1-yal%C3%A7%C4%B1nkaya-394086230',
      instagram: 'asliyalcinkya',
    },
  },
  {
    pictureURI: '/about/staff/eren.png',
    name: 'EREN KARAGÜL',
    profession: 'Baş Tasarımcı',
    socialHandles: {
      linkedIn: 'eren-karagül-784278123',
      instagram: 'karagul.eren',
    },
  },
  {
    pictureURI: '/about/staff/sila.jpg',
    name: 'SILA KURĞA',
    profession: 'İçerik Sorumlusu',
    socialHandles: {
      linkedIn: 'sila-kur%C4%9Fa-488a09188',
      instagram: 'kurgansla',
    },
  },
  {
    pictureURI: '/about/staff/toprak.jpg',
    name: 'TOPRAK ALTUNAY',
    profession: 'Baş Editör',
    socialHandles: {
      linkedIn: 'toprakaltunay',
      instagram: 'toprakaltunay',
    },
  },
  {
    pictureURI: '/about/staff/baturalp.jpg',
    name: 'BATURALP KIZILTAN',
    profession: 'IT Guy',
    socialHandles: {
      linkedIn: 'baturalpk',
    },
  },
  {
    pictureURI: '/about/staff/dilara.jpg',
    name: 'DİLARA DEMİRCİOĞLU',
    profession: 'Denetleme Kurulu Üyesi',
    socialHandles: {
      linkedIn: 'dilara-demircio%C4%9Flu-b01381202',
      instagram: 'ddemirciioglu',
    },
  },
  {
    pictureURI: '/about/staff/salih.jpg',
    name: 'SALİH BURAK GÜLEN',
    profession: 'Denetleme Kurulu Üyesi',
    socialHandles: {
      linkedIn: 'salih-burak-g%C3%BClen-4438731a2',
      instagram: 'salihburakgulen',
    },
  },
  {
    pictureURI: '/about/staff/semiha.jpg',
    name: 'SEMİHA ÖMÜR',
    profession: 'Denetleme Kurulu Üyesi',
    socialHandles: {
      linkedIn: 'semiha-%C3%B6m%C3%BCr-5089501a6',
      instagram: 'semiha.omur',
    },
  },
];

export default SeniorStaff;
