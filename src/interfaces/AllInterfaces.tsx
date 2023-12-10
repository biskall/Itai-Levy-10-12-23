export interface Mode {
    value: string,
    isCelsius: boolean,
}

export interface WeatherInitialState {
  options: Country[],
  defultWeatherDataKeys: DefultWeatherDataKeys,
  currentWeatherDatakeys: CurrentWeatherDatakeys,
  allForecastWeatherData: AllForecastWeatherData[] | undefined,
  currentWeatherDataDetails :CurrentWeatherDataDetails | undefined,
  IsError: boolean,
}

export interface DefultWeatherDataKeys {
    isFavorite: boolean,
    cityKey: string,
    cityName: string,
  }

export interface CurrentWeatherDatakeys {
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
    WeatherData: CurrentWeatherDataDetails ;
  }

  export interface Temperature {
    Value: number;
    Unit: string;
    UnitType: number;
  }
  
  export interface CurrentWeatherDataDetails {
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

  export interface WeatherDataWithKeyAndName {
    currentWeatherDataDetails: CurrentWeatherDataDetails,
    cityKey: string;
    cityName: string;
  }

  interface DayNight {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  }
  
  export interface ParamsForecastQuery {
    cityKey : string | null,
    isCelsius : boolean
  }

  export interface ForecastsInitialState{
    allForecastWeatherData: AllForecastWeatherData,
    isError : boolean,
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
    Headline: Headline | undefined;
    DailyForecasts: Forecast[] | undefined;
  }

  export interface CardFavoritesIntialState{
    WeatherDataWithKeyAndName: WeatherDataWithKeyAndName[],
    Favorites : Favorites[],
    IsError: boolean,
  }

  export interface Autocomplete{
    Country: Country[],
    IsError: boolean,
    KeyWord: string,
  }

  export interface FavoritesIntialState {
    Favorites : Favorites[],
    IsError: boolean,
    IsFavorite: boolean,
    FirstRun: boolean,
  }
  export interface Favorites{
    cityKey: string;
    cityName: string;
  }
