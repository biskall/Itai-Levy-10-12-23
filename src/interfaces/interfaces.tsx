export interface Mode {
    value: string
}

export interface WeatherInitialState {
  options: Country[];
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