import * as yup from 'yup';
import { RegisterProps } from './RegisterModal.types';

export const registerValidationSchema = yup.object<RegisterProps>().shape({
  email: yup.string().required('Pole jest wymagane'),
  password: yup.string().required('Pole jest wymagane'),
  name: yup.string().required('Pole jest wymagane'),
  age: yup.number().required('Pole jest wymagane'),
  gender: yup.string().required('Pole jest wymagane')
});
