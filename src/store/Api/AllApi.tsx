const API_KEY = 'aU5FBIJVxanY3UQf5AXpRHj3rd339yl6' //'g97hXVKDwlgxN8GEIjblmwSlqnik3uGx' // "aU5FBIJVxanY3UQf5AXpRHj3rd339yl6" = itaibiskall
const BASE_URL = `https://dataservice.accuweather.com`


export const weatherByKey = (key: string) => {
    return `${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`
}

export const autocomplete =(wordKey:string) => {
    return `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${wordKey}`
}

export const forecastsByCityKey =(cityKey:string, isCelsius = true) => {
    return `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${isCelsius}`
}
