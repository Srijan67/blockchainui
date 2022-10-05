import axios from "axios";
import { allCoinsUrl } from "./api";
const headers = {
  "X-RapidAPI-Key": "85cea06974mshc11229e39ab444cp13d6cbjsn9f79b81a3249",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "85cea06974mshc11229e39ab444cp13d6cbjsn9f79b81a3249",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const params = {
  referenceCurrencyUuid: "yhjMzLPhuIDl",
  timePeriod: "24h",
  "tiers[0]": "1",
  orderBy: "marketCap",
  orderDirection: "desc",
  limit: "50",
};
export const allCoinsAction = async () => {
  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
