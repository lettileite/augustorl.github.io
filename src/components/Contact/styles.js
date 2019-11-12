import styled from 'styled-components';

export const Container = styled.div`
   {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContactForm = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: #fff;
    font-size: 30px;
    letter-spacing: 0.09rem;
    font-family: 'EksellDisplayWeb-Stencil';
    text-transform: uppercase;
    font-weight: 150;
    padding-top: 25px;
  }
  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: #54fdd7;
    margin: 0.9rem 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
  }
  ul li {
    padding: 1rem;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.85);
    opacity: 1; /* Firefox */
    font-family: 'Roboto Regular';
    font-size: 15px;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.85);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.85);
  }

  input {
    display: flex;
    height: 40px;
    width: 300px;
    border: 1px solid;
    border-radius: 25px 25px 25px;
    margin-bottom: 10px;
    border-color: rgba(255, 255, 255, 0.85);
    background-color: rgba(0, 0, 0, 0.95);
    color: rgba(255, 255, 255, 0.85);
    outline: none;
    padding-left: 20px;
  }
  textarea {
    display: flex;
    height: 20rem;
    width: 40rem;
    border: 2px solid;
    border-radius: 15px 15px 15px;
    margin-bottom: 10px;
    border-color: rgba(255, 255, 255, 0.85);
    background-color: rgba(0, 0, 0, 0.95);
    color: rgba(255, 255, 255, 0.85);
    outline: none;
    padding-left: 20px;
    padding-top: 1rem;
    resize: none;
    font-size: 15px;
    font-family: 'Roboto Regular';
  }
  button {
    background-color: #54fdd7;
    color: rgba(0, 0, 0, 0.95);
    border-radius: 25px 25px 25px;
    padding: 10px 10px 10px 10px;
    width: 90px;
    font-family: 'Roboto regular';
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 0.07rem;
    outline: none;
    border: 0;
    float: right;
  }
  @media (max-width: 866px) {
    h1 {
      font-size: 3rem;
    }
    h1:after {
      display: none;
    }
     {
      width: 100%;
      max-width: 1220px;
      margin: 0 auto;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    ul {
      flex-direction: column;
    }
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`;