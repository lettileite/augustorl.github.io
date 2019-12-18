import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Techs from './components/Techs';
import ReactHelmet from './components/ReactHelmet';
import Form from './components/Form';
import Footer from './components/Footer';
import SocialMobile from './components/SocialMobile';

function App() {
  return (
    <>
      <ReactHelmet />
      <Header />
      <Techs />
      <Form />
      <SocialMobile />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
