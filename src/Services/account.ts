import {
  ILoginData,
  IRegisterData,
  IRegisterResponse,
} from "@/types/account.interface";
import axios, { AxiosRequestConfig } from "axios";

export async function register(registerProps: IRegisterData) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const res: IRegisterResponse = await axios.post(
    url,
    {
      email: registerProps.email,
      password: registerProps.password,
      name: registerProps.name,
    },
    axiosConfig
  );

  if (res.access_token) {
    window.localStorage.setItem("token", res.access_token);
    return true;
  }
  return res.message;
}

export async function login(loginProps: ILoginData) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios.post(
    url,
    {
      email: loginProps.email,
      password: loginProps.password,
    },
    axiosConfig
  );
}
