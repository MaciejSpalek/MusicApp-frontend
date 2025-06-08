import { authFetch } from "./authFetch";

export const getProfile = async () => {
  const response = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/protected`)
  const result = await response.json();

  return result;
};
