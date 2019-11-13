import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, ContactForm } from './styles';

// Recaptcha HTML 6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string().required('Required'),
});

export default () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://formspree.io/mzbbvrpq',
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Thanks!');
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <Container>
        <ContactForm>
          <h1>Contato</h1>
          <Formik
            initialValues={{ email: '', message: '' }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate>
                <ul>
                  <li>
                    <Field name="name" id="name" placeholder="Nome" />
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      className="errorMsg"
                      component="p"
                    />
                  </li>
                  <li>
                    <Field
                      id="message"
                      name="message"
                      component="textarea"
                      placeholder="Mensagem"
                    />
                    <ErrorMessage
                      name="message"
                      className="errorMsg"
                      component="p"
                    />
                    <button
                      className="g-recaptcha"
                      data-sitekey="6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO"
                      data-callback="onSubmit"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Enviar
                    </button>
                  </li>
                </ul>
                {serverState && (
                  <p className={!serverState.ok ? 'errorMsg' : ''}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </ContactForm>
      </Container>
    </div>
  );
};
