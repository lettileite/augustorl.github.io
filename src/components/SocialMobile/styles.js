import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  svg:hover {
    transform: translateY(-3px);
    color: #3bd783;
  }

  @media (max-width: 886px) {
    display: inline-block;
    text-align: center;
    width: 100%;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 30px;
      max-width: 500px;
      margin: 1rem;
    }
  }
`;
