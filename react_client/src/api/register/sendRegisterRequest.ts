import { RegisterProps } from '../../pages/startingPage/register/RegisterModal.types';
import apiService from '../baseAxiosConfiguration';
import { setToken } from '../session';

export const sendRegisterRequest = async (registerProps: RegisterProps) => {
  try {
    const response = await apiService.post('/api/register', registerProps);
    if (response.status === 200 && response.data?.user) {
      const user = response.data.user;
      const token = user.tokens[0];
      setToken(token);
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
