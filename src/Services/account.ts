import { ILoginData, IRegisterData } from "@/types/account.interface";
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
  return axios.post(
    url,
    {
      email: registerProps.email,
      password: registerProps.password,
      name: registerProps.name,
    },
    axiosConfig
  );
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
