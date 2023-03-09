import axios from "axios";
import jwt_decode from "jwt-decode";

const API_BASE_URL = "http://localhost:4000";

interface LoginResponse {
  token: string;
}

export function login(email: string, password: string): Promise<string> {
  return axios
    .post<LoginResponse>(`${API_BASE_URL}/auth/login`, { email, password })
    .then((response) => response.data.token);
}

export function getCurrentUser(): any {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token);
    return decoded;
  } else {
    return null;
  }
}
