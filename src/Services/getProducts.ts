import axios from "axios";

export const fetchData = async (skip: number) => {
  const URL = " https://dummyjson.com/products?limit=12&skip=" + skip;
  const response = await axios.get(URL);
  const donnees = response.data;
  return donnees.products;
};
