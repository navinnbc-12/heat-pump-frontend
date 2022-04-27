import axios from "../../src/services/axios-instance";
import { useMutation } from "react-query";
import { queryClient } from "../App";
export async function getFabric() {
  try {
    const api = `v1/services/fabric-details?page=1&perPage=2&type=1`;
    const response = await axios.get(api);
    return response;
  } catch (error) {
    throw error;
  }
}

const addQuote = (data) =>
  axios.post(
    `https://heat-pump-backend.herokuapp.com/api/v1/services/quote`,
    data
  );
export const useAddQuote = (options) =>
  useMutation((data) => addQuote(data), options);
