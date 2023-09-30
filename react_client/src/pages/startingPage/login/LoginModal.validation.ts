import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  login: yup.string().required('Pole login jest wymagane'),
  password: yup.string().required('Pole hasło jest wymagane')
});
