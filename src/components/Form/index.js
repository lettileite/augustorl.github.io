// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, ContactForm } from './styles';

const Basic = () => (
  <Container>
    <ContactForm>
      <h1>Contato</h1>
      <Formik
        initialValues={{ email: '', nome: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
          nome: Yup.string().required('Required'),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <ul>
              <li>
                <Field name="nome" placeholder="Nome" />
                <Field name="email" placeholder="E-mail" />
              </li>
              <li>
                <textarea
                  type="text"
                  placeholder="Mensagem"
                  name="mensagem"
                  required
                />
                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </ContactForm>
  </Container>
);

export default Basic;
