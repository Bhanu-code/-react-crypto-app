import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_HOST
}

const baseUrl = process.env.REACT_APP_NEWS_URL

const createRequest = (url)=> ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCat, count})=> createRequest(`/news/search?q=${newsCat}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi

