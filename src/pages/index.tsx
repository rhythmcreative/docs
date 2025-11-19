import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero-soft', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Blog de Documentacion<br />
          <span style={{ color: 'var(--ifm-color-primary)' }}></span>
        </Heading>
        <p className="hero__subtitle">
          <br />
          Hola, soy <strong>rhythmcrea</strong>, me gusta la tecnología y aquí voy a poner mi documentación por si alguien la necesita algún día.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/intro">
            Empezar a Leer
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Ver Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCards() {
  return (
    <div className="container margin-top--xl margin-bottom--xl">
      <div className="row">
        <div className="col col--4 margin-bottom--lg">
          <div className="card padding--lg h-100">
            <Heading as="h3" className="margin-bottom--sm">☁️ Cloudflare</Heading>
            <p className="margin-bottom--md text--secondary">
              Guías sobre Tunnels, Proxies y seguridad en la red.
            </p>
            <Link to="/docs/intro" className="button button--secondary button--sm">
              Ver Guías
            </Link>
          </div>
        </div>
        <div className="col col--4 margin-bottom--lg">
          <div className="card padding--lg h-100">
            <Heading as="h3" className="margin-bottom--sm">🐧 Sistemas Operativos Linux</Heading>
            <p className="margin-bottom--md text--secondary">
              Configuraciones, distros y optimización de servidores.
            </p>
            <Link to="/blog" className="button button--secondary button--sm">
              Aprender Más
            </Link>
          </div>
        </div>
        <div className="col col--4 margin-bottom--lg">
          <div className="card padding--lg h-100">
            <Heading as="h3" className="margin-bottom--sm">🖥️ Selección de Hardware</Heading>
            <p className="margin-bottom--md text--secondary">
              Análisis y recomendaciones para tu homelab y setup.
            </p>
            <Link to="https://github.com/facebook/docusaurus" className="button button--secondary button--sm">
              Ver Hardware
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Blog de documentación tecnológica">
      <HomepageHeader />
      <main>
        <FeatureCards />
      </main>
    </Layout>
  );
}
