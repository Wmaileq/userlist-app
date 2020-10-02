import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getRandomUsers = (amount = 1) =>
  usersApi.get("/", {
    params: {
      results: amount,
    },
  });
