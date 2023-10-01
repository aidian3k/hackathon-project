import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Login is required'),
  password: yup.string().required('Password is required')
});
