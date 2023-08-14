import React from 'react';
import { HeadingDivider } from '../HeadingDivider/HeadingDivider';
import Link from 'next/link';

import styles from './About.module.scss';

interface AboutProps {
  isPage: boolean;
}

export const About: React.FC<AboutProps> = ({ isPage }) => {
  return (
    <section className={styles.root} id="about-me">
      {isPage ? (
        <HeadingDivider name="about" isLink={false} isTag={false} isLine={true} isBack={true} />
      ) : (
        <HeadingDivider name="about" isLink={false} isTag={true} isLine={true} isBack={false} />
      )}

      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p className={styles.article}>
            Я молодой и амбициозный Frontend разработчик с большим желанием и стремлением
            развиваться в сфере веб-разработки. Имею глубокие знания HTML, CSS и JavaScript, а также
            опыт работы с фреймворком React.
            <br />
            <br />
            Уверен, что мой креативный подход к решению задач, сочетание логического мышления и
            эстетического восприятия позволят мне успешно реализовывать функциональные и приятные
            взгляду пользователей веб-приложения.
            <br />
            <br />
            Готов принять любые технические или творческие вызовы, а также показать свои способности
            в коллективе с другими разработчиками. Я верю, что с командой профессионалов я смогу
            достичь высоких результатов и обеспечить качественный опыт пользователя через разработку
            привлекательных и интуитивно понятных интерфейсов.
          </p>
          {isPage ? (
            false
          ) : (
            <Link href="/about" className="primary-btn">
              Read more -&gt;
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
