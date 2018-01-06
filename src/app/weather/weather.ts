export interface Weather {
  current: CurrentWeather;
  dailyForecast: DailyWeather[];
}

export interface CurrentWeather {
  apparentTemperature: number;
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  icon: string;
  ozone: number;
  precipIntensity: number;
  precipProbability: number;
  precipType: number;
  pressure: number;
  summary: string;
  temperature: number;
  time: number;
  uvIndex: number;
  visibility: number;
  windBearing: number;
  windGust: number;
  windSpeed: number;
  period: string;
}

export interface DailyWeather {
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  icon: string;
  moonPhase: number;
  ozone: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipProbability: number;
  pressure: number;
  summary: string;
  sunriseTime: number;
  sunsetTime: number;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  temperatureMin: number;
  temperatureMinTime: number;
  time: number;
  uvIndex: number;
  uvIndexTime: number;
  windBearing: number;
  windGust: number;
  windGustTime: number;
  windSpeed: number;
}
