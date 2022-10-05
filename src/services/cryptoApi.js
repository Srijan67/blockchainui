// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";
// import {useGetCryptosQuery} from "../services/cryptoApi"
// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "85cea06974mshc11229e39ab444cp13d6cbjsn9f79b81a3249",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };
// const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => "/coins",
//     }),
//   }),
// });

// export const {
//     useGetCryptosQuery,
// } = cryptoApi
