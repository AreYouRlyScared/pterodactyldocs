import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { GoLock } from "react-icons/go"

const features = [
  {
    title: <>Security First</>,
    icon: '',
    description: (
      <>
        Security is a first-class citizen on this platform with bcrypt hashing, AES-256-CBC encryption, and HTTPS support out of the box.
      </>
    ),
  },
  {
    title: <>Modern Tooling</>,
    icon: 'GoBeaker',
    description: (
      <>
        Built on a modern stack utilizing the best design practices that make it easy to jump in and make modifications.
      </>
    ),
  },
  {
    title: <>Docker to the Core</>,
    icon: 'anchor',
    description: (
      <>
        All servers run in isolated Docker containers that limit attack vectors, provide strict resource limits, and provide environments tailored to each specific game.
      </>
    ),
  },
  {
    title: <>Free & Open Source</>,
    icon: 'wallet',
    description: (
      <>
        Pterodactyl is 100% free and licensed under a MIT license. 
        All of our code is completely open source as well.
      </>
    ),
  },
  {
    title: <>User Friendly</>,
    icon: 'GoDeviceDesktop',
    description: (
      <>
        Save the furious clicking and screaming for Overwatch. 
        Pterodactyl's interface is designed so well even Hanzo can use it.
      </>
    ),
  },
  {
    title: <>Scalable</>,
    icon: 'GoServer',
    description: (
      <>
        Whether you're a hosting company, the next Hyplex, or just some dudes playing video games, we've got you covered.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {icon && (
        <div className="text--center">
          {icon}
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png" alt="Pterodactyl" class="logo" />
          <div className={styles.buttons}>
          <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://demo.pterodactyl.io/')}>
              Demo
            </Link>&nbsp;&nbsp;&nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/panel/getting_started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
