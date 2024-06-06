import {
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
} from "@/types/account.interface";
import axios, { AxiosRequestConfig } from "axios";

export async function register(registerProps: IRegisterData) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/auth/signup`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const res = await axios.post(
    url,
    {
      email: registerProps.email,
      password: registerProps.password,
      name: registerProps.name,
    },
    axiosConfig
  );
  const data: IRegisterResponse = res.data;
  console.log(data);
  if (data.access_token) {
    window.localStorage.setItem("token", data.access_token);
    return true;
  }
  return data.message;
}

export async function login(loginProps: ILoginData) {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/auth/signin`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const res = await axios.post(
    url,
    {
      email: loginProps.email,
      password: loginProps.password,
    },
    axiosConfig
  );
  const data: ILoginResponse = res.data;
  console.log(data);
  if (data.access_token) {
    window.localStorage.setItem("token", data.access_token);
    return true;
  }
  return data.message;
}
