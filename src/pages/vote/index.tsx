import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// @ts-ignore
import howToVoteVideo from "./how-to-vote.mp4";

function QRCode(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 37"
      shape-rendering="crispEdges"
      className={styles.qrcode}
    >
      <path fill="#ffffff" d="M0 0h37v37H0z" />
      <path
        stroke="#000000"
        d="M4 4.5h7m1 0h1m4 0h3m3 0h2m1 0h7M4 5.5h1m5 0h1m1 0h2m3 0h1m2 0h3m3 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m1 0h2m3 0h1m2 0h2m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h2m1 0h2m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m2 0h4m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m3 0h1m1 0h2m1 0h5m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m1 0h1m4 0h5M4 12.5h1m1 0h2m1 0h3m3 0h3m1 0h1m1 0h2m3 0h1m2 0h1m1 0h2M5 13.5h1m6 0h4m1 0h3m3 0h4m1 0h1m3 0h1M5 14.5h2m1 0h1m1 0h1m1 0h3m2 0h1m2 0h2m2 0h3m1 0h1m1 0h2M8 15.5h1m2 0h1m1 0h4m3 0h1m3 0h1m2 0h1m4 0h1M4 16.5h2m4 0h2m3 0h1m2 0h2m1 0h1m1 0h1m3 0h1m1 0h2M4 17.5h2m6 0h3m1 0h1m1 0h1m1 0h8m2 0h3M5 18.5h2m1 0h5m1 0h1m1 0h2m1 0h3m1 0h5m2 0h3M4 19.5h1m2 0h3m8 0h1m1 0h1m1 0h1m1 0h1m6 0h1M5 20.5h1m3 0h2m2 0h1m4 0h3m1 0h1m1 0h2m2 0h2m1 0h1M9 21.5h1m1 0h2m3 0h1m1 0h1m1 0h2m2 0h2m3 0h3M4 22.5h1m1 0h1m3 0h2m1 0h2m2 0h4m1 0h1m7 0h1M6 23.5h4m1 0h2m4 0h2m2 0h2m7 0h1M5 24.5h1m1 0h4m2 0h3m1 0h2m1 0h11M12 25.5h3m4 0h3m2 0h1m3 0h5M4 26.5h7m1 0h1m2 0h2m1 0h2m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1M4 27.5h1m5 0h1m1 0h1m4 0h3m4 0h1m3 0h2m2 0h1M4 28.5h1m1 0h3m1 0h1m3 0h1m5 0h1m1 0h1m1 0h5m1 0h1m1 0h1M4 29.5h1m1 0h3m1 0h1m1 0h2m2 0h2m5 0h1m1 0h1m1 0h3m1 0h1M4 30.5h1m1 0h3m1 0h1m1 0h3m2 0h1m3 0h2m1 0h1m2 0h1m2 0h1m1 0h1M4 31.5h1m5 0h1m3 0h3m2 0h1m1 0h2m1 0h2m1 0h3m1 0h1M4 32.5h7m1 0h2m4 0h1m2 0h6m1 0h1m2 0h1"
      />
    </svg>
  );
}

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
        <p>
          本日は企画にお越しいただきありがとうございます。次のQRコードまたは
          <a href="https://www.komabasai.net/75/visitor/project/357">
            こちらのリンク
          </a>
          から駒場祭グランプリへの投票をお願いしております。1分ほどで完了しますので、次の動画を参考に投票をお願いします！
        </p>
        <div className={styles.container}>
          <img src="img/kf75QR.svg"></img>
          <video
            src={howToVoteVideo}
            controls
            className={styles.howToVoteVideo}
          />
        </div>
      </main>
    </Layout>
  );
}
