import * as yup from 'yup';
import { RegisterProps } from './RegisterModal.types';

export const registerValidationSchema = yup.object<RegisterProps>().shape({
  email: yup.string().required('Field is required'),
  password: yup.string().required('Field is required'),
  name: yup.string().required('Field is required'),
  age: yup.number().required('Field is required'),
  gender: yup.string().required('Field is required')
});
