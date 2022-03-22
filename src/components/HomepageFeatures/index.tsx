import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type DescriptionItem = {
  title: string;
  description: JSX.Element;
};

const DescriptionList: DescriptionItem[] = [
  {
    title: 'Сборник технологий и подходов',
    description: (
      <>
        Стараюсь собрать все технологии и подходы в разработке информационных систем.
      </>
    ),
  },
  {
    title: 'Думайте сами, решайте сами',
    description: (
      <>
        Мир редко делится на черное и белое. Поэтому я описываю преимущества и недостатки технологий/подходов,
        но решать, что лучше использовать, нужно будет вам.
      </>
    ),
  },
  {
    title: 'Моя точка зрения и мой личный опыт',
    description: (
      <>
        Для глубокого анализа технологии и подхода нужно применять всё это на практике, однако не всегда это удается
        сделать.
        Я стараюсь разобраться в каждой технологии/подходе на сколько это возможно и построить из этого вывод. Но он может отличатся
        от вашего.
      </>
    ),
  },
  {
    title: 'Всегда открыт для общения/дискуссии',
    description: (
      <>
        Вы всегда можете мне написать. Буду рад если поделитесь своим опытом и точкой зрения. Все контакты можно найти <Link to="/about">тут</Link>.
      </>
    ),
  },
];

function Description({title, description}: DescriptionItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageDescriptions(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {DescriptionList.map((props, idx) => (
            <Description key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
