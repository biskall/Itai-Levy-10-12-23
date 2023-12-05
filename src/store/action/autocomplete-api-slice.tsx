import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Country } from "../../interfaces/interfaces";

const API_KEY = 'aU5FBIJVxanY3UQf5AXpRHj3rd339yl6'
const BASE_URL = `https://dataservice.accuweather.com/locations/v1/cities`
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete

export const autocompleteSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers){
            headers.set("Accept", "application/json");
            return headers;
        }
    }),
    endpoints(builder) {
        return{
            fetchCountries: builder.query<Country[], string|void>({
                query: (cityName) => `/autocomplete?apikey=${API_KEY}&q=${cityName}`,
            })
        }
    },
})

export const {useFetchCountriesQuery} = autocompleteSlice;