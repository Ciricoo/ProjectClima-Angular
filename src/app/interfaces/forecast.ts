export interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  cloudiness: number;
  rain: number;
  rain_probability: number;
  wind_speedy: string;
  description: string;
  condition: string;
}
