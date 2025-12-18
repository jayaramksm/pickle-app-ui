import { POST } from "../helpers/apis";

export const loginAPI = (data: {
  email: string;
  password: string;
}) => POST("/auth/login", data);

export const signupAPI = (data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => POST("/auth/signup", data);
