import React from 'react';
import { Helmet } from 'react-helmet';

export default function ReactHelmet() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Augusto Leite : Desenvolvedor Frontend</title>
        <meta
          name="description"
          content="Portoflio de Augusto Leite - Desenvolvedor FrontEnd  realizado com ReactJS"
        />
        <link rel="canonical" href="http://augustoleite.com" />
      </Helmet>
    </div>
  );
}
