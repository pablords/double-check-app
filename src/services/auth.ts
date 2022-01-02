export const TOKEN_KEY = "@doubleCheck";
export const USER = "@user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const setUser = (user: string) => {
  localStorage.setItem(USER, user);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
};
