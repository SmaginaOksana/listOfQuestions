const LS_ACCESS_TOKEN_KEY = "accessToken";

export const getTokenCacheFromLS = () =>
  localStorage.getItem(LS_ACCESS_TOKEN_KEY);

export const setTokenToLS = (token: string | null) => {
  if (token) localStorage.setItem(LS_ACCESS_TOKEN_KEY, token);
  else localStorage.removeItem(LS_ACCESS_TOKEN_KEY);
};

export const removeTokenFromLS = () => {
  localStorage.removeItem(LS_ACCESS_TOKEN_KEY);
};
