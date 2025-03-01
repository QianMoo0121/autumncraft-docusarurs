import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单明了',
    Svg: require('@site/static/img/1.png').default,
    description: (
      <>
        用最简单的语言帮助你快速了解枫叶源
      </>
    ),
  },
  {
    title: '图文并茂',
    Svg: require('@site/static/img/2.png').default,
    description: (
      <>
        文档编写运用大量图文并茂，易懂且形象
      </>
    ),
  },
  {
    title: '时效性强',
    Svg: require('@site/static/img/3.png').default,
    description: (
      <>
        文档随服务器内容变化而变化，不怕过时的内容
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
