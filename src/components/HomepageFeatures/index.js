import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'One Time Cost',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        LaraPush is unique due to its one-time payment model, allowing for limitless usage with zero recurring fees. This feature truly sets it apart.
      </>
    ),
  },
  {
    title: 'Truly Unlimited',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With LaraPush, You can add Unlimited Websites, with Unlimited Subscribers and You can send Unlimited Notifications for Unlimited Period Of time.
      </>
    ),
  },
  {
    title: '100% Self Hosted',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        LaraPush is a fully self-hosted push notification tool. This means you have complete control and ownership over your subscriber data on your own server.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
