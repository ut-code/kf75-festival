import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

type TargetAge = "どなたでも" | "小中学生以上におすすめ" | "大人向け";
const timeEst = {
  short: "5分程度",
  med: "15分ほど",
  long: "30分〜",
};
type TimeEst = "short" | "med" | "long";

type Activitiy = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  to: string; // URL
  isNew: boolean;
  target: TargetAge;
  takes: TimeEst;
};

const activities: Activitiy[] = [
  {
    title: "AIオセロ",
    image: {
      src: "img/hoge.png",
      alt: "オセロのイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
				corporis enim accusamus. Et voluptates, atque consequuntur, dolores
				dicta quibusdam reprehenderit aliquam veritatis unde sit ad. Consequatur
				quis ea autem velit.
				`,
    to: "/ai-othello",
    isNew: true,
    target: "どなたでも",
    takes: "long",
  },
  {
    title: "ブロックプログラミングで迷路",
    image: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "迷路のイメージ",
    },
    description: `
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sint est
				omnis incidunt harum, maiores accusantium reiciendis id error nobis!
				Molestiae odit dignissimos illo nisi aperiam quod repellat placeat
				voluptas.
			`,
    to: "/mage",
    isNew: false,
    target: "小中学生以上におすすめ",
    takes: "med",
  },
  /*
  {
    title: "ブロックプログラミングで並び替え",
    coverImage: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "身長順で並び替えのイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sint est omnis incidunt harum, maiores accusantium reiciendis id error nobis! Molestiae odit dignissimos illo nisi aperiam quod repellat placeat voluptas.
      </p>,
    linkTo: "/sort",
    targetAge: "小学生以上におすすめ",
    isNew: false,
    requiredTime: "10分～",
  },
  */
  {
    title: "麻雀",
    image: {
      src: "img/piyo.png",
      alt: "麻雀のイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum
				quo cum voluptatem iure ab consectetur accusantium porro vel. Alias
				debitis minus similique blanditiis velit quo, quia enim quas aliquam!
			`,
    to: "/mahjong",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: "short",
  },
  {
    title: "Blosite",
    image: {
      src: "img/piyo.png",
      alt: "blosite のイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				consequuntur pariatur quam nihil quasi a tempora cum magnam natus labore
				velit ipsum provident, voluptas, expedita hic neque repellendus ipsam
				sapiente?
			`,
    to: "/blosite",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: "med",
  },
  {
    title: "ハッカーになろう",
    image: {
      src: "img/piyo.png",
      alt: "セキュリティのイメージ",
    },
    description: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
				nisi similique recusandae maxime suscipit explicabo ex inventore.
				Laborum voluptates assumenda accusantium consequatur veniam ab amet,
				temporibus repudiandae distinctio, dignissimos rerum?
				`,
    to: "/security",
    isNew: false,
    target: "大人向け",
    takes: "short", // 本当に？
  },
  {
    title: "競馬AI",
    image: {
      src: "img/piyo.png",
      alt: "競馬のイメージ",
    },
    description: `
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				voluptatem quo minima ratione, aperiam iste aliquid! Dolor fugiat rerum,
				ut est itaque ipsa similique. Animi unde praesentium quis error eum.
			`,
    to: "/horse-racing",
    isNew: true,
    target: "大人向け",
    takes: "short",
  },
];

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
                    src={activity.image.src}
                    alt={activity.image.alt}
                  />
                </div>
                <div className="card__body">
                  <h3>{activity.title}</h3>
                  {activity.isNew && (
                    <h3 className="badge badge--success">NEW</h3>
                  )}
                  <h3 className="badge badge--primary">{activity.target}</h3>
                  <h3 className="badge badge--info">{activity.takes}</h3>
                  <p>{activity.description}</p>
                </div>
                <div className="card__footer">
                  <a
                    href={activity.to}
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
