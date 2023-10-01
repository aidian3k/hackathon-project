import apiService from '../baseAxiosConfiguration';
import { setToken } from '../session';
import { BuildUserGoalsResponse } from '../../pages/dashboardPage/goalDetails/GoalDetails.types';

export const sendBuildUserGoalsRequest = async (buildUserGoalsProps: Map<string, string>) => {
  try {
    const data = JSON.stringify(Object.fromEntries(buildUserGoalsProps));
    const response = await apiService.post<BuildUserGoalsResponse>('/api/buildUserGoals', data);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e) {
    return null;
  }
};
