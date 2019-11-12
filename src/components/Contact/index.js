import React from 'react';

import { Container, ContactForm } from './styles';

export default function Contact() {
  return (
    <Container>
      <ContactForm>
        <h1>Contato</h1>
        <form id="commentForm">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                minLength="2"
                required
              />
              <input type="email" placeholder="E-mail" name="email" required />
            </li>
            <li>
              <textarea
                type="text"
                placeholder="Mensagem"
                name="mensagem"
                required
              />
              <button type="button" className="send">
                Enviar
              </button>
            </li>
          </ul>
        </form>
      </ContactForm>
    </Container>
  );
}
