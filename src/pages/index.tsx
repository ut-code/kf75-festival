import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { exhibitions } from "../exhibitions";

const trackerURL = "https://" + "tracker.ut-code.workers" + ".dev";

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
          {exhibitions.map((ex) => (
            <li key={ex.title} className="col col--6 padding--md">
              <div className="card" style={{ height: "100%" }}>
                <div
                  className="card__image"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                    }}
                    src={ex.image.src}
                    alt={ex.image.alt}
                  />
                </div>
                <div className="card__body">
                  <h3>{ex.title}</h3>
                  {ex.isNew && <h3 className="badge badge--success">NEW</h3>}
                  <h3 className="badge badge--primary">{ex.target}</h3>
                  <h3 className="badge badge--info">{ex.takes}</h3>
                  <p>{ex.description}</p>
                </div>
                <div className="card__footer">
                  <button
                    type="button"
                    disabled={ex.disabled}
                    onClick={async () => {
                      console.log(`clicked ${ex.title}`);
                      const url = ex.url;
                      window.open(url, "_blank").focus();
                      // CORS の関係でエラーが出るが、特に問題ないので放置。
                      try {
                        await fetch(trackerURL, {
                          method: "POST",
                          body: JSON.stringify({
                            url,
                            key: "2e0c7cad39e09314a46f217c6107f96e08bd13984cd4ae4c29d96f5db440dba8",
                            kind: "festival",
                          }),
                        });
                      } catch (err) {}
                    }}
                    rel="noreferrer"
                    className="button button--primary button--block"
                  >
                    この企画を体験する
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
