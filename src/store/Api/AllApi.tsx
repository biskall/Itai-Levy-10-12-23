const API_KEY = 'QS5Wvqy7ysiHVk86Z23d9adpwdzmh9Oj'
const BASE_URL = `https://dataservice.accuweather.com`


export const weatherByKey = (key: string) => {
    return `${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`
}

export const autocomplete = (wordKey: string) => {
    return `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${wordKey}`
}

export const forecastsByCityKey = (cityKey: string, isCelsius = true) => {
    return `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${isCelsius}`
}
