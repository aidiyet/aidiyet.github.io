import styles from './Testimonials.module.css';

import Image from 'next/image';
import { josefinSans } from '@/styles/fonts';

function Testimonials() {
  return (
    <section id={styles.root}>
      <div id={styles.heading}>
        <h2>AİDİYET HAKKINDA GÖRÜŞLER</h2>
        <p>
          Okuyucularımızın bizler ve içeriklerimiz hakkındaki yorumlarına göz
          atın.
        </p>
      </div>
      <div id={styles['card-group']}>
        {TestimonialData.map((data, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles['card-frontmatter']}>
              <div className={styles['card-frontmatter-thumbnail']}>
                <Image
                  src={data.by.pictureURI}
                  alt={`A picture for ${data.by.name}.`}
                  fill
                />
              </div>
              <div className={styles['card-frontmatter-info']}>
                <p>{data.by.name}</p>
                <p className={josefinSans.className}>{data.by.profession}</p>
              </div>
            </div>
            <p className={josefinSans.className}>{`"${data.content}"`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const TestimonialData: {
  by: {
    pictureURI: string;
    name: string;
    profession: string;
  };
  content: string;
}[] = [
  {
    by: {
      pictureURI: '/testimonials/mark.jpg',
      name: 'Mark Zuckerberg',
      profession: 'CEO, Meta',
    },
    content:
      'Hayatımda gördüğüm en iyi içerikler bu sitede, keşke benim de bu kalitede bir sitem olsaydı. Her gün akşam uyumadan bültenlere göz atıyorum',
  },
  {
    by: {
      pictureURI: '/testimonials/yorekok.jpg',
      name: 'Yorekok',
      profession: 'YouTuber',
    },
    content:
      'YouTube bataklığından çıkıp zihnimi dinlendirdiğim ve akıl sağlığımı tekrardan kazandığım güzide mekan. Foseptik çukuruna girmeden önce mutlaka uğrayın.',
  },
  {
    by: {
      pictureURI: '/testimonials/rock.jpg',
      name: 'Dwayne Johnson',
      profession: 'Oyuncu',
    },
    content:
      'Sabah sporumu yaparken, akşam keyif çatarken telefonumda her zaman Aidiyet açık olur. Keşke sürekli yeni içerik eklense, canım sıkılıyor',
  },
  {
    by: {
      pictureURI: '/testimonials/geralt.jpg',
      name: 'Rivialı Geralt',
      profession: 'Efsunger',
    },
    content:
      'Yaratık avlamaktan zaman buldukça bültenleri okuyorum. Çok yakında yaratıklar ve nasıl öldürülecekleri hakkında içerik yazacağım, takipte kalın.',
  },
  {
    by: {
      pictureURI: '/testimonials/freeman.jpg',
      name: 'Morgan Freeman',
      profession: 'Oyuncu',
    },
    content:
      'Her bir içeriği okuduktan sonra ne kadar emek harcandığını ve titizlikle oluşturulduğunu hisediyorum. Böyle devam edin çocuklar.',
  },
  {
    by: {
      pictureURI: '/testimonials/kojima.jpg',
      name: 'Hideo Kojima',
      profession: 'Video oyunu tasarımcısı',
    },
    content:
      'Oyunlarımda hiçbir zaman ulaşamayacağım düzeyde samimiyet, haz ve eğlence bu içeriklerde saklı. Bunu nasıl yaptıklarını öğrenmeliyim.',
  },
  {
    by: {
      pictureURI: '/testimonials/mcqueen.jpg',
      name: 'Şimşek McQueen',
      profession: 'Piston Kupası Yarışmacısı',
    },
    content:
      'Tamam, başlıyoruz. Odaklan. İçerik. Burası Aidiyet. Bir kazanan, sıfır kaybeden. Ben içerikleri kahvaltı niyetine yerim. Kahvaltı? Belki de kahvaltı yapmam gerekirdi.',
  },
  {
    by: {
      pictureURI: '/testimonials/jesus.jpg',
      name: 'Jorge Jesus',
      profession: 'Teknik Direktör',
    },
    content:
      'Ben içerik üreticilerinin hep önde basmasını isterim. En iyi yazar, önde basabilen, ne yazdığını bilen Aidiyet yazarıdır. Até mais tarde',
  },
  {
    by: {
      pictureURI: '/testimonials/villager.jpg',
      name: 'Minecraft Villager',
      profession: 'Çiftçi',
    },
    content:
      'Binlerce makale okudum, bülten inceledim, ancak böylesine içten ve samimi olanıyla karşılaşmadım. İnanıyorum ki Aidiyet çok daha iyi yerlere gelecek. HuH',
  },
];

export default Testimonials;
