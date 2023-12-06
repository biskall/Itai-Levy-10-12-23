export interface Mode {
    value: string
}

export interface WeatherInitialState {
  options: Country[],
  defultIsFavorite: boolean,
  defultCityKey: string,
  defultCityName: string,
  currentWeatherData: CurrentWeatherData,
}

export interface CurrentWeatherData {
  isFavorite: boolean,
  cityKey: string,
  cityName: string,
}

export interface Country {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: {
      ID: string;
      LocalizedName: string;
    };
    AdministrativeArea: {
      ID: string;
      LocalizedName: string;
    };
  }

  export interface MainPaperWeatherDetailsProps {
    date: string;
    temperature: {
      Metric: Temperature;
      Imperial: Temperature;
    };
  }

  export interface Temperature {
    Value: number;
    Unit: string;
    UnitType: number;
  }
  
  export interface WeatherData {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: null | string;
    IsDayTime: boolean;
    Temperature: {
      Metric: Temperature;
      Imperial: Temperature;
    };
    MobileLink: string;
    Link: string;
  }

  interface DayNight {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  }
  
  export interface ParamsForecastQuery {
    cityKey : string | null,
    isCelcus : boolean
  }

  export interface Forecast {
    Date: string;
    EpochDate: number;
    Temperature: {
      Minimum: Temperature;
      Maximum: Temperature;
    };
    Day: DayNight;
    Night: DayNight;
    Sources: string[];
    MobileLink: string;
    Link: string;
  }
  
  interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string | null;
    EndEpochDate: number | null;
    MobileLink: string;
    Link: string;
  }
  
  export interface AllForecastWeatherData {
    Headline: Headline;
    DailyForecasts: Forecast[];
  }

  export const forecasts: AllForecastWeatherData[] = [
  {
    "Headline": {
        "EffectiveDate": "2023-12-09T07:00:00-08:00",
        "EffectiveEpochDate": 1702134000,
        "Severity": 4,
        "Text": "Pleasant this weekend",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-12-06T07:00:00-08:00",
            "EpochDate": 1701874800,
            "Temperature": {
                "Minimum": {
                    "Value": 11.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 24.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2023-12-07T07:00:00-08:00",
            "EpochDate": 1701961200,
            "Temperature": {
                "Minimum": {
                    "Value": 9.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 21.2,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2023-12-08T07:00:00-08:00",
            "EpochDate": 1702047600,
            "Temperature": {
                "Minimum": {
                    "Value": 6.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 20.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2023-12-09T07:00:00-08:00",
            "EpochDate": 1702134000,
            "Temperature": {
                "Minimum": {
                    "Value": 8.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 22.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2023-12-10T07:00:00-08:00",
            "EpochDate": 1702220400,
            "Temperature": {
                "Minimum": {
                    "Value": 10.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 22.5,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/daily-weather-forecast/347625?day=5&unit=c&lang=en-us"
        }
    ]
}
  ]

  // data example response of useGetCurrentWeatherQuery
  export const weatherData: WeatherData[] = [
    {
      "LocalObservationDateTime": "2023-12-06T02:48:00-08:00",
      "EpochTime": 1701859680,
      "WeatherText": "Mostly clear",
      "WeatherIcon": 34,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
          "Metric": {
              "Value": 15.6,
              "Unit": "C",
              "UnitType": 17
          },
          "Imperial": {
              "Value": 60.0,
              "Unit": "F",
              "UnitType": 18
          }
      },
      "MobileLink": "http://www.accuweather.com/en/us/los-angeles-ca/90012/current-weather/347625?lang=en-us",
      "Link": "http://www.accuweather.com/en/us/los-angeles-ca/90012/current-weather/347625?lang=en-us"
  }
];

  export const countries: Country[] = [
    {
        "Version": 1,
        "Key": "328328",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "London",
        "Country": {
            "ID": "GB",
            "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
            "ID": "LND",
            "LocalizedName": "London"
        }
    },
    {
        "Version": 1,
        "Key": "59411",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Loudi",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "HN",
            "LocalizedName": "Hunan"
        }
    },
    {
        "Version": 1,
        "Key": "347625",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Los Angeles",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "CA",
            "LocalizedName": "California"
        }
    },
    {
        "Version": 1,
        "Key": "319242",
        "Type": "City",
        "Rank": 20,
        "LocalizedName": "Lome",
        "Country": {
            "ID": "TG",
            "LocalizedName": "Togo"
        },
        "AdministrativeArea": {
            "ID": "M",
            "LocalizedName": "Maritime"
        }
    },
    {
        "Version": 1,
        "Key": "57911",
        "Type": "City",
        "Rank": 23,
        "LocalizedName": "Longyan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "FJ",
            "LocalizedName": "Fujian"
        }
    },
    {
        "Version": 1,
        "Key": "77666",
        "Type": "City",
        "Rank": 25,
        "LocalizedName": "Longgang District",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GD",
            "LocalizedName": "Guangdong"
        }
    },
    {
        "Version": 1,
        "Key": "2580116",
        "Type": "City",
        "Rank": 25,
        "LocalizedName": "Longhua District",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GD",
            "LocalizedName": "Guangdong"
        }
    },
    {
        "Version": 1,
        "Key": "2332564",
        "Type": "City",
        "Rank": 25,
        "LocalizedName": "Longnan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GS",
            "LocalizedName": "Gansu"
        }
    },
    {
        "Version": 1,
        "Key": "2332955",
        "Type": "City",
        "Rank": 25,
        "LocalizedName": "Longhui County",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "HN",
            "LocalizedName": "Hunan"
        }
    },
    {
        "Version": 1,
        "Key": "2333548",
        "Type": "City",
        "Rank": 25,
        "LocalizedName": "Longyang District",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "YN",
            "LocalizedName": "Yunnan"
        }
    }
  ]

