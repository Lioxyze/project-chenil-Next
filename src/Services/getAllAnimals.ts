import axios from "axios";

export async function getAllAnimals() {
  const url = ``;
  return axios.get(url).then((res) => res.data);
}
