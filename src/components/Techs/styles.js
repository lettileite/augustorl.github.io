import styled from 'styled-components';

export const Tech = styled.section`
   {
    width: 100%;
    margin: 0 auto;
    background: #3bd783;
    color: #000;
  }
`;

export const TechList = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    color: rgba(0, 0, 0, 0.95);
    font-size: 30px;
    letter-spacing: 0.07rem;
    font-family: 'EksellDisplayWeb-Stencil';
    text-transform: uppercase;
    font-weight: 150;
    padding-top: 5px;
  }

  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0.9rem 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 -1.5rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 5px;
  }
  ul li {
    display: block;
    transition: transform 0.2s;
  }
  ul li > img {
    width: 60%;
    justify-content: center;
  }

  ul li:hover {
    transform: translateY(-5px);
  }
  ul li p {
    display: flex;
    padding: 1.5rem;
    font-size: 1.5rem;
    justify-content: center;
  }

  @media (max-width: 866px) {
    h1 {
      font-size: 2.6rem;
      padding-top: 15px;
      text-align: center;
    }
    h1:after {
      display: none;
    }
    ul li > img {
      width: 55%;
      padding: 20px 0px 20px 0px;
    }
  }
`;
