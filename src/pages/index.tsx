import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const activities = [
  // QR Code: temporary project
  {
    title: "QRコードを体験してみよう！",
    coverImage: {
      src: "img/qr_code.png",
      alt: "QRコードのイメージ",
    },
    description:
      // prettier-ignore
      <p>
        生活のあらゆる場面で見かけるQRコード。その仕組みを学びながら、自分の手でQRコードを作成しましょう！また、その過程でバーコードの仕組みについても学ぶことができます！(QRコードは株式会社デンソーウェーブの登録商標です)
      </p>,
    linkTo: "https://ut-code.github.io/qrcode/",
    isNew: true,
    targetAge: "中学生以上におすすめ",
    requiredTime: "30分～",
  },
  {
    // Art: (planned to be) permanent project
    title: "CodeYourArt",
    coverImage: {
      src: "img/code_your_art.png",
      alt: "ブロックプログラミングで図形を描く。",
    },
    description:
      // prettier-ignore
      <p>
        あなただけのアート作品を「プログラム」しよう！
        ブロックプログラミングで絵を描きながら、直感的にプログラムの基本構造に触れることができます。
        作った作品はスマートフォンに保存して友達や家族に自慢しよう！
      </p>,
    linkTo: "https://utcode-draw.onrender.com/",
    isNew: true,
    targetAge: "どなたでも",
    requiredTime: "15分～",
  },
  {
    // u/place: (planned to be) permanent project
    title: "u/place",
    coverImage: {
      src: "img/u_place.png",
      alt: "イメージの代替テキスト",
    },
    description:
      // prettier-ignore
      <p>
        大きなキャンバスに絵を描きましょう！やり方は簡単。セルを塗り潰すだけ！
        みんなと同じキャンバスなので、他の人と協力するもよし。競うもよし。ただし、一つ塗ったら10秒待たなければいけません…  
        思い通りの絵ができるように頑張りましょう！
      </p>,
    linkTo: "https://u-place.onrender.com/",
    isNew: true,
    targetAge: "どなたでも",
    requiredTime: "10秒〜",
  },
  // permanent project:
  {
    title: "はじめてのプログラミング教室",
    coverImage: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "ブロックプログラミング",
    },
    description:
      // prettier-ignore
      <p>
        「はじめてのプログラミング教室」は ut.code(); がこれまでの学園祭でも提供してきた、自慢のコンテンツです。
        ブロックを並べて、積み木感覚で、誰でも簡単にプログラミングに触れることができます。
        でも最適化するとなると大人でも大変……。ぜひ挑戦していってください！
      </p>,
    linkTo: "https://festival.utcode.net/",
    targetAge: "どなたでも",
    isNew: false,
    requiredTime: "10分～",
  },
  /* not working
  {
    title: "Code vs Code",
    coverImage: {
      src: "https://source.unsplash.com/yWGiyL8DSys/800x300",
      alt: "プログラムを書いて戦う様子",
    },
    description:
      // prettier-ignore
      <p>
        ブロックをならべて、つなげて、自分だけのパイロット AI をプログラムしよう！
        作ったプログラムで、企画に参加してくださった他の皆さんと対戦できます。
        最強 AI の座を手にするのは一体誰だ！？
      </p>,
    linkTo: "https://code-vs-code.utcode.net/",
    targetAge: "どなたでも",
    isNew: false,
    requiredTime: "30分～",
  },
  */
  /* not working
  {
    title: "タイピングゲーム",
    coverImage: {
      src: "https://source.unsplash.com/kUqqaRjJuw0/800x300",
      alt: "タイピングゲームをするイメージ",
    },
    description:
      // prettier-ignore
      <p>
        タイピングゲームで、一位を目指そう！
        他の人と競い合いながら、タイピングの練習をすることができます。
        他のタイピングゲームにはない独自の機能もあるかも……？
      </p>,
    linkTo: "https://typing.utcode.net/",
    targetAge: "どなたでも",
    isNew: false,
    requiredTime: "1分～",
  }, */
  // CreateCPU: temporary project
  {
    title: "CreateCPU",
    coverImage: {
      src: "https://source.unsplash.com/_LIZ36OHGKk/800x300",
      alt: "CPU のイメージ",
    },
    description:
      // prettier-ignore
      <p>
        皆さんの持つパソコンやスマートフォンは、私たちが手で計算するよりもずっと高速に計算を行うことができます。
        これは、私たちの脳に相当する CPU と呼ばれる部品が、計算を高速に行っているからです。
        高速な CPU を製造するには高度な技術が必要ですが、CPU の理論的背景自体は、実はとてもシンプルです。
        足し算を行う論理回路を作りながら、CPU の仕組みを学んでいきましょう。
      </p>,
    linkTo: "/create-cpu",
    targetAge: "高校生以上におすすめ",
    isNew: false,
    requiredTime: "5分～",
  },
];

// prettier-ignore
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container padding-vert--lg">
        <ul
          className="row row--no-gutters"
          style={{
            padding: 0,
            listStyleType: "none",
          }}
        >
          {activities.map((activity) => (
            <li key={activity.title} className="col col--6 padding--md">
              <div className="card" style={{ height: "100%" }}>
                <div className="card__image">
                  <img
                    style={{ width: "100%" }}
                    src={activity.coverImage.src}
                    alt={activity.coverImage.alt}
                  />
                </div>
                <div className="card__body">
                  <h3>{activity.title}</h3>
                  {activity.isNew && (
                    <h3 className="badge badge--success">NEW</h3>
                  )}
                  <h3 className="badge badge--primary">{activity.targetAge}</h3>
                  <h3 className="badge badge--info">{activity.requiredTime}</h3>
                  {activity.description}
                </div>
                <div className="card__footer">
                  <a
                    href={activity.linkTo}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--primary button--block"
                  >
                    この企画を体験する
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
