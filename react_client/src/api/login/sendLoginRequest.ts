import { RegisterProps } from '../../pages/startingPage/register/RegisterModal.types';
import apiService from '../baseAxiosConfiguration';
import { setToken } from '../session';
import { LoginProps } from '../../pages/startingPage/login/LoginModal.types';

export const sendLoginRequest = async (loginProps: LoginProps) => {
  try {
    const response = await apiService.post('/api/authenticate', loginProps);
    if (response.status === 200 && response.data?.accessToken) {
      const token = response.data.accessToken;
      setToken(token);
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
