import { weatherActions } from "../slice/WeatherSlice";
// import { Country } from "../../interfaces/interfaces";



// const API_KEY = 'aU5FBIJVxanY3UQf5AXpRHj3rd339yl6'
// const BASE_URL = `https://dataservice.accuweather.com/`

// export const getAutoOptions = (cityName: string | null) => {
//     if (cityName === '') return;
//     return async (dispatch) => {
//         const fetchHandler = async () => {
//           const res = await fetch(
//             `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}&language=en-us`
//           );
//           const data = await res.json();
//           return data;
//         };
//         try {
//             // TODO: action this  להפעיל את זה ולהוריד את הערות
//         //   const options = await fetchHandler();
//           const options: Country[] = countries;
//           console.log(options);
//           dispatch(weatherActions.setAutocompleteOptions({options}));
//         } catch (err) {
//         //   dispatch(
//         //     uiActions.showNotification({
//         //       open: true,
//         //       message: "Sending Request Failed",
//         //       type: "error",
//         //     })
//         //   );
//         }
//       };
// }

// const countries: Country[] = [
//     {
//         "Version": 1,
//         "Key": "328328",
//         "Type": "City",
//         "Rank": 10,
//         "LocalizedName": "London",
//         "Country": {
//             "ID": "GB",
//             "LocalizedName": "United Kingdom"
//         },
//         "AdministrativeArea": {
//             "ID": "LND",
//             "LocalizedName": "London"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "59411",
//         "Type": "City",
//         "Rank": 13,
//         "LocalizedName": "Loudi",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "HN",
//             "LocalizedName": "Hunan"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "347625",
//         "Type": "City",
//         "Rank": 15,
//         "LocalizedName": "Los Angeles",
//         "Country": {
//             "ID": "US",
//             "LocalizedName": "United States"
//         },
//         "AdministrativeArea": {
//             "ID": "CA",
//             "LocalizedName": "California"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "319242",
//         "Type": "City",
//         "Rank": 20,
//         "LocalizedName": "Lome",
//         "Country": {
//             "ID": "TG",
//             "LocalizedName": "Togo"
//         },
//         "AdministrativeArea": {
//             "ID": "M",
//             "LocalizedName": "Maritime"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "57911",
//         "Type": "City",
//         "Rank": 23,
//         "LocalizedName": "Longyan",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "FJ",
//             "LocalizedName": "Fujian"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "77666",
//         "Type": "City",
//         "Rank": 25,
//         "LocalizedName": "Longgang District",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "GD",
//             "LocalizedName": "Guangdong"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "2580116",
//         "Type": "City",
//         "Rank": 25,
//         "LocalizedName": "Longhua District",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "GD",
//             "LocalizedName": "Guangdong"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "2332564",
//         "Type": "City",
//         "Rank": 25,
//         "LocalizedName": "Longnan",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "GS",
//             "LocalizedName": "Gansu"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "2332955",
//         "Type": "City",
//         "Rank": 25,
//         "LocalizedName": "Longhui County",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "HN",
//             "LocalizedName": "Hunan"
//         }
//     },
//     {
//         "Version": 1,
//         "Key": "2333548",
//         "Type": "City",
//         "Rank": 25,
//         "LocalizedName": "Longyang District",
//         "Country": {
//             "ID": "CN",
//             "LocalizedName": "China"
//         },
//         "AdministrativeArea": {
//             "ID": "YN",
//             "LocalizedName": "Yunnan"
//         }
//     }
//   ]