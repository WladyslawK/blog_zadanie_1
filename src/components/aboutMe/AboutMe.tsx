import React from 'react';
import s from './AboutMe.module.css'
import cs from '../../common/styles/CommonStyles.module.css'

export const AboutMe = () => {
  return (
    <div className={cs.mainContainer}>
      <h1>O mnie</h1>
      <p>coś o mnie</p>
    </div>
  );
};