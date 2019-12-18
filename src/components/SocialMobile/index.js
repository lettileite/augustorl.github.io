import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';

import { Container } from './styles';

export default function SocialMobile() {
  return (
    <div>
      <Container>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/augustorl"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/augusto-leite-a3729412b/"
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://augustoleite.com/curriculo.pdf"
        >
          <IoIosPaper />
        </a>
      </Container>
    </div>
  );
}
