import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const activities = [
  // QR Code: temporary project
  {
    title: "AIオセロ",
    coverImage: {
      // src: "img/hoge.png",
      alt: "オセロのイメージ",
    },
    description:
      // prettier-ignore
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis enim accusamus. Et voluptates, atque consequuntur, dolores dicta quibusdam reprehenderit aliquam veritatis unde sit ad. Consequatur quis ea autem velit.
      </p>,
    linkTo: "/ai-othello",
    isNew: true,
    targetAge: "どなたでも",
    requiredTime: "30分～",
  },
  {
    title: "ブロックプログラミングで迷路",
    coverImage: {
      src: "https://source.unsplash.com/hLvQ4-QEBAE/800x300",
      alt: "迷路のイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sint est omnis incidunt harum, maiores accusantium reiciendis id error nobis! Molestiae odit dignissimos illo nisi aperiam quod repellat placeat voluptas.
      </p>,
    linkTo: "/mage",
    isNew: false,
    targetAge: "小学生以上におすすめ",
    requiredTime: "10分～",
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
    coverImage: {
      // src: "img/piyo.png",
      alt: "麻雀のイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum quo cum voluptatem iure ab consectetur accusantium porro vel. Alias debitis minus similique blanditiis velit quo, quia enim quas aliquam!
      </p>,
    linkTo: "/mahjong",
    isNew: true,
    targetAge: "中学生以上におすすめ",
    requiredTime: "10秒〜",
  },
  // permanent project:
  {
    title: "Blosite",
    coverImage: {
      // src: "img/piyo.png",
      alt: "blosite のイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur pariatur quam nihil quasi a tempora cum magnam natus labore velit ipsum provident, voluptas, expedita hic neque repellendus ipsam sapiente?
      </p>,
    linkTo: "/blosite",
    isNew: true,
    targetAge: "中学生以上におすすめ",
    requiredTime: "10分～",
  },
  {
    title: "ハッカーになろう",
    coverImage: {
      // src: "img/piyo.png",
      alt: "セキュリティのイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi similique recusandae maxime suscipit explicabo ex inventore. Laborum voluptates assumenda accusantium consequatur veniam ab amet, temporibus repudiandae distinctio, dignissimos rerum?
      </p>,
    linkTo: "/security",
    isNew: false,
    targetAge: "高校生以上におすすめ",
    requiredTime: "5分～",
  },
  {
    title: "競馬AI",
    coverImage: {
      // src: "img/piyo.png",
      alt: "競馬のイメージ",
    },
    description:
      // prettier-ignore
      <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem quo minima ratione, aperiam iste aliquid! Dolor fugiat rerum, ut est itaque ipsa similique. Animi unde praesentium quis error eum.
      </p>,
    linkTo: "/horse-racing",
    isNew: true,
    targetAge: "大学生以上におすすめ",
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
