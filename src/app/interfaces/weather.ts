import { Forecast } from "./forecast";

export interface Weather {
    by: string;
    valid_key: boolean;
    results: {
      temp: number;
      date: string;
      time: string;
      condition_code: string;
      description: string;
      currently: string;
      cid: string;
      city: string;
      img_id: string;
      humidity: number;
      cloudiness: number;
      rain: number;
      wind_speedy: string;
      wind_direction: number;
      wind_cardinal: string;
      sunrise: string;
      sunset: string;
      moon_phase: string;
      condition_slug: string;
      city_name: string;
      timezone: string;
      forecast: Forecast[];
      cjhukljkref: string;
    };
    execution_time: number;
    from_cache: boolean;
  }