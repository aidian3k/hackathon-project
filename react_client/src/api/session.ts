export const API_TOKEN = 'api_token';

export const getToken = () => localStorage.getItem(API_TOKEN);
export const setToken = (newToken: string) => localStorage.setItem(API_TOKEN, newToken);
