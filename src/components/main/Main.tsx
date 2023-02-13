import React from 'react';
import s from './Main.module.css'
import cs from '../../common/styles/CommonStyles.module.css'

export const Main = () => {
  return (
    <div className={cs.mainContainer}>
      <h1> Strona Glowna </h1>
      <p>To jest blog</p>
    </div>
  );
}