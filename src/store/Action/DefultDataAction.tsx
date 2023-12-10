import { weatherByKey } from '../Api/AllApi'
import axios from 'axios'
import { CurrentWeatherDataDetails } from "../../interfaces/AllInterfaces";


// Actions
export const defultDataAction = async (query: string): Promise<CurrentWeatherDataDetails | false> => {
    const res = await axios.get(weatherByKey(query), {headers: { Accept: 'application/json' }})
    .then((response) =>{
        if (response && response["data"]) {
          return response.data;
        } else {
          return false;
        }
    })
    
    return res[0] as CurrentWeatherDataDetails;
};



