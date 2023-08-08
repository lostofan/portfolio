import React from 'react';
import { Link } from 'react-router-dom';

interface DividerProps {
  name: string;
  isTag: boolean;
  isLink: boolean;
  isLine: boolean;
  isBack: boolean;
}

export const HeadingDivider: React.FC<DividerProps> = ({ name, isTag, isLink, isLine, isBack }) => {
  return (
    <div className={name + '__heading headings'}>
      <h1 className="heading">
        {isTag ? <span className="tag">#</span> : <span className="tag">/</span>}
        {name}
      </h1>
      {isLine ? <div className="line"></div> : false}
      {isLink ? (
        <Link to="/works" className="heading__link">
          View all ~~&gt;
        </Link>
      ) : (
        false
      )}
      {isBack ? (
        <Link to="/" className="heading__back">
          Back <span className="heading__back_symbol">&lt;</span>
        </Link>
      ) : (
        false
      )}
    </div>
  );
};
