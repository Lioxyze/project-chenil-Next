import axios, { AxiosRequestConfig } from "axios";

export async function getAllAnimals() {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/animal/all`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await axios.get(url, axiosConfig);
  const data = res.data;
  console.log(data);
  return data;
}

export async function getAllBox() {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/box/all`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await axios.get(url, axiosConfig);
  const data = res.data;
  console.log(data);
  return data;
}

export async function getAllCategories() {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/category/all`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await axios.get(url, axiosConfig);
  const data = res.data;
  console.log(data);
  return data;
}

export async function getAllUsers() {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/user/all`;

  let axiosConfig: AxiosRequestConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await axios.get(url, axiosConfig);
  const data = res.data;
  console.log(data);
  return data;
}
