type TargetAge = "どなたでも" | "小中学生以上におすすめ" | "大人向け";
const timeEst = {
  short: "5分程度",
  med: "15分ほど",
  long: "30分〜",
} as const;
type TimeEst = (typeof timeEst)[keyof typeof timeEst];

type Exhibition = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  url: string;
  isNew: boolean;
  target: TargetAge;
  takes: TimeEst;
};

export const exhibitions: Exhibition[] = [
  {
    title: "AIとオセロ",
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
    url: "/ai-othello",
    isNew: true,
    target: "どなたでも",
    takes: timeEst.short,
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
    url: "/mage",
    isNew: false,
    target: "小中学生以上におすすめ",
    takes: timeEst.med,
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
    url: "/mahjong",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: timeEst.short,
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
    url: "/blosite",
    isNew: true,
    target: "小中学生以上におすすめ",
    takes: timeEst.med,
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
    url: "/security",
    isNew: false,
    target: "大人向け",
    takes: timeEst.short, // 本当に？
  },
  {
    title: "競馬AI",
    image: {
      src: "img/horse.png",
      alt: "競馬のイメージ",
    },
    description: `
      競馬をAIで予測しようというのがこのプロジェクトが発足した理由です。
      そしてこのサイトではそのAIと対戦をしたり、AIの学習に使われたデータについて閲覧することが出来ます。
      AIとの対戦ではランダムで出てくる過去データをもとに順位の予想勝負をしてもらいます。
      ハイスコアを出すとランキングボードに乗ることが出来るのでぜひ頑張ってください。
			`,
    url: "https://horse.utcode.net/",
    isNew: true,
    target: "大人向け",
    takes: timeEst.med,
  },
];
