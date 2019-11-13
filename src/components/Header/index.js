import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import logo from '../../assets/logo.png';
import Photo from '../../assets/fotoheader.png';
import { Nav, Container, HeaderPhoto, HeaderText, SocialMedia } from './styles';

export default function Header() {
  return (
    <header>
      <Nav>
        <img src={logo} alt="Logo Augusto Leite" />
      </Nav>
      <Container>
        <HeaderPhoto>
          <img src={Photo} alt="Foto Augusto Leite" />
        </HeaderPhoto>
        <HeaderText>
          <h2>Desenvolvedor front-end</h2>
          <h1>Augusto Leite</h1>
          <p>
            Nasci em Florianópolis e tenho 27 anos. Sempre tive interesse em
            tecnologia tendo contato com computador desde criança. Sou um
            apaixonado por desenvolvimento e nos projetos em que participo prezo
            por códigos limpos e designs minimalistas que tornam a experiência
            do cliente e do usuário mais satisfatória.
          </p>
          <SocialMedia>
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
              href="https://github.com/augustorl/augustorl.github.io/blob/master/files/curriculo.pdf"
            >
              <IoIosPaper />
            </a>
          </SocialMedia>
        </HeaderText>
      </Container>
    </header>
  );
}
