import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Techs from './components/Techs';
// import Contact from './components/Contact';
import Form from './components/Form';

function App() {
  return (
    <>
      <Header />
      <Techs />
      <Form />
      <GlobalStyle />
    </>
  );
}

export default App;
