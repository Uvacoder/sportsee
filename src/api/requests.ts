import axios from "axios";
import Endpoints from "./endpoints";

const isDev = import.meta.env.DEV;
const apiUrl = isDev ? "http://localhost:3000" : import.meta.env.VITE_API_URL;

export const client = axios.create({
  baseURL: apiUrl,
});

export const requests = {
  getUser: async (userId: number) => {
    const response = await client.get(
      Endpoints.USER.replace(":userId", userId.toString())
    );
    return response.data;
  },
  getActivity: async (userId: number) => {
    const response = await client.get(
      Endpoints.ACTIVITY.replace(":userId", userId.toString())
    );
    return response.data;
  },
  getAverageSession: async (userId: number) => {
    const response = await client.get(
      Endpoints.AVERAGE_SESSION.replace(":userId", userId.toString())
    );
    return response.data;
  },
  getPerformance: async (userId: number) => {
    const response = await client.get(
      Endpoints.PERFORMANCE.replace(":userId", userId.toString())
    );
    return response.data;
  },
};
