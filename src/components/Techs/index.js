import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';

import { Tech, TechList } from './styles';

export default function Techs() {
  return (
    <Tech>
      <TechList>
        <h1>Tecnologias que utilizo</h1>
        <ul>
          <li>
            <img src={html} alt="Html" />
            <p>HTML</p>
          </li>
          <li>
            <img src={css} alt="Css" />
            <p>CSS</p>
          </li>
          <li>
            <img src={javascript} alt="JavaScript" />
            <p>Javascript</p>
          </li>
          <li>
            <img src={react} alt="React" />
            <p>React</p>
          </li>
          <li>
            <img src={nodejs} alt="Nodejs" />
            <p>Nodejs</p>
          </li>
        </ul>
      </TechList>
    </Tech>
  );
}
