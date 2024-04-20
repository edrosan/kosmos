import { KOSMOS_API } from "../constants/api";

export const fetchKosmos = async (end, options) => {
  const response = await fetch(`${KOSMOS_API}${end}`, options);
  const data = await response.json();
  
  return data;
}