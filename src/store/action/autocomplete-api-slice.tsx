import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Country, WeatherData, AllForecastWeatherData , ParamsForecastQuery } from "../../interfaces/AllInterfaces";

const API_KEY = 'g97hXVKDwlgxN8GEIjblmwSlqnik3uGx'
const BASE_URL = `https://dataservice.accuweather.com`
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/347625?apikey=g97hXVKDwlgxN8GEIjblmwSlqnik3uGx&metric=true

interface Temp {
    cityKey : string | null,
    isCelcus : boolean
}

export const autocompleteSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers){
            headers.set("Accept", "application/json");
            return headers;
        }
    }),
    tagTypes: ['Todos'],
    endpoints:(builder) => ({
    getAutocomplete: builder.query<Country[], string|void>({
        query: (cityName) => `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}`,
    }),
    getCurrentWeather: builder.query<WeatherData[], string|void>({
        query: (cityKey) => {
            if(cityKey !== null || cityKey != ""){
                return  `/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
            }
            
            return "weather";
        },
        transformResponse: (response: WeatherData[]) : WeatherData[] => {
            console.log("transformResponse weatherData1");
            console.log(response);
            let weatherData = JSON.stringify(response);
            console.log("transformResponse weatherData2");
            console.log(weatherData.length);
            return response;
        },
    }),
    getForecastWeather: builder.query<AllForecastWeatherData[], ParamsForecastQuery>({
        query: (ParamsForecastQuery) => {
            if(ParamsForecastQuery.cityKey !== null || ParamsForecastQuery.cityKey != ""){
                return  `/forecasts/v1/daily/5day/${ParamsForecastQuery.cityKey}?apikey=${API_KEY}&metric=${ParamsForecastQuery.isCelcus}`
            }
            
            return "weather";
        },
        transformResponse: (response: AllForecastWeatherData[]) : AllForecastWeatherData[] => {
            console.log("transformResponse getForecastWeather1");
            console.log(response);
            let ForecastWeather = JSON.stringify(response);
            console.log("transformResponse getForecastWeather2");
            console.log(ForecastWeather.length);
            return response;
        },
    }),
}),
})

// endpoints:(builder) => ({
//     getTodo: builder.query<Country[], string|void>({
//         query: (cityName) => `/autocomplete?apikey=${API_KEY}&q=${cityName}`,
//     }),
// }),

export const {useGetAutocompleteQuery, useGetCurrentWeatherQuery, useGetForecastWeatherQuery} = autocompleteSlice;