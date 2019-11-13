import styled from 'styled-components';

export const Nav = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 3rem;
  }
  img {
    height: 75px;
    width: 75px;
    margin-top: 15px;
  }

  @media (max-width: 866px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
`;

export const Container = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 886px) {
     {
      width: 100%;
      max-width: 866px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const HeaderPhoto = styled.div`
  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderText = styled.div`
   {
    z-index: 1;
    padding-top: 130px;
    width: 100%;
    margin-left: -70px;
  }
  h1 {
    padding: 0;
    color: #3bd783;
    font-size: 4rem;
    letter-spacing: 0.4rem;
    font-family: 'EksellDisplayWeb-Stencil';
    text-transform: uppercase;
    font-weight: 150;
    width: 100%;
  }

  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0.9rem 0;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 0.01rem;
    color: white;
    text-transform: uppercase;
    line-height: 36px;
    margin: 0;
    box-sizing: border-box;
    font-weight: 200;
  }

  p {
    color: white;
    margin-top: 20px;
    font-size: 1.4rem;
    font-weight: lighter;
    font-family: 'Roboto Regular';
    max-width: 560px;
    line-height: 25px;
    text-align: justify;
  }
  @media (max-width: 886px) {
     {
      z-index: 1;
      padding-top: 20px;
      width: 100%;
      margin-bottom: 40px;
      margin-left: 5px;
      margin-right: 5px;
    }
    h1 {
      text-align: center;
      letter-spacing: 0.4rem;
      font-size: 3rem;
      margin-bottom: 10px;
    }
    h1:after {
      display: none;
    }
    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
    p {
      font-size: 1.6rem;
      margin: 0 auto;
    }
  }
`;

export const SocialMedia = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 570px;}

    svg {
      display: flex;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 45px;
      margin: 1.5rem;
    }
    svg {
      transition: transform 0.2s;
    }
    svg:hover {
      transform: translateY(-3px);
      color: #3bd783;
    }
  }
  a {
    outline: none;
  }
  @media (max-width: 866px) {
    display: none;
  }
  
`;
