import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { exhibitions } from "../exhibitions";

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
                <div className="card__image">
                  <img
                    style={{ width: "100%" }}
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
                  <a
                    href={ex.url}
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
