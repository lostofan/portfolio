import React from 'react';
import styles from './Contacts.module.scss';
import { HeadingDivider } from 'components/HeadingDivider/HeadingDivider';

export const Contacts = () => {
  return (
    <section className="main__contacts contacts" id="contacts">
      <HeadingDivider name="contacts" isLink={false} isTag={true} isLine={true} isBack={false} />
      <div className={styles.root}>
        <div className="contacts__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem nam ab! Ullam
          molestiae dolore beatae dolores laboriosam ad, sapiente molestias, iste qui provident
          earum, saepe quasi. Non, magni beatae.
        </div>
        <div className={styles.links}>
          <h2 className={styles.heading}>Message me here</h2>
          <div className={styles.link}>
            <img src="" alt="" className={styles.ico} />
            <p className={styles.nickname}>lostofan</p>
          </div>
        </div>
      </div>
    </section>
  );
};
